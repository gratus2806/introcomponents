import React from 'react';
import './style.css';


class Images extends React.Component{
    constructor(props){
        super(props)
          this.state={
            verticalHeight:window.outerHeight,
            verticalWidth:window.outerWidth
          }
          if(window.outerWidth>=1200){
            this.state={
              widthSquare :window.outerWidth ,
              heightSquare :window.outerWidth,
              rectangleHeigt : '652px'
            }
        }
    }


  render(){
    let widthSquare =this.state.widthSquare;
    let heightSquare= this.state.heightSquare;
    let verticalWidth=this.state.verticalWidth;
    let verticalHeight = this.state.verticalHeight;
    let rectangleHeigt= this.state.rectangleHeigt;
      return(
          <div>
               <div className='container-fluid'>
                  <div className='row'>
                    <div className='image-circle-small'>
                    <i className="image-circle-small-button fa fa-image fa-2x "></i>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-small' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>
                  

                  <div className='row'>
                      <div className='image-circle-medium'>
                      <i className="image-circle-medium-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-medium' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='image-circle-large'>
                    <i className="image-circle-large-button fa fa-image fa-2x "></i>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-large' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div className='row'>
                      <div className='image-circle-extraLarge' >
                      <i className="image-circle-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-circle-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-circle-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-small'>
                      <i className="image-square-small-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-small' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-medium'>
                      <i className="image-square-medium-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-medium' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-large'>
                      <i className="image-square-large-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-large' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-extraLarge'>
                      <i className="image-square-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                      <div className='image-square-fullScreen'  style={{width:widthSquare,height:heightSquare}}  >
                      <i className="image-square-fullScreen-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-fullScreen' style={{border:"none",boxShadow:"none",width:widthSquare,height:heightSquare}}>
                        <img className="image-square-fullScreen-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-small'>
                      <i className="image-softCorner-small-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-small' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div> 


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-medium'>
                      <i className="image-softCorner-medium-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-medium' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-large'>
                      <i className="image-softCorner-large-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-large' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-extraLarge' >
                      <i className="image-softCorner-extraLarge-button fa fa-image fa-2x "></i>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-sm-12 col-style'>
                      <div className='image-softCorner-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-softCorner-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                    </div>
                  </div>


                  <div className='row'>
                      <div className='image-verticle-fullScreen'  >
                      <i className="image-verticle-fullScreen-button fa fa-image fa-2x "></i>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-verticle-fullScreen' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-verticle-fullScreen-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  <div className='row'>
                    <div className='image-rectangle-large' style={{height:rectangleHeigt}}>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-rectangle-large' style={{border:"none",boxShadow:"none",height:rectangleHeigt}}>
                      <img className="image-rectangle-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>


                  <div class='row'>
                      <div class='image-rectangle-small' >
                      </div>
                  </div>
                  <div class='row'>
                      <div class='image-rectangle-small' style={{border:"none",boxShadow:"none"}}>
                        <img class="image-rectangle-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>


                  

            </div>
          </div>
      )
  }
}

export default Images;