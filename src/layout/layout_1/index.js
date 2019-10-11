import React from 'react';

import './style.css';

class Layout_1 extends React.Component{
  constructor(props){
    super(props)
      this.state={
      width :window.outerWidth ,
      height :window.outerHeight
    }
    if(window.outerWidth>=1200){
      this.state={
        widthSquare :window.outerWidth ,
        heightSquare :window.outerWidth,
        rectangleHeigt : '460px'
      }
    }
    // if(window.outerWidth<1200){
    //   this.state={
    //     widthSquare :window.outerWidth ,
    //     heightSquare :window.outerWidth
    //   }
    // }
  }
  render(){
    let height=this.state.height;
    let width= this.state.width;
    let widthSquare =this.state.widthSquare;
    let heightSquare= this.state.heightSquare;
    let rectangleHeigt= this.state.rectangleHeigt;
      return(
          <div>
               <div className='container-fluid'>
                <div className='row'>
                    <div className='image-circle-small'>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-small' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>
                  
                  <div className='row'>
                      <div className='image-circle-medium'>
                      </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-medium' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-large'>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='image-circle-large' style={{border:"none",boxShadow:"none"}}>
                      <img className="image-circle-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                    </div>
                  </div>
                  <div className='row'>
                      <div className='image-circle-extraLarge' >
                        
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-circle-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-circle-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-small'>
                        
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-small' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-small-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-medium'>
                      
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-medium' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-medium-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-large'>
                        
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-large' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-large-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-extraLarge'>
                        
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-extraLarge' style={{border:"none",boxShadow:"none"}}>
                        <img className="image-square-extraLarge-style" src='http://lorempixel.com/output/cats-q-c-640-480-1.jpg'/>
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-square-fullScreen'  style={{width:widthSquare,height:heightSquare}}  >
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
                      <div className='image-verticle-fullScreen' style={{height:height,width:width}} >
                      </div>
                  </div>
                  <div className='row'>
                      <div className='image-verticle-fullScreen' style={{border:"none",boxShadow:"none",height:height,width:width}}>
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
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle1">
                                <li className="column ">
                                <img className="upload_image_style" src="https://www.noissue.co/skin/frontend/noissue/default/images/upload-a-finished-design.png" alt="Smiley face" />
                                <img className="image-square-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column">
                                  
                                <img className="image-square-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle">
                                <li className="column">
                                    <a href="/doodles">
                                        <img className="image-square-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column">
                                    <a href="/character">
                                        <img className="image-square-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle1">
                                <li className="column ">
                                <img className="upload_image_style_circle" src="https://www.noissue.co/skin/frontend/noissue/default/images/upload-a-finished-design.png" alt="Smiley face" />
                                  <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />  
                                </li>
                                <li className="column">
                                  <img className="image-circle-style" src="https://i.imgur.com/dm4Rwzw.gif" alt="Smiley face" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  <div className="row">
                    <div className="col-lg-12 col-xs-12 col-sm-12 " >
                        <div className="row imageRow">
                            <ul className="ul_imageStyle">
                                <li className="column">
                                    <a href="/doodles">
                                        <img className="image-circle-style" src="https://i.imgur.com/ZerwVp3.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                                <li className="column">
                                    <a href="/character">
                                        <img className="image-circle-style" src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg" alt="Smiley face" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                  
               </div>
          </div>
      )
  }
}

export default Layout_1;
