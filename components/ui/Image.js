import React, { DOM } from 'react';

const Image = ({ args }) => (
  DOM.img( 
    { 
      src: args.src, 
      width: args.width, 
      height: args.height, 
      alt: args.alt 
    } 
  )
);

export default Image;