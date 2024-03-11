import Integrante from '../../componentes/Integrante/Integrante'
import style from './nosotros.module.css';
import Yeriagny from '../../assets/yeriagny.jpg'
import Richard from '../../assets/Richard.jpg'
import Rosangel from '../../assets/rosangel.jpg'
import Miguel from '../../assets/miguel.jpg'


function Nosotros() {
  const integrantes = [
    {
      nombre: 'Richard',
      usuarioGithub: 'richardsiv',
      email: 'richardsiverioww@gmail.com',
      avatar: Richard
    },
    {
      nombre: 'Rosangel',
      usuarioGithub: 'RosangelBetancourt',
      email: 'betancourtmatuzalenrove@uvm.edu.ve',
      avatar: Rosangel
    },
    {
      nombre: 'Miguel',
      usuarioGithub: 'Ovmiguel16',
      email: 'omanavillamizarmian@uvm.edu.ve',
      avatar: Miguel
    },
    {
      nombre: 'Yeriagny',
      usuarioGithub: 'YeriagnyC',
      email: 'chirinosteranyeve@uvm.edu.ve',
      avatar: Yeriagny
    },
  ]

  return (
    <div className={style.contenedor}>

    <div className={style.contentTitulo}> 
      <h3>Participantes</h3>
    </div>

    <div className={style.integrantes}>        
      { 
          integrantes.map( (integrante, indice) => (
          <Integrante
            alumno={integrante}
            key={indice}
          />
        ))  
      }         
    </div>
  </div>
  )
}

export default Nosotros