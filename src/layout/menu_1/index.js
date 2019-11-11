import React from 'react';

import './style.css';

class Menu_1 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            width:0
        }
    }
    openNav= () =>{
        
        if (window.innerWidth>=767  && window.innerWidth<=1024 ) {
            this.setState({width : "50%",display:"block"}); 
        } else if (window.innerWidth>=1025) {
            this.setState({width : "30%",display:"block"}); 
        } else {
            this.setState({width : `${window.innerWidth}px`,display:"block"}); 
        }
    }
    closeNav= () =>{
        this.setState({width:'0px',display:"none"});
    }
    render(){
       let width=this.state.width;
       let visiblity = this.state.display;

      
        return(
            <div style={{height : `${window.innerHeight}px`,backgroundColor:"#f6dba7"}}>
                <div id="mySidenav" class="sidenav" style={{width:width}}>
                    <ul className="ul_menuStyle "  >
                        <li >
                            <a  href="javascript:void(0)" className="closebtn menu_options" onClick={this.closeNav}><img src="https://southpawagency.com/assets/images/ui/SP-Icon_Menu-Close-Blk.svg" style={{width: "30px"}}></img></a>
                        </li>
                        <li className="li_menuStyle">
                            <a className="menu_options" href="/about/">About</a>
                        </li>
                        <li className="li_menuStyle">
                            <a className="menu_options" href="/people/">People</a>
                        </li>
                        <li  className="li_menuStyle">
                            <a className="menu_options" href="/work/">Work</a>
                        </li>
                        <li  className="li_menuStyle">
                            <a className="menu_options" href="/newsfeed/">Newsfeed</a>
                        </li>
                        {/* <li  className="li_menuStyle">
                            <a className="menu_options" href="/hatch/">Hatch</a>
                        </li> */}
                        <li  className="li_menuStyle">
                            <a className="menu_options" href="/careers/">Careers</a>
                        </li>
                        <li  className="li_menuStyle">
                            <a className="menu_options" href="/contact/">Contact</a>
                        </li>
                    </ul>
                    {/* <div class="row footer_menu">
                        <ul class="list-inline social-buttons socialButton_styling">
                            <li class="list-inline-item"><a target="_blank"><i class="fa fa-linkedin socialButton"></i></a></li>
                            <li class="list-inline-item"><a target="_blank"><i class="fa fa-facebook-square socialButton"></i></a></li>
                            <li class="list-inline-item"><a target="_blank"><i class="fa fa-twitter socialButton"></i></a></li>
                        </ul>
                    </div> */}
                    <div id="navFooter" >
                        <div class="social-links">
                            <ul class="social-list list-inline" style={{display:visiblity}} >
                                <li><a href="http://twitter.com/" target="_blank"><i class="fa fa-twitter footer-font-color" title="Twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram footer-font-color" title="Instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="fa fa-linkedin footer-font-color" title="LinkedIn"></i></a></li>
                                <li style={{padding:"25px 0px 0 0"}}><a href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook-square footer-font-color" title="Facebook"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <span className="pull-right" style={{fontSize:"30px",cursor:"pointer",padding: "1% 2% 1% 1%"}} onClick={this.openNav}>&#9776; </span>
                
            </div>
        )
    }
}

export default Menu_1;
