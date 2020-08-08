import { Request, Response } from "express";
import db from "../database/connection";
import convertHourToMin from "../utils/convertHourToMin";

export interface ScheduleItem {
    week_day: number,
    from: string,
    to: string
}

class ClassController {
    async index(req: Request, res: Response){
        console.log("NEW REQUEST")
        const filters = req.query;

        const time = filters.time as string;
        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        
        if(!(week_day || subject || time)){
            return res.status(400).json({
                error: 'Missing filters parameters to search classes.'
            })
        }

        const timeInMinutes = convertHourToMin(time);

        const classes = await db('classes')
        .whereExists(function(){
            this.select('class_schedule.*')
                .from('class_schedule')
                .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
                .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
                .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
                .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
        })
            .where('classes.subject', '=', subject)
            .join('users', 'classes.user_id', '=', 'users.id')
            .select(['classes.*', 'users.*']);

        return res.json(classes);
    }

    async store(req: Request, res: Response){
        const { 
            name, 
            avatar, 
            whatsapp, 
            bio, 
            subject, 
            cost, 
            schedule 
        } = req.body;

        const transaction = await db.transaction();

        try {
            const usersIds = await transaction('users').insert({
                name,
                avatar,
                whatsapp,
                bio
            });
    
            const user_id = usersIds[0];
    
            const classesIds = await transaction('classes').insert({
                subject,
                cost,
                user_id
            })
    
            const class_id = classesIds[0];
    
            const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
                return {
                    class_id,
                    week_day: scheduleItem.week_day,
                    from: convertHourToMin(scheduleItem.from),
                    to: convertHourToMin(scheduleItem.to)
                }
            });
    
            await transaction('class_schedule').insert(classSchedule);
    
            await transaction.commit();
            return res.sendStatus(201);
        } catch (error) {
            await transaction.rollback();

            return res.status(400).json({
                error: 'Unexpected error while creating new class.'
            });   
        }
    }
    
};

export default new ClassController();