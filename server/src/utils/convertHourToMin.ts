export default function convertHourToMin(time: string) {
    const [hour, min] = time.split(':').map(Number);

    return (hour * 60) + min;
}