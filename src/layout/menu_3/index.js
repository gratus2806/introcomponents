import React from 'react';

import './style.css';

class Menu_3 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            openStatus:false,
            backgroundColor_menuButton:'#DE4152',
            backgroundColor_menu:'#DE4152',
            font_color:'#f6dba7'
        }
    }
    
    openNav= () =>{
        const {openStatus}=this.state;
        this.setState({openStatus:!openStatus},()=>{
            if(!this.state.openStatus){
                
                var myElement = document.getElementById("toggle-menu");
                myElement.className =myElement.className.replace("active","");
                var myElement = document.getElementById("menu");
                myElement.className =myElement.className.replace("open","");
                this.setState({ backgroundColor_menuButton:'#DE4152',backgroundColor_menu:'#000',font_color:'#f6dba7'});
            }else{
                var myElement = document.getElementById("toggle-menu");
                myElement.className+=" active";
                var myElement = document.getElementById("menu");
                myElement.className+=" open";
                this.setState({ backgroundColor_menuButton:'#f6dba7',backgroundColor_menu:'#000',font_color:'#f6dba7'});
            }
                
        })
    }
   
    render(){
        let backgroundColor_menuButton=this.state.backgroundColor_menuButton;
        
        return(
            <div  style={{height : `${window.innerHeight}px`,backgroundColor:"#f6dba7"}}>
                <header id="header">
                    <nav class="nav">
                        <button onClick={this.openNav} id="toggle-menu" className="toggle-menu ">
                        <span  style={{backgroundColor:backgroundColor_menuButton}} id="menu_icon" className="menu_icon spanbefore "></span>  
                        <span  style={{backgroundColor:backgroundColor_menuButton}} id="menu_icon" className="menu_icon spanmiddle "></span>
                        <span style={{backgroundColor:backgroundColor_menuButton}} id="menu_icon" className="menu_icon spanafter"></span>
                        </button>
                    </nav>
                </header>

                <div id="menu" class="">
                    <nav class="main-nav">
                        <ul>
                            <li>
                                <a style={{color:'#f6dba7'}} href="#">
                                About
                                </a>
                            </li>
                            <li>
                                <a style={{color:'#f6dba7'}} href="#">
                                Pricing
                                </a>
                            </li>
                            
                            <li>
                                <a style={{color:'#f6dba7'}} href="#">
                                Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                    
                    <footer class="menu-footer">
                        <nav class="footer-nav">
                            <ul>
                                <li>
                                <a  href="#">
                                    <i style={{color:'#f6dba7'}} class="fa  fa-twitter fa-fw social_icons"></i>
                                    
                                </a>
                                </li>
                                <li>
                                <a  href="#">
                                    <i style={{color:'#f6dba7'}} class="fa fa-envelope fa-fw social_icons"></i>
                                    
                                </a>
                                </li>
                            </ul>
                        </nav>
                    </footer>
                </div>
                <div style={{textAlign:'center'}}>
                <h1 style={{color:'#DE4152'}}>QWERTY</h1>
                </div>
                
            </div>
        )
    }
}

export default Menu_3;
