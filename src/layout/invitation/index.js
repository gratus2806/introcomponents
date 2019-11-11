import React from 'react';
import './style.css';

class Invitation extends React.Component{
    constructor(props){
        super(props)
        this.state={}
         
    }
    
    render(){
        let imageSrc="https://www.library.caltech.edu/sites/default/files/styles/headshot/public/default_images/user.png?itok=1HlTtL2d";
        return(
            <div style={{position:"relative"}}>
            {/* // <div style={{display:" flex", alignItems: "center",textAlign:"center" ,justifyContent: "center", alignConten:"center",  minHeight: `${window.innerHeight}px`}}> */}
                <div className="container"  >
                    
                    <h1 className="header-style">We are launching soon, Don't miss the bus</h1>
                    <h2 className="subHeader-style">Limited slots left for Early Access Program.</h2>
                    <div className="row">
                        <h3 className="time-public-row-style">
                            <a><span className="date-time-style">Oct 17</span></a>
                            <a><span className="post-category-style">Public post</span></a>
                            <a><i class="fa fa-upload upload-icon-style" aria-hidden="true"></i></a>
                            <a><i class="fa fa-heart-o heart-icon-style" aria-hidden="true"></i></a>
                        </h3>
                    </div>
                    <img src="https://cdn.substack.com/image/fetch/w_1100,c_limit,f_auto,q_auto:good/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F3be2c4ad-c988-40c2-989e-135981f5d212_1024x512.png" className="rounded image-style" alt="Cinque Terre" /> 
                    <h2 className="advertisement-text-style">Take part in our Early Access Program & Get Special Benefits</h2>
                    <div className="col-12" style={{textAlign:"center"}}> 
                        <button type="button" class="btn btn-primary button-shadow button-fill-sharp-style">Get Started Now</button>
                    </div>
                   <hr className="divider-line-style"></hr>
                   <div className="col-12" style={{margin:"2% 0 3% 0"}}>
                        <h3 className="access-benifit-list-header">Early Access Benefits</h3>
                        <ul >
                            <li className="li-access-benifit-style">
                                <span>Get $5 on Signing Up for Waitlist</span>
                            </li>
                            <li className="li-access-benifit-style">
                                <span>Refer more friends and earn upto $25 for every friend you refer</span>
                            </li>
                            <li className="li-access-benifit-style">
                                <span>Get 1 year complimentary access to “BitYOLO Gold”</span>
                            </li>
                            <li className="li-access-benifit-style">
                                <span>Exclusive Deals from your favourite online stores & Much More</span>
                            </li>

                            
                        </ul>
                   </div>
                   <hr className="divider-line-style"></hr>
                   <div className="col-12" style={{margin:"2% 0 3% 0"}}>
                        <h3 className="Goal-list-header">Our Goal is Simple: Giving Back To Users Everytime They Shop Online 🤗</h3>
                        <ul style={{paddingLeft: "0px",lineHeight: "5em"}}>
                            <li className="li-Goal-style">
                                <span>Making it Easy, Safe & Fun to Earn & Use Bitcoin</span>
                            </li>
                            <li className="li-Goal-style">
                                <span>Save The Launch Date: 7th November, 2019</span>
                            </li>
                            <li className="li-Goal-style">
                                <span>Made With ❤️ in Singapore</span>
                            </li>
                            <li className="li-Goal-style">
                                <span>Have a query? Send us an email at hello@bityolo.io</span>
                            </li>

                            
                        </ul>
                   </div>

                </div>
                <hr className="divider-line-style"></hr>
                <div className="container" >
                    <h3 className="top-post-header">
                        Top posts
                    </h3>
                    <a><p className="top-post-text-style">We are live on Product Hunt 🚀, Thank You</p></a>
                    <div className="row" style={{margin:"0 0 3% 0"}}>
                        <h3 className="time-public-row-style">
                            <a><span className="date-time-style">Oct 17</span></a>
                            <a><span className="post-category-style">Public post</span></a>
                            <a><i class="fa fa-upload upload-icon-style" aria-hidden="true"></i></a>
                            <a><i class="fa fa-heart-o heart-icon-style" aria-hidden="true"></i></a>
                        </h3>
                    </div>
                </div>
                <div className="row" style={{margin:"0 0 0 0" ,backgroundColor:"#ece9e9"}}>
                <div className="col-12" style={{textAlign:"center"}}> 
                    <button type="button" class="btn btn-primary button-shadow button-fill-sharp-style">Get Started Now</button>
                </div>
                    {/* <h3 style={{margin:"2% auto",color: "#bcbcbc"}}><a><i class="fa fa-share-alt-square"  aria-hidden="true"></i></a></h3> */}
                    <h3 style={{margin:"5% auto",color: "#bcbcbc"}}>© 2019 Shamik Sharma. See privacy and terms</h3>
                </div>
            </div> 
        )
    }
}

export default Invitation;