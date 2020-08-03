import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
    <header>
      <img src="https://avatars1.githubusercontent.com/u/37005228?s=460&u=d8e273255321805dab78c08c2d75678f93624b3e&v=4" alt="Isaias Oliveira"/>
      <div>
        <strong>Isaias Oliveira</strong>
        <span>Biologia</span>
      </div>
    </header>
    
    <p>
      Sempre em busca do algoritmo genético perfeito. Cada população da sua cabeça deve ser sempre melhor do que as anteriores
      <br /> <br />
      Evolutividade é a chave para achar uma solução ótima para o problema. Aos poucos e constante, mas sempre melhor.
    </p>

    <footer>
      <p>
        Preço/hora
        <strong>R$ 130,00</strong>
      </p>
      <button type="button">
        <img src={whatsappIcon} alt="Whatsapp" />
        Entrar em contato
      </button>
    </footer>
  </article>
  );
}

export default TeacherItem;