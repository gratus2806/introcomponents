import React from 'react';

import './style.css';
import YouTube from 'react-youtube';


class Video_modal extends React.Component{
    constructor(props){
        super(props)
        this.state={
        
        }
        this.myRefs = React.createRef();
    }
    // openModal = () => {
    //     const node = this.myRefs.current;
    //     console.log("hiiii",node)
    //     videourl = node.getAttribute('data-src')
        


    // };
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

    render(){
        
    
  
    return(
        <div class="container">
            <h1>Play YouTube or Vimeo Videos in Bootstrap 4 Modal</h1>

            {/* <!-- Button trigger modal --> */}
            <div className='row'>
                <div className='video-softCorner-rectangle' >
                {/* <button type="button" class="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal">
                     Play Video 1 - autoplayss
                </button> */}
                <a type="button" class="video-btn" data-toggle="modal" data-src="https://www.youtube.com/embed/Jfrjeg26Cwk" data-target="#myModal">
                <i  className=" fa fa-play fa-2x " style={{color:"white",position:"absolute",left: "31%",top: "45%",zIndex:"999"}}></i>
                <img className="video-softCorner-rectangle-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                </a>
                </div>
            </div>
            
            {/* <!-- Modal --> */}
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-body">

                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
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

export default Video_modal;