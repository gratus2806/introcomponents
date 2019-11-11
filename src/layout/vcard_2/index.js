import React from 'react';
import './style.css';

class Vcard_2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            visibility: "hidden"
        }
        
        
        setTimeout(() => {
            this.setState({ visibility: "visible",transition:"3s" });
            }, 500);
        console.log("2",this.state.visibility)
    }
       
    
    
        
      
    
    render(){
         let time_delay = this.state.visibility;
         console.log("3",time_delay)
         let transition_delay=this.state.transition
        let imageSrc_EmptyUser="https://www.library.caltech.edu/sites/default/files/styles/headshot/public/default_images/user.png?itok=1HlTtL2d";
        let imageSrc_SetUser="https://cdn.pixabay.com/photo/2018/08/03/04/36/love-3581038_960_720.jpg";
        
        return(
            <div style={{display:" flex", alignItems: "center",textAlign:"center" ,justifyContent: "center", alignConten:"center",  minHeight: `${window.innerHeight}px`}}>
                <div className="container" >
                    <div className=" slide-top card card-style"  >
                        <div className="card-body">
                            <img class=" rounded-circle mx-auto d-block user-image"  src={imageSrc_SetUser}  alt="..."/>
                            <h2 className=" user-name time_delay" style={{visibility:time_delay,transition:transition_delay,transitiontimingFunction: "ease-in",transitiontimingFunction: "cubic-bezier(0.42, 0, 1, 1)"}}>Gratus Dbritto</h2>
                            <button className="  btn btn-blue-color social-button-fill-style time_delay" style={{visibility:time_delay,transition:transition_delay,transitiontimingFunction: "ease-in",transitiontimingFunction: "cubic-bezier(0.42, 0, 1, 1)"}}><i className="fa fa-address-book icon-position  " style={{fontSize:"1.2em"}}></i> Download vCard</button>
                            <button className="  btn btn-white-color social-button-unfill-style time_delay" style={{visibility:time_delay,transition:transition_delay,margin: "0 auto",transitiontimingFunction: "ease-in",transitiontimingFunction: "cubic-bezier(0.42, 0, 1, 1)"}}><i className="fa fa-globe  icon-position" style={{fontSize:"1.2em"}}></i> Karanaswnani.com</button>

                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Vcard_2;