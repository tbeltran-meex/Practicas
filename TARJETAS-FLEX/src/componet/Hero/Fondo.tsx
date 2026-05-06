import styled from "styled-components";
import plants from "../../../public/plants.png"
import ingrendients from "../../../public/ingredients.png"
import ingrendients2 from "../../../public/ingred2.png"
import Imagen from "../Hero/Imagen";
import Info from "../Hero/Info";

const SectionFondo = styled.section`
  background: #acf5f6cc;
  min-height: 800px; /* Usamos min-height para que crezca si hay mucho contenido */
  width: 100%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: 100vh;
    height: auto;
    padding: 20px 0;
  }
`;

const SectionDis = styled.div`
  display: flex;
  flex-direction: row; /* Horizontal en desktop */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  
  @media (max-width: 1024px) {
    flex-direction: column; /* Vertical en móvil/tablet */
    gap: 40px;
  }
`;

const SectionCir = styled.div`
  background-color: #295b5d;
  border-radius: 50%;
  @media (max-width: 768px) {
    width: 300px !important;
    height: 300px !important;
  }
`;const Fondo = () => {
  return (
    <SectionFondo className="relative min-h-[800px] overflow-hidden">
      
      {/* PLANTAS */}
    
      <div className="absolute z-0 opacity-60 top-0 right-0 md:right-12">
        <img src={plants} alt="" className="w-[300px] md:w-[450px]" />
      </div>

      {/*INGREDIENTES FONDO */}

      <div className="absolute z-10 blur-md opacity-30 left-0 top-1/2 -translate-y-1/2 md:left-12 md:top-80">
        <img src={ingrendients} className="w-[600px] md:w-[850px] object-contain" />
      </div>
      <div className="relative z-20 flex flex-col items-center w-full h-full min-h-[800px] px-10 md:block md:px-0">

        <div className="relative flex items-center justify-center w-full h-[500px] md:static md:h-auto">
          
          {/* CÍRCULO */}

          <SectionCir className="absolute z-0 blur-xl opacity-80 left-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:top-80 md:w-[650px] md:h-[640px] shadow-lg blur-lg" />

          {/* IMAGEN GEL*/}
          <div className="relative z-20 scale-75 md:scale-100 md:absolute md:left-[480px] md:top-1/2 md:-translate-y-1/2">
            <Imagen />
          </div>

          {/* INGREDIENTES 2  */}
    
          <div className="absolute z-10 -left-20 top-1/2 -translate-y-1/2 md:left-0 md:top-100">
            <img 
              src={ingrendients2} className="w-[250px] md:w-[450px] blur-[2px] md:blur-[2px] drop-shadow-2xl" />
          </div>
        </div>

        {/*TEXTO */}
        <div className="z-30 w-full mt-10 md:mt-0 md:absolute md:right-1/6 md:top-80 md:w-[800px]">
          <Info />
        </div>

      </div>
    </SectionFondo>
  );
};
export default Fondo