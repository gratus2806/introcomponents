'use strict';
import React from 'react';

 import MetaTags from 'react-meta-tags';
// import DocumentMeta from 'react-document-meta';

class MyOgComponent extends React.Component {
  render() {
    return (
        <div class="wrapper">
          <MetaTags>
            <title>Page 1</title>
            <meta property="og:image" content="https://davidwalsh.name/wp-content/themes/klass/img/facebooklogo.png"/>
            <meta property="og:title" content="Facebook Open Graph META Tags"/>
            <meta property="og:url" content="https://davidwalsh.name/facebook-meta-tags"/>
            <meta property="og:site_name" content="David Walsh Blog"/>
            
          </MetaTags>
          <div class="content"> Some Content </div>
        </div>
      )
  }
}

export default MyOgComponent;