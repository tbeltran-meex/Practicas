import '../CSS/Text.css'
interface TextProps{
  titulo:string;
  descripcion:string;
}
const Text = ({titulo,descripcion}:TextProps) => {

  return (
  <section>
    <div className="cont-title">
      <h1>{titulo}</h1>
    </div>
    <div className="cont-inf">
      <p>{descripcion}</p>
    </div>
  </section>
  )
}

export default Text