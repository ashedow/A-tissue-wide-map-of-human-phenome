import React from 'react';
import {Body} from '../img/background';
import ReactSVG from 'react-svg'

const Canvas = () => {
  const style = {
      position: 'absolute',
      objectFit: "cover",
      height: "100vh",
      margin: "auto",
  };
  return (
      <ReactSVG src={Body}
        svgStyle={style} />
  );
};

export default Canvas;