import React from 'react';
import './style.css';

class Vcard extends React.Component{
    constructor(props){
        super(props)
        this.state={}
         
    }
    
    render(){
        let imageSrc_EmptyUser="https://www.library.caltech.edu/sites/default/files/styles/headshot/public/default_images/user.png?itok=1HlTtL2d";
        let imageSrc_SetUser="https://cdn.pixabay.com/photo/2018/08/03/04/36/love-3581038_960_720.jpg";
        
        return(
            <div style={{display:" flex", alignItems: "center",textAlign:"center" ,justifyContent: "center", alignConten:"center",  minHeight: `${window.innerHeight}px`}}>
                <div className="container" >
                    <div className="card card-style">
                        <div className="card-body">
                            <img class="rounded-circle mx-auto d-block user-image"  src={imageSrc_SetUser}  alt="..."/>
                            <h2 className="user-name ">Gratus Dbritto</h2>
                            <button className="btn btn-blue-color social-button-fill-style " ><i className="fa fa-address-book icon-position  " style={{fontSize:"1.2em"}}></i> Download vCard</button>
                            <button className="btn btn-white-color social-button-unfill-style " ><i className="fa fa-globe  icon-position" style={{fontSize:"1.2em"}}></i> Karanaswnani.com</button>

                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Vcard;