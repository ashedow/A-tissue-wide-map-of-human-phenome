import React from 'react';
import {Body} from '../img/background';
import ReactSVG from 'react-svg'

const Canvas = () => {
  const style = {
      objectFit: "cover",
      height: "100vh",
      margin: "auto",
      position: 'relative',
      display: 'inline'
  };
  return (
      <ReactSVG src={Body}
        svgStyle={style} />
  );
};

export default Canvas;