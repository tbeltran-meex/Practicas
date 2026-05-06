import styled from "styled-components";

// Contenedor principal con la fuente Inter
const SectionText = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
  font-family: "Inter", sans-serif;
  padding: 40px;

  /* Redimensión para móvil */
  @media (max-width: 768px) {
    padding: 20px;
    text-align: center; /* Centramos el texto en móviles */
    align-items: center;
  }
`;

const ButtonSab = styled.button`
  background-color: #295b5d; 
  color: #f5f5f5;
  padding: 12px 32px;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: transform 0.2s;

  &:active {
    transform: scale(0.95);
  }

  /* Botones en bloque para móvil si es necesario */
  @media (max-width: 480px) {
    width: 100%;
    padding: 14px 20px;
  }
`;

const ButtonDos = styled(ButtonSab)`
  background-color: transparent;
  color: #295b5d;
  border: 2px solid #295b5d;
  box-shadow: none;
`;

const Info = () => {
  return (
    <SectionText className="flex flex-col gap-8 max-w-5xl w-full">
      <div className="space-y-4">
        {/* TITULO */}
        <h1 className="text-3xl md:text-5xl font-bold text-green-900 leading-tight">
          MEDICAMENTOS EXCLUSIVOS
        </h1>
        {/* INFO*/}
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error sed 
          deleniti repellat repellendus quod harum inventore saepe.
        </p>
      </div>

      {/* BOTONES */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <ButtonSab>Saber más</ButtonSab>
        <ButtonDos>Contacto</ButtonDos>
      </div>
    </SectionText>
  );
};

export default Info;