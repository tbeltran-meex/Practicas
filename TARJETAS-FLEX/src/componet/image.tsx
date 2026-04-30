
import '../CSS/image.css'
interface TextProps{
  imagen:string;
}
const Imagen = ({imagen}:TextProps) => {

  return (
   
     
      <img src={imagen} alt="" className='prod-img' />

  )
}

export default Imagen