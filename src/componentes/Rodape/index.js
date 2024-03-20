import './Rodape.css'

const Rodape = () => {
  return (
    <footer className='rodape'>
      <section className='icones'>
          <ul>
              <li>
                  <img src="/imagens/fb.png" alt="FaceBook"/>
              </li>
              <li>
                  <img src="/imagens/tw.png" alt="FaceBook"/>
              </li>
              <li>
                  <img src="/imagens/ig.png" alt="FaceBook"/>
              </li>
          </ul>
      </section>
      <section className='logo'>
          <img src="./imagens/logo.png" alt="Logo Organo" />
      </section>
      <section>
          <p>
            Desenvolvido por Alura
          </p>
      </section>
    </footer>
  )
}

export default Rodape