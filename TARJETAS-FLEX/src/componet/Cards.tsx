import Button from "./Button"
import Imagen from "./image"
import Like from "./Like"
import Text from "./Text"
import Fondo from '../../public/ingredientes.jpg';
import '../CSS/cards.css'
const Cards = () => {

return(<>
<section className="container-cards">
  <img src={Fondo} alt=""  className="background-img"/>
<div className="container-like">
  <Like/>
</div>
<div className="container-text"> 
  <Text/>
  </div>
<div className=" container-image"> 
      <div className="fondo-img">
      <div className="circulo-az"></div>
      <div className="circulo-ver"></div>
    <Imagen/>
    </div>
  </div>
<div className="container-button">
  <Button/>
  </div>
   
 
  
    
</section>

<section className="container-cards">
  <img src={Fondo} alt=""  className="background-img"/>
<div className="container-like">
  <Like/>
</div>
<div className="container-text"> 
  <Text/>
  </div>
<div className=" container-image"> 
      <div className="fondo-img">
      <div className="circulo-az"></div>
      <div className="circulo-ver"></div>
    <Imagen/>
    </div>
  </div>
<div className="container-button">
  <Button/>
  </div>
   
 
  
    
</section>
<section className="container-cards">
  <img src={Fondo} alt=""  className="background-img"/>
<div className="container-like">
  <Like/>
</div>
<div className="container-text"> 
  <Text/>
  </div>
<div className=" container-image"> 
      <div className="fondo-img">
      <div className="circulo-az"></div>
      <div className="circulo-ver"></div>
    <Imagen/>
    </div>
  </div>
<div className="container-button">
  <Button/>
  </div>
   
 
  
    
</section>
  </>
)
}
export  default Cards