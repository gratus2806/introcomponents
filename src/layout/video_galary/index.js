import React from 'react';

import './style.css';
import YouTube from 'react-youtube';
import Carousel from 'react-bootstrap/Carousel';

class Image_galary extends React.Component{
  render(){
      return(
        <div>
            <div className='container-fluid'>
                 {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<video Circular galary>>>>>>>>>>>>>>>>>>>>>></video> */}
                 <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-circle">
                            <ul className="ul_videoStyle-circle-empty">
                                <li className="column-circle-video ">
                                <img className="upload_video_style_circle" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                                  <img className="video-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column-circle-video">
                                  <img className="video-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-circle">
                            <ul className="ul_videoStyle-circle">
                                <li className="column-circle-video">
                                    <a href="/doodles">
                                        <img className="video-circle-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column-circle-video">
                                    <a href="/character">
                                        <img className="video-circle-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<video Soft corner>>>>>>>>>>>>>>>>>>></> */}

                <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-softCorner">
                            <ul className="ul_videoStyle-softCorner-empty">
                                <li className="column-softCorner-video ">
                                <img className="upload_video_style_softCorner" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                                  <img className="video-softCorner-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column-softCorner-video">
                                  <img className="video-softCorner-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-softCorner">
                            <ul className="ul_videoStyle-softCorner">
                                <li className="column-softCorner-video">
                                    <a href="/doodles">
                                        <img className="video-softCorner-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column-softCorner-video">
                                    <a href="/character">
                                        <img className="video-softCorner-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<sharp edges video gal>>>>>>>>>>>>>>>>>>> */}

                <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-sharpEdge">
                            <ul className="ul_videoStyle-sharpEdge-empty">
                                <li className="column-sharpEdge-video ">
                                <img className="upload_video_style_sharpEdge" src="https://png.pngtree.com/svg/20170823/upload_video_162306.png" alt="Smiley face" />
                                  <img className="video-sharpEdge-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column-sharpEdge-video">
                                  <img className="video-sharpEdge-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row row_style" >
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row videoRow-sharpEdge">
                            <ul className="ul_videoStyle-sharpEdge">
                                <li className="column-sharpEdge-video">
                                    <a href="/doodles">
                                        <img className="video-sharpEdge-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column-sharpEdge-video">
                                    <a href="/character">
                                        <img className="video-sharpEdge-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<one below other video>>>>>>>>>>>>>>>>>>>>>>></one> */}

                  <div className="row row-after"> 
                  {/* <div className="column-video-oneBelow-other-style">
                    <ul className="video-oneBelow-other-ul-style">
                      <li>
                        <div className="video-oneBelow-other"  style={{width:"80%",marginLeft:"2px"}} >
                        <a href="/doodles">
                          <i className="video-oneBelow-other-button fa fa-play fa-2x "></i>
                        </a>
                        </div>
                      </li>
                      <li>
                        <div className="video-oneBelow-other"  style={{width:"80%",marginLeft:"2px"}} >
                        </div>
                      </li>
                      
                    </ul>
                  </div> */}
                </div>
                <div className="row row-after"> 
                  <div className="column-video-oneBelow-other-style">
                    <ul className="video-oneBelow-other-ul-style">
                      <li>
                        <img className="video-oneBelow-other-style" src="https://i.imgur.com/ZerwVp3.jpg" style={{width:"80%",marginLeft:"2px"}} />
                      </li>
                      <li>
                        <img className="video-oneBelow-other-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" style={{width:"80%",marginLeft:"2px"}} />
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