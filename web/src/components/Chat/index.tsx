import React from 'react';

import Input from '../Input';

import './styles.css';

const Chat: React.FC = () => {
  return (
      <div className="chat-container">
          <div className="chat-header">
            Professor de Geografia
          </div>

          <div className="chat-body">
            <div className="message-received">
              <div className="message-text">
                bem?
              </div>
            </div>

            <div className="message-received">
              <div className="message-text">
                bem?
                m?dasdasdasds
                sdsadas
                sfasfsaf
                afsfsafas
                gasgasa
                fa
                dadadsaaaaaaaaa
              </div>
            </div>

            <div className="message-sended">
              <div className="message-text">
                bem?dasdasdasds
                sdsadas
                sfasfsaf
                afsfsafas
                gasgas
                sdasdasf
                sdasdasfsafsa
                fasffagew
                qgq
                gqgqsf
                wq
                fq
              </div>
            </div>

            <div className="message-received">
              <div className="message-text">
                bem?dsadadadsad
              </div>
            </div>

            <div className="message-received">
              <div className="message-text">
                bem?dsadadadsad
              </div>
            </div>

            <div className="message-sended">
              <div className="message-text">
                vou bem sim.dsadasdasdasddasdasdasd
                dasdasdasdsff
                fadf
                dasdasdasdsfffsaf

                fsafsa
                for await (const f
                afasf
                as
                f
                af of object) {
                  
                }
              </div>
            </div>
            <div className="message-sended">
              <div className="message-text">
                a
              </div>
            </div>
          </div>

          <div className="chat-footer">
                  <form action="">
                    <div className="chat-input-block">
                        <Input name="chat-input" label="" autoComplete="off"/>
                        <button type="submit">Enviar</button>
                    </div>
                  </form>
          </div>
      </div>
  );
}

export default Chat;