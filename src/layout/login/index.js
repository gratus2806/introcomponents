import React from 'react';
import './style.css';

class Login extends React.Component{
    constructor(props){
        super(props)
          this.state={}
         
    }
    modal_visiblity_close=()=>{
        this.setState({isOpen: "none"});
    }
    modal_visiblity_open=()=>{
        this.setState({isOpen: "none"});
    }
    componentDidMount() {
        window.$(document).ready(function() {
            var $videoSrc;  
            window.$('.modal-btn').click(function() {
               
            });
            window.$('#myModal').on('hide.bs.modal', function (e) {
            }) 
        });
            
      }
    render(){
        let row_visiblity=this.state.isOpen
        
        return(
            <div className="container ">
                <div className="row" >
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto col-position" >
                        <div className="card card-signin my-5" style={{display:row_visiblity}}>
                            <div className="cross-button">
                                <a onClick={this.modal_visiblity_close}>
                                    <span className="cross-button-style"  aria-hidden="true">&times;</span>
                                </a>
                            </div>
                       
                            <div className="card-body">
                                <h4 className="text-center card-title ">Login To Engage</h4>
                                <h5 className="text-center  sub-header-style">You will automatically be logged out when you close this site.</h5>
                                <div className="row">
                                {/* <button className="btn btn-google social-button-style "><i className="fa fa-google mr-2"></i> Sign in with Google</button> */}
                                <button className="btn btn-facebook social-button-style modal-btn" onClick={this.modal_visiblity_close} data-toggle="modal"  data-target="#myModal"><i className="fa fa-facebook-f mr-2"></i>  Facebook</button>
                                <button className="btn btn-linkedin social-button-style modal-btn" onClick={this.modal_visiblity_close} data-toggle="modal"  data-target="#myModal"><i className="fa fa-linkedin mr-2"></i>  LinkedIN</button>
                                <button className="btn btn-twitter social-button-style modal-btn" onClick={this.modal_visiblity_close} data-toggle="modal"  data-target="#myModal"><i className="fa fa-twitter mr-2"></i>  Twitter</button>
                                </div>
                                <h5 className="text-center  footer-style">By continuing you accept the <a href="/good">Terms of Use</a> and <a href="/good">Privacy Policy.</a></h5>
                                
                                {/* <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
                                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button> */}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-width" role="document">
                        <div className="modal-content modal-position" >

                            <div className="modal-body">

                            <button type="button"  className="close" data-dismiss="modal" onClick={this.modal_visiblity_open} aria-label="Close">
                            <span  aria-hidden="true">&times;</span>
                            </button>
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="embed-responsive embed-responsive-16by9">
                            <h4 className="text-center card-title ">Login To Engage</h4>
                            <h5 className="text-center  sub-header-style">You will automatically be logged out when you close this site.</h5>
                            <br/>
                            <div className="loader"></div>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Login;