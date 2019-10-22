import React from 'react';
import './style.css';

class Comment_page extends React.Component{
    constructor(props){
        super(props)
          this.state={}
         
    }
    
    render(){
        
        
        return(
            <div style={{
                // backgroundColor:"#F6F5FD", /*behances*/
                backgroundColor:"#F5FDF6", /*success*/
                // backgroundColor:"#FFF8F8", /*error*/
                minHeight: `${window.innerHeight}px`,
            }}>
                <div style={{display:" flex", alignItems: "center", justifyContent: "center", alignConten:"center",  minHeight: `${window.innerHeight-140}px`}}>
                    <div class="container" >

                        {/* <<<<<<<<<<<<<<<<,,,,behance login<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                        <div className="row">
                            <img className="logo-image" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/behance_logo-01.png'/>
                        </div>
                        <div className="row ">
                            <h3 className="header-text">Connect your behance to your Intro</h3>
                        </div>
                                
                        <div class="input-group input-group-style" >
                            <div class="input-group-prepend">
                                <span class="input-group-text">@</span>
                            </div>
                            <input type="text" class="form-control  input-box-style" placeholder="Username" id="usr" name="username"></input>
                        </div>

                        <div className="row">
                            <button className="btn btn-facebook social-button-style modal-btn" data-toggle="modal"  data-target="#myModal">Sync my Behance Profile</button>
                        </div>
                        <div className="row footer-row"  >
                            <div className="col-12 text-align"  >
                                <img className="logo-footer-image-style" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/intro_logo.png'/>
                                <br/>
                                <h3 className="header-footer-text">Your .com in your hands</h3>
                            </div>
                        </div>
                    

                        {/* <<<<<<<<<<<<<<<<<<<<<<<success>>>>>>>>>>>>>>>>>>>>>>>>> */}

                        {/* <div className="row">
                            <div class="swal2-icon swal2-success swal2-animate-success-icon" style={{display: "flex"}}>
                                <div class="swal2-success-circular-line-left" style={{backgroundColor: "#F5FDF6"}}></div>
                                <span class="swal2-success-line-tip"></span>
                                <span class="swal2-success-line-long"></span>
                                <div class="swal2-success-ring"></div> 
                                <div class="swal2-success-fix" style={{backgroundColor: "#F5FDF6"}}></div>
                                <div class="swal2-success-circular-line-right" style={{backgroundColor:" #F5FDF6"}}></div>
                            </div>
                            
                            <h3 className="header-success-text">Success Message</h3>
                        
                        </div> 
                        <div className="row footer-row"  >
                            <div className="col-12 text-align"  >
                                <img className="logo-footer-image-style" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/intro_logo.png'/>
                                <br/>
                                <h3 className="header-footer-text">Your .com in your hands</h3>
                            </div>
                        </div> */}


                        {/* <<<<<<<<<<<<<<<<<<<<<<failuar>>>>>>>>>>>>>>>></failuar> */}
                        {/* <div className="row">
                            <div class="swal2-icon swal2-error swal2-animate-error-icon" style={{display: "flex"}}>
                                <span class="swal2-x-mark">
                                    <span class="swal2-x-mark-line-left"></span>
                                    <span class="swal2-x-mark-line-right"></span>
                                </span>
                            </div>
                            <h3 className="header-error-text">Failure Message</h3>
                        </div> 
                        <div className="row footer-row"  >
                            <div className="col-12 text-align"  >
                                <img className="logo-footer-image-style" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/intro_logo.png'/>
                                <br/>
                                <h3 className="header-footer-text">Your .com in your hands</h3>
                            </div>
                        </div> */}

                    </div>
                </div> 
            </div>
            
        )
    }
}

export default Comment_page;