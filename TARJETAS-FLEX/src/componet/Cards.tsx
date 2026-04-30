import Button from "./Button"
import Imagen from "./image"
import Like from "./Like"
import Text from "./Text"

import '../CSS/cards.css'
  const info=[
{
id:1,
tit:'CREMA CONTORNO DE OJOS',
descripcion:'Limpiador, hidratante y tratamiento especializado.',
imagen:'../../public/crema_ojo.png',
fondo:'../../public/fondo1.png'

},
{
  id:2,
tit:'GEL CELULIMEX',
descripcion:'Reafirma, hidrata y refresca.',
imagen:'../../public/gel-celulimex.png',
fondo:'../../public/fondo2.png'
},
{
  id:3 ,
tit:'GEL ANTIBACETERIAL',
descripcion:'Limpiador, hidratante y tratamiento especializado."',
imagen:'../../public/Gel-antibacterial.png',
fondo:'../../public/fondo3.png'
}


]
const Cards = () => {
  console.log(info);

  return (
    <>

      {info.map((conte) => (
        <section key={conte.id} className="container-cards">
          
          <img src={conte.fondo} alt="" className="background-img" />

          <div className="container-like">
            <Like />
          </div>

          <div className="container-text">
    
            <Text titulo={conte.tit} descripcion={conte.descripcion} />
          </div>

          <div className="container-image">
            <div className="fondo-img">
              <div className="circulo-az"></div>
              <div className="circulo-ver"></div>
              <Imagen imagen={conte.imagen} />
            </div>
          </div>

          <div className="container-button">
            <Button />
          </div>

        </section>
      ))}
    </>
  );
};

export default Cards;