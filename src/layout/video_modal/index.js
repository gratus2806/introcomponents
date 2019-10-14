import React from 'react';

import './style.css';
import YouTube from 'react-youtube';


class Video_modal extends React.Component{
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

    render(){
      let visiblity = this.state.visiblity;  
    
  
    return(
        <div className="layout">
            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="image-grid-circle">
                            <img className="upload_video_style_circle" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-circle">
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="image-grid-circle">
                            <img className="image-grid-circle-style" src="https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003" ></img>
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-circle">
                            <img className="image-grid-circle-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    
                    <li>
                        <div className="image-grid-softCorner">
                        <img className="upload_video_style_softCorner" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-softCorner">
                            {/* <img className="image-grid-softCorner-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img> */}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <ul style={{listStyleType:"none"}}>
                    
                    <li>
                        <div className="image-grid-softCorner">
                            <img className="image-grid-softCorner-style" src="https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003" ></img>
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-softCorner">
                            <img className="image-grid-softCorner-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="image-grid-sharpCorner">
                        <img className="upload_video_style_sharpCorner" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-sharpCorner">
                            {/* //<img className="image-grid-sharpCorner-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img> */}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <ul style={{listStyleType:"none"}}>
                    <li>
                        <div className="image-grid-sharpCorner">
                            <img className="image-grid-sharpCorner-style" src="https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003" ></img>
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-sharpCorner">
                            <img className="image-grid-sharpCorner-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img>
                        </div>
                    </li>
                </ul>
            </div>


            <div className="row" style={{display:visiblity}}>
                <ul style={{listStyleType:"none" }}>
                    <li>
                        <div className="image-grid-one-below-other">
                        <img className="upload_video_style_one-below-other" src="https://dezov.s3.amazonaws.com/media/upload-icon-png427-4f1f-8b21-dedb5c507065.png" alt="Smiley face" />
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-one-below-other">
                            {/* //<img className="image-grid-one-below-other-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img> */}
                        </div>
                    </li>
                </ul>
            </div>
            <div className="row">
                <ul style={{listStyleType:"none" ,padding:"0p"}}>
                    <li>
                        <div className="image-grid-one-below-other">
                            <img className="image-grid-one-below-other-style" src="https://res.cloudinary.com/fleetnation-static/image/asset/s--MifwX3dl--/f_auto/header-2018-2560w-c2f0f28235c4f87790c9d5181036c003" ></img>
                        </div>
                    </li>
                    <li>
                        <div className="image-grid-one-below-other">
                            <img className="image-grid-one-below-other-style" src="https://img.freepik.com/free-photo/image-human-brain_99433-298.jpg?size=626&ext=jpg" ></img>
                        </div>
                    </li>
                </ul>
            </div>

            
            
        </div>
     
     )
 }
}

export default Video_modal;