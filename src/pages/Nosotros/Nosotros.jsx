import Integrante from '../../componentes/Integrante/Integrante'
import style from './nosotros.module.css';

function Nosotros() {
  const integrantes = [
    {
      nombre: 'Richard',
      usuarioGithub: 'richardsiv',
      genero: 'masculino',
      email: 'richardsiverioww@gmail.com'
    },
    {
      nombre: 'Rosangel',
      usuarioGithub: 'RosangelBetancourt',
      genero: 'femenino',
      email: 'betancourtmatuzalenrove@uvm.edu.ve'
    },
    {
      nombre: 'Miguel',
      usuarioGithub: 'Ovmiguel16',
      genero: 'masculino',
      email: 'omanavillamizarmian@uvm.edu.ve'
    },
    {
      nombre: 'Yeriagny',
      usuarioGithub: 'YeriagnyC',
      genero: 'femenino',
      email: 'chirinosteranyeve@uvm.edu.ve'
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