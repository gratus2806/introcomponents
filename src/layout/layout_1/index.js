import React from 'react';

import './style.css';
import YouTube from 'react-youtube';
import Carousel from 'react-bootstrap/Carousel';

class Layout_1 extends React.Component{
  constructor(props){
    super(props)
      this.state={
      isOpen: "none",
      width :window.outerWidth ,
      height :window.outerHeight
    }
    if(window.outerWidth>=1200){
      this.state={
        isOpen: "none",
        widthSquare :window.outerWidth ,
        heightSquare :window.outerWidth,
        videowidth:window.innerWidth,
        videoHeight:window.innerHeight,
        rectangleHeigt : '555px'
           
      }
    }
  }
  openModal = (event) => {
    this.setState({isOpen: "block" ,coverDiv:"none"});
    this._target.playVideoAt();
  };
   
  hideModal = (event) => {
    console.log("in hide")
    this.setState({isOpen: "none",coverDiv:"block"});
    this._target.pauseVideo();
  };
  
  videoOnReady(event) {
    this._target = event.target;
    
  }


  render(){
    
    let video_visiblity=this.state.isOpen
    // let videoDiv=this.state.videoDiv
    let coverDiv=this.state.coverDiv
    console.log("visiblity",this.state.isOpen)
    // this.showSlides();//
    let videowidth=this.state.videowidth;
    let videoHeight=this.state.videoHeight;
    let height=this.state.height;
    let width= this.state.width;
    let widthSquare =this.state.widthSquare;
    let heightSquare= this.state.heightSquare;
    let rectangleHeigt= this.state.rectangleHeigt;
    const opts = {
      height: videoHeight,
      width: "1300",
      
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
      return(
          <div>
               <div className='container-fluid'>
                  <div className='row'>
                    <div className='image-circle-small'>
                    <i className="image-circle-small-button fa fa-image fa-2x "></i>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-small' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>
                  

                  <div className='row'>
                      <div className='image-circle-medium'>
                      <i className="image-circle-medium-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-medium' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='image-circle-large'>
                    <i className="image-circle-large-button fa fa-image fa-2x "></i>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-large' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div className='row'>
                      <div className='image-circle-extraLarge' >
                      <i className="image-circle-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-circle-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-circle-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-small'>
                      <i className="image-square-small-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-small' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-medium'>
                      <i className="image-square-medium-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-medium' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-large'>
                      <i className="image-square-large-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-large' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-extraLarge'>
                      <i className="image-square-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-fullScreen'  style={{width:widthSquare,height:heightSquare}}  >
                      <i className="image-square-fullScreen-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-fullScreen' style={{border:"none",boxShadow:"none",width:widthSquare,height:heightSquare}}>
                        <img className="image-square-fullScreen-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-small'>
                      <i className="image-softCorner-small-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-small' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div> 


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-medium'>
                      <i className="image-softCorner-medium-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-medium' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-large'>
                      <i className="image-softCorner-large-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-large' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-extraLarge' >
                      <i className="image-softCorner-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                      <div className='image-verticle-fullScreen' style={{height:height,width:width}} >
                      <i className="image-verticle-fullScreen-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-verticle-fullScreen' style={{border:"none",boxShadow:"none",height:height,width:width}}>
                        <img className="image-verticle-fullScreen-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                    <div className='image-rectangle-large' style={{height:rectangleHeigt}}>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-rectangle-large' style={{border:"none",boxShadow:"none",height:rectangleHeigt}}>
                      <img className="image-rectangle-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div class='row'>
                      <div class='image-rectangle-small' >
                      </div>
                  </div>
                  <div class='row'>
                      <div class='image-rectangle-small' style={{border:"none",boxShadow:"none"}}>
                        <img class="image-rectangle-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle1">
                                <li className="column ">
                                <img className="upload_image_style" src="https://www.noissue.co/skin/frontend/noissue/default/images/upload-a-finished-design.png" alt="Smiley face" />
                                <img className="image-square-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column">
                                  
                                <img className="image-square-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle">
                                <li className="column">
                                    <a href="/doodles">
                                        <img className="image-square-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column">
                                    <a href="/character">
                                        <img className="image-square-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>



                <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle1">
                                <li className="column ">
                                <img className="upload_image_style_circle" src="https://www.noissue.co/skin/frontend/noissue/default/images/upload-a-finished-design.png" alt="Smiley face" />
                                  <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column">
                                  <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle">
                                <li className="column">
                                    <a href="/doodles">
                                        <img className="image-circle-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column">
                                    <a href="/character">
                                        <img className="image-circle-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle1">
                                <li className="column ">
                                <img className="upload_image_style_squareSharp" src="https://www.noissue.co/skin/frontend/noissue/default/images/upload-a-finished-design.png" alt="Smiley face" />
                                  <img className="image-squareSharp-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column">
                                  <img className="image-squareSharp-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle">
                                <li className="column">
                                    <a href="/doodles">
                                        <img className="image-squareSharp-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column">
                                    <a href="/character">
                                        <img className="image-squareSharp-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  
                {/* <<<<<<<<<<<<<<<<<<<<Image Galrey One Below Other>>>>>>>>>>>>> */}
                <div className="row row-after"> 
                  <div className="column-image-oneBelow-other-style">
                    <ul className="image-oneBelow-other-ul-style">
                      <li>
                        <div className="image-oneBelow-other"  style={{width:"50%",marginLeft:"2px"}} >
                        <a href="/doodles">
                          <i className="image-oneBelow-other-button fa fa-image fa-2x "></i>
                        </a>
                        </div>
                      </li>
                      <li>
                        <div className="image-oneBelow-other"  style={{width:"50%",marginLeft:"2px"}} >
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="row row-after"> 
                  <div className="column-image-oneBelow-other-style">
                    <ul className="image-oneBelow-other-ul-style">
                      <li>
                        <img className="image-oneBelow-other-style" src="https://i.imgur.com/ZerwVp3.jpg" style={{width:"50%",marginLeft:"2px"}} />
                      </li>
                      <li>
                        <img className="image-oneBelow-other-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" style={{width:"50%",marginLeft:"2px"}} />
                      </li>
                    </ul>
                  </div>
                </div>

   

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
                  <div className="row">
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
                  <div className="column-video-oneBelow-other-style">
                    <ul className="video-oneBelow-other-ul-style">
                      <li>
                        <div className="video-oneBelow-other"  style={{width:"50%",marginLeft:"2px"}} >
                        <a href="/doodles">
                          <i className="video-oneBelow-other-button fa fa-play fa-2x "></i>
                        </a>
                        </div>
                      </li>
                      <li>
                        <div className="video-oneBelow-other"  style={{width:"50%",marginLeft:"2px"}} >
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
                <div className="row row-after"> 
                  <div className="column-video-oneBelow-other-style">
                    <ul className="video-oneBelow-other-ul-style">
                      <li>
                        <img className="video-oneBelow-other-style" src="https://i.imgur.com/ZerwVp3.jpg" style={{width:"50%",marginLeft:"2px"}} />
                      </li>
                      <li>
                        <img className="video-oneBelow-other-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" style={{width:"50%",marginLeft:"2px"}} />
                      </li>
                    </ul>
                  </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<buttons>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp Buttons</h2>
                    <button type="button" class="btn btn-primary button-fill-sharp-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>circle Buttons</h2>
                    <button type="button" class="btn btn-primary button-fill-circle-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>soft edge Buttons</h2>
                    <button type="button" class="btn btn-primary button-fill-softEdge-style">Primary</button>
                  </div>
                </div>


                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp edge Buttons</h2>
                    <button type="button" class="btn btn-outline-primary waves-effect button-outlined-sharpEdge-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>circle outlined Buttons</h2>
                    <button type="button" class="btn btn-outline-primary waves-effect button-outlined-circle-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>soft edge Buttons</h2>
                    <button type="button" class="btn btn-primary button-outlined-softEdge-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp edge Buttons</h2>
                    <button class="btn button-gradient-sharpEdge-style">Primary</button>
                  </div>
                </div>

                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<videos>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                 */}
                  <div className='row'>
                      <div className='video-circle' >
                        <i className="video-circle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='video-circle' style={{border:"none",boxShadow:"none"}}>
                        <img className="video-circle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='video-softCorner-rectangle' >
                      <i className="video-softCorner-rectangle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='video-softCorner-rectangle' style={{border:"none",boxShadow:"none"}}>
                        <img className="video-softCorner-rectangle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>

                  {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<completed video use this for video>>>>>>>>>>>>>>>>>>>>>></> */}
                  <div className='row'>
                      <div className='video-sharpEdges-rectangle' >
                      <i className="video-sharpEdges-rectangle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row ' style={{position:"relative"}}>
                    <div style={{position:"absolute",display:video_visiblity,right: "23px",top: "18px",zIndex:"99999"}}>
                      <a style={{color:"white",fontWeight:"900",fontSize:"2em"}} onClick={this.hideModal.bind(this)}>X</a>
                    </div>
                    <div style={{display:video_visiblity,zIndex:"9999",width:videowidth,height:videoHeight,backgroundColor:"#000"}}>
                      <YouTube
                        videoId="JIOHSw0NIVI"
                        opts={opts}
                        onReady={this.videoOnReady.bind(this)}
                      />
                    </div>
                    <div className='video-sharpEdges-rectangle' style={{position:"relative",display:coverDiv}} >
                      <a onClick={this.openModal.bind(this)}>
                      <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                      <img className="video-sharpEdges-rectangle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </a>
                    </div>
                  </div>
                  



                  <div className="row">
                    <div className="card-video">
                      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" alt="Avatar" style={{width:"100%"}}/>
                      <div className="container">
                        <h4><b>John Doe</b></h4> 
                        <p>Architect & Engineer</p> 
                      </div>
                    </div>
                  </div>

            </div>
          </div>
      )
  }
}

export default Layout_1;