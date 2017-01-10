import React, { DOM } from 'react';

import _ from 'lodash';

import BlogItem from './BlogItem';

const BlogList = ({ posts }) => (
  DOM.ul(
    null,
    _.map(
      posts,
      (post, key) => (
        DOM.li(
          { key },
          React.createElement(BlogItem, { post: post })
        )
      )
    )
  )
);

export default BlogList;