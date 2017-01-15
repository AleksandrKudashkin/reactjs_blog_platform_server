import React from 'react';

import BlogList from '../ui/BlogList';

const posts = [
  {
    imageArgs: {
      src: 'http://www.kernix.com/web/kernix/images/opensource/react.png',
      width: 40,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet'
  },
  {
    imageArgs: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png',
      width: 40,
      height: 40,
      alt: 'React logo black',
    },
    text: 'Lorem ipsum dolor sit amet2'
  },
  {
    imageArgs: {
      src: 'https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png',
      width: 80,
      height: 40,
      alt: 'React logo',
    },
    text: 'Lorem ipsum dolor sit amet3'
  },
]

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts };
  }
  render() {
    const { posts } = this.state;
    return React.createElement(BlogList, { posts });
  }
}

export default BlogPage;