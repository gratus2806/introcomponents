import React from 'react';

import './style.css';
import YouTube from 'react-youtube';
import Carousel from 'react-bootstrap/Carousel';

class Image_galary extends React.Component{
  render(){
      return(
        <div>
        <div className='container-fluid'>
             {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<image Circular galary>>>>>>>>>>>>>>>>>>>>>></image> */}
             <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-circle">
                        <ul className="ul_imageStyle-circle-empty">
                            <li className="column-circle-image ">
                            <img className="upload_image_style_circle" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                              <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                            </li>
                            <li className="column-circle-image">
                              <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
              <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-circle">
                        <ul className="ul_imageStyle-circle">
                            <li className="column-circle-image">
                                <a href="/doodles">
                                    <img className="image-circle-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                </a>
                            </li>
                            <li className="column-circle-image">
                                <a href="/character">
                                    <img className="image-circle-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<image Soft corner>>>>>>>>>>>>>>>>>>></> */}

            <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-softCorner">
                        <ul className="ul_imageStyle-softCorner-empty">
                            <li className="column-softCorner-image ">
                            <img className="upload_image_style_softCorner" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                              <img className="image-softCorner-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                            </li>
                            <li className="column-softCorner-image">
                              <img className="image-softCorner-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
              <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-softCorner">
                        <ul className="ul_imageStyle-softCorner">
                            <li className="column-softCorner-image">
                                <a href="/doodles">
                                    <img className="image-softCorner-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                </a>
                            </li>
                            <li className="column-softCorner-image">
                                <a href="/character">
                                    <img className="image-softCorner-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<sharp edges image gal>>>>>>>>>>>>>>>>>>> */}

            <div className="row">
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-sharpEdge">
                        <ul className="ul_imageStyle-sharpEdge-empty">
                            <li className="column-sharpEdge-image ">
                            <img className="upload_image_style_sharpEdge" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                              <img className="image-sharpEdge-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                            </li>
                            <li className="column-sharpEdge-image">
                              <img className="image-sharpEdge-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
              <div className="row row_style" >
                <div className="col-lg-12 col-xs-12 col-sm-12 " >
                    <div className="row imageRow-sharpEdge">
                        <ul className="ul_imageStyle-sharpEdge">
                            <li className="column-sharpEdge-image">
                                <a href="/doodles">
                                    <img className="image-sharpEdge-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                </a>
                            </li>
                            <li className="column-sharpEdge-image">
                                <a href="/character">
                                    <img className="image-sharpEdge-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
              {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<one below other image>>>>>>>>>>>>>>>>>>>>>>></one> */}

              <div className="row row-after"> 
              {/* <div className="column-image-oneBelow-other-style">
                <ul className="image-oneBelow-other-ul-style">
                  <li>
                    <div className="image-oneBelow-other"  style={{width:"80%",marginLeft:"2px"}} >
                    <a href="/doodles">
                      <i className="image-oneBelow-other-button fa fa-play fa-2x "></i>
                    </a>
                    </div>
                  </li>
                  <li>
                    <div className="image-oneBelow-other"  style={{width:"80%",marginLeft:"2px"}} >
                    </div>
                  </li>
                  
                </ul>
              </div> */}
            </div>
            <div className="row row-after"> 
              <div className="column-image-oneBelow-other-style">
                <ul className="image-oneBelow-other-ul-style">
                  <li>
                    <img className="image-oneBelow-other-style" src="https://i.imgur.com/ZerwVp3.jpg" style={{width:"80%",marginLeft:"2px"}} />
                  </li>
                  <li>
                    <img className="image-oneBelow-other-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" style={{width:"80%",marginLeft:"2px"}} />
                  </li>
                </ul>
              </div>
            </div>

        </div>
    </div>
      )
  }
}

export default Image_galary;