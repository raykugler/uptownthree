import React from 'react';
import Typekit from 'react-typekit';

class FP_Menu extends React.Component{
    constructor(props){
        super(props)
        
    }
      
  
      
    render(){
        return(
            <nav className='fp_menu' id='menu' >
            <nav className='page_nav'>
                   <button className='fp_styles_button' onClick={this.props.styles}>
                   <p className='fp_menu_text'> Styles </p> 
                </button>
            
                <button className='fp_teachers_button' onClick={this.props.teachers}>
                    <p className='fp_menu_text'> Teachers </p> 
                </button>
        
                <button className='fp_find_us_button' onClick={this.props.footer}>
                    <p className='fp_menu_text'> Find Us </p> 
                </button>
                <Typekit kitId="sim6twb" /> 
            </nav>
            <nav className='soc_me'>
                <button className='soc_button'>
                <img src='images/soc_twitter.png' className='fp_soc_icon' />
                </button>
                <button className='soc_button'>
                <img src='images/soc_facebook.png' className='fp_soc_icon' />
                </button>
                <button className='soc_button'>
                <img src='images/soc_instagram.png' className='fp_soc_icon' />
                </button>
                <button className='soc_button'>
                <img src='images/soc_snapchat.png' className='fp_soc_icon' />
                </button>
            </nav>

            </nav>
        )
    }
}
export default FP_Menu