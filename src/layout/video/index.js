import React from 'react';

import './style.css';
import YouTube from 'react-youtube';


class Video extends React.Component{
  constructor(props){
    super(props)
      this.state={
      isOpen: "none",
    }
    if(window.outerWidth>=1200){
      console.log('in 1200 ',window.outerWidth)
      this.state={
        isOpen: "none",
        videowidth:window.innerWidth,
        videoHeight:window.innerHeight,
      }
    }
    if(window.outerWidth<=768){
      console.log('in 768 ',window.outerWidth)
      this.state={
        isOpen: "none",
        videowidth:window.innerWidth,
        videoHeight:"200",
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
    
    let video_visiblity=this.state.isOpen
    let coverDiv=this.state.coverDiv
    let videowidth=this.state.videowidth;
    let videoHeight=this.state.videoHeight;
    
    if(videowidth>=1200){
     var width ="1300";
    }
    if(videowidth<=768){
      width = this.state.videowidth;
    }
    const opts = {
      height: videoHeight,
      width: width,
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    }
    
      return(
          <div >
               <div className='container-fluid ' >
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<videos>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                 */}
                  <div className='row'>
                      <div className='video-circle' >
                        <i className="video-circle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row ' style={{position:"relative"}}>
                    <div className='video-circle' style={{position:"relative",display:coverDiv}} >
                      <a className=" video-btn" onClick={this.put_bg_color} data-toggle="modal" data-src="https://player.vimeo.com/video/58385453?badge=0" data-target="#myModal" >
                      <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                      <img className="video-circle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </a>
                    </div>
                  </div>
                  {/* <div className='row'>
                      <div className='video-circle' style={{border:"none",boxShadow:"none"}}>
                        <img type="button" className="video-circle-style video-btn"  data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal"  src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                     
                      </div>
                  </div> */}
                  {/* <<<<<<<<modal>>>>>>> */}
                  <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" id="popup-overlay" role="document">
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


                  <div className='row'>
                      <div className='video-softCorner-rectangle' >
                      <i className="video-softCorner-rectangle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row ' style={{position:"relative"}}>
                    <div className='video-softCorner-rectangle' style={{position:"relative",display:coverDiv}} >
                      <a className=" video-btn"  data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal" >
                      <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                      <img className="video-softCorner-rectangle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </a>
                    </div>
                  </div>
                  {/* <div className='row'>
                      <div className='video-softCorner-rectangle' style={{border:"none",boxShadow:"none"}}>
                        <img className="video-softCorner-rectangle-style video-btn" type="button"   data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div> */}

                  {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<completed video use this for video>>>>>>>>>>>>>>>>>>>>>></> */}
                  <div className='row'>
                      <div className='video-sharpEdges-rectangle' style={{width:videowidth}} >
                      <i className="video-sharpEdges-rectangle-button fa fa-play fa-2x "></i>
                      </div>
                  </div>
                  <div className='row ' style={{position:"relative"}}>
                    <div className='video-sharpEdges-rectangle' style={{position:"relative",display:coverDiv,width:videowidth}} >
                      <a className=" video-btn"  data-toggle="modal" data-src="https://www.youtube.com/embed/lTxn2BuqyzU" data-target="#myModal" >
                      <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "45%",zIndex:"999"}}></i>
                      <img className="video-sharpEdges-rectangle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </a>
                    </div>
                  </div>
                  



                  <div className="row">
                    <div className="card-video" style={{position:"relative"}}>
                      <a className=" video-btn"  data-toggle="modal" data-src="https://www.youtube.com/embed/lTxn2BuqyzU" data-target="#myModal" >
                        <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "45%",top: "33%",zIndex:"999"}}></i>
                        <img className="video-card-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg' style={{width:"100%"}}/>
                        <h4 style={{padding: "2%"}}><b>John Doe</b></h4>
                      </a>
                    </div>
                  </div>

            </div>
          </div>
      )
  }
}

export default Video;