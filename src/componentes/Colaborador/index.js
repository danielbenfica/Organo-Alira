import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corPrimaria}) => {
  return (
    <div className='colaborador'>
      <header className='cabecalho' style={{backgroundColor: `var(${corPrimaria})`}}>
        <img src={imagem} alt=''/>
      </header>
      <div className='rodape'>
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador