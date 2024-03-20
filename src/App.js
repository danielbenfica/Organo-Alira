import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '--primary-programacao',
      corSecundaria: '--bg-programacao',
    },
    {
      nome: 'Front-end',
      corPrimaria: '--primary-front-end',
      corSecundaria: '--bg-front-end',
    },
    {
      nome: 'Data Science',
      corPrimaria: '--primary-data-science',
      corSecundaria: '--bg-data-science',
    },
    {
      nome: 'Devops',
      corPrimaria: '--primary-devops',
      corSecundaria: '--bg-devops',
    },
    {
      nome: 'UX e Design',
      corPrimaria: '--primary-ux-design',
      corSecundaria: '--bg-ux-design',
    },
    {
      nome: 'Mobile',
      corPrimaria: '--primary-mobile',
      corSecundaria: '--bg-mobile',
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '--primary-inovacao-gestao',
      corSecundaria: '--bg-inovacao-gestao',
    }
  ]

  const aoNovoColaboradorCadastrado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorCadastrado(colaborador)} />
      {times.map((time) => <Time 
          key={time.nome} 
          nome={time.nome} corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />
      )}
      <Rodape />
    </div>
  );
}

export default App;
