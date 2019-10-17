import React from 'react';

import './style.css';
import YouTube from 'react-youtube';
import Carousel from 'react-bootstrap/Carousel';

class Video_galary extends React.Component{
  constructor(props){
    super(props)
      this.state={}
      if(window.outerWidth>=1200){
        this.state={
            visiblity:"none"
        }
      } else{
        this.state={
            visiblity:"block"
        } 
      }

}
componentDidMount() {
    window.$(document).ready(function() {
        var $videoSrc;  
        window.$('.video-btn').click(function() {
            $videoSrc = window.$(this).data( "src" );
        });
        console.log($videoSrc);
        // when the modal is opened autoplay it  
        window.$('#myModal').on('shown.bs.modal', function (e) {
        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        window.$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
        })
        // stop playing the youtube video when I close the modal
        window.$('#myModal').on('hide.bs.modal', function (e) {
            // a poor man's stop video
            window.$("#video").attr('src',$videoSrc); 
        }) 
        // document ready  
        });
        
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
  let visiblity = this.state.visiblity; 
  let coverDiv=this.state.coverDiv
      return(
        <div className="layout">

            {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<circle>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="video-grid-circle">
                            <img className="upload_video_style_circle" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="video-grid-circle">
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12  col-style" >
                    <ul style={{listStyleType:"none"}}>
                        <li>
                            <div className='video-grid-circle' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://www.youtube.com/embed/9Yam5B_iasY" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-circle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='video-grid-circle' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-circle-style" src='https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<softCorner>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    
                    <li>
                        <div className="video-grid-softCorner">
                        <img className="upload_video_style_softCorner" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="video-grid-softCorner">
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12 col-style" >
                    <ul style={{listStyleType:"none"}}>
                        
                        <li>
                            <div className='video-grid-softCorner' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-softCorner-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='video-grid-softCorner' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-softCorner-style" src='https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<sharpCorner>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="video-grid-sharpCorner">
                        <img className="upload_video_style_sharpCorner" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="video-grid-sharpCorner">
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
            <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12 col-style" >
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className='video-grid-sharpCorner' style={{position:"relative",display:coverDiv}} >
                            <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                                <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                <img className="video-grid-sharpCorner-style" src='https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003'/>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div className='video-grid-sharpCorner' style={{position:"relative",display:coverDiv}} >
                            <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                                <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                <img className="video-grid-sharpCorner-style" src='https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg'/>
                            </a>
                        </div>
                        
                    </li>
                </ul>
            </div>
            </div>

{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<one-below-other>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}

            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none",paddingLeft: "28px" }}>
                    <li>
                        <div className="video-grid-one-below-other">
                        <img className="upload_video_style_one-below-other" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="video-grid-one-below-other">
                        </div>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="col-lg-8 col-xs-12 col-sm-12 col-md-12 col-style" >
                    <ul className="ul-video-grid-one-below-other-style" style={{listStyleType:"none" }}>
                        <li>
                            <div className='video-grid-one-below-other' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-one-below-other-style" src='https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg'/>
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className='video-grid-one-below-other' style={{position:"relative",display:coverDiv}} >
                                <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://www.youtube.com/embed/9Yam5B_iasY" data-target="#myModal" >
                                    <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                                    <img className="video-grid-one-below-other-style" src='https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003'/>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content modal-position" >

                            <div class="modal-body">

                            <button type="button"  class="close" data-dismiss="modal" aria-label="Close">
                            <span  aria-hidden="true">&times;</span>
                            </button>
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div class="embed-responsive embed-responsive-16by9">
                                <iframe class="embed-responsive-item" src="" id="video" allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
        </div>
      )
  }
}

export default Video_galary;