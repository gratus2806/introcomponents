import React from 'react';
import './style.css';

class Comment_page extends React.Component{
    constructor(props){
        super(props)
          this.state={}
         
    }
    
    render(){
        
        
        return(
            <div style={{ display:" flex", alignItems: "center", justifyContent: "center", alignConten:"center",  minHeight: "100vh"}}>
                <div class="container">
                    <div class="card card-style">
                        <div class="card-body">
                            <div className="row">
                                <img className="logo-image" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/behance_logo-01.png'/>
                            </div>
                            <div className="row ">
                                <h3 className="header-text">Connect your behance to your Intro</h3>
                            </div>
                            
                            <div class="input-group ">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">@</span>
                                </div>
                                <input type="text" class="form-control  input-box-style" placeholder="Username" id="usr" name="username"></input>
                            </div>

                            <div className="row">
                                <button className="btn btn-facebook social-button-style modal-btn" data-toggle="modal"  data-target="#myModal">Sync my Behance Profile</button>
                            </div>
                            <div className="row" style={{position:"absolute",bottom:"0px",width: "100%"}} >
                                <div className="col-12"  >
                                    <img className="logo-footer-image" src='https://intro-assets.s3-us-west-2.amazonaws.com/images/template_images/intro_logo.png'/>
                                    <br/>
                                    <h3 className="header-text">Your .com in your hands</h3>
                                </div>
                                
                            </div>

                        </div>
                    </div>

                    <br/>
                    <br/>



                    <div class="card card-success-style">
                        <div class="card-body" style={{ display:" flex", alignItems: "center", justifyContent: "center", alignConten:"center"}}>
                            
                        <div className="row">
                           

                            <div class="swal2-icon swal2-success swal2-animate-success-icon" style={{display: "flex"}}>
                                <div class="swal2-success-circular-line-left" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                <span class="swal2-success-line-tip"></span>
                                <span class="swal2-success-line-long"></span>
                                <div class="swal2-success-ring"></div> 
                                <div class="swal2-success-fix" style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                <div class="swal2-success-circular-line-right" style={{backgroundColor:" rgb(255, 255, 255)"}}></div>
                            </div>
                           
                            <h3 className="header-success-text">Success Message</h3>
                        </div> 
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div class="card card-error-style">
                        <div class="card-body" style={{ display:" flex", alignItems: "center", justifyContent: "center", alignConten:"center"}}>
                            
                        <div className="row">
                           

                            <div class="swal2-icon swal2-error swal2-animate-error-icon" style={{display: "flex"}}>
                                <span class="swal2-x-mark">
                                    <span class="swal2-x-mark-line-left"></span>
                                    <span class="swal2-x-mark-line-right"></span>
                                </span>
                            </div>
                           
                            <h3 className="header-error-text">Failure Message</h3>
                        </div> 
                        </div>
                    </div>
                    <br/>
                    <br/>

                </div>
            </div>
        )
    }
}

export default Comment_page;