import React, { DOM } from 'react';

const TextBox = ({ content }) => (
  DOM.span(null, `${content}`)
);

export default TextBox;