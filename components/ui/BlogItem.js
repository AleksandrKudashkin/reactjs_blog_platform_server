import React, { DOM } from 'react';
import Image from './Image';
import TextBox from './TextBox';

const BlogItem = ({ post }) => (
  DOM.div(null,
    React.createElement(Image, { args: post.imageArgs }),
    React.createElement(TextBox, { content: post.text })
  )
);

export default BlogItem;