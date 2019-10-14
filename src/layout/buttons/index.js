import React from 'react';

import './style.css';


class Buttons extends React.Component{
  render(){
      return(
          <div>
               <div className='container-fluid'>
                {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<buttons>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */}
                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp Buttons Filled</h2>
                    <button type="button" class="btn btn-primary button-fill-sharp-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>circle Buttons</h2>
                    <button type="button" class="btn btn-primary button-fill-circle-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>soft edge Buttons</h2>
                    <button type="button" class="btn btn-primary button-fill-softEdge-style">Primary</button>
                  </div>
                </div>


                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp edge Buttons</h2>
                    <button type="button" class="btn btn-outline-primary waves-effect button-outlined-sharpEdge-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>circle outlined Buttons</h2>
                    <button type="button" class="btn btn-outline-primary waves-effect button-outlined-circle-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>soft edge Buttons</h2>
                    <button type="button" class="btn btn-outline-primary waves-effect button-outlined-softEdge-style">Primary</button>
                  </div>
                </div>


                <div className="row">
                  <div className ="align-button " >
                    <h2>sharp edge Buttons</h2>
                    {/* <button class="btn button-gradient-sharpEdge-style">Primary</button> */}
                    <button class="btn peach-gradient button-gradient-sharpEdge-style">Peach</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>circular edge Buttons</h2>
                    <button class="btn btn peach-gradient button-gradient-circle-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                    <h2>soft edge Buttons</h2>
                    <button class="btn btn peach-gradient button-gradient-softEdge-style">Primary</button>
                  </div>
                </div>
                <div className="row">
                  <div className ="align-button " >
                  <h2> just text buttons</h2>
                  <button type="button"  class="btn btn-link button-link-style">text Button</button>
                  </div>
                </div>
               
                
            </div>
          </div>
      )
  }
}

export default Buttons;