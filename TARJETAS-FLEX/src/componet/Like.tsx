import { useState } from 'react';
import Corazon from '../../public/corazon.svg';
import '../CSS/Like.css';

const Like = () => {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div className="cont-like">
      <button 
        className={`cont-button ${active ? 'is-active' : ''}`} 
        onClick={() => setActive(!active)}
      >
        <img src={Corazon} alt="Like" />
      </button>
    </div>
  );
};

export default Like;