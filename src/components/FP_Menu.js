import React from 'react';
import Typekit from 'react-typekit';

class FP_Menu extends React.Component{
    constructor(props){
        super(props)
        
    }
      
  
      
    render(){
        return(
            <div className='fp_menu' id='menu' >
                <div className='fp_styles_button' onClick={this.props.styles}>
                    <img src='images/stylesicon.png' className='fp_menu_icon' />
                    <p className='fp_menu_text'> Styles </p> 
                </div>
            
                <div className='fp_teachers_button' onClick={this.props.teachers}>
                    <img src='images/instructors.png' className='fp_menu_icon' />
                    <p className='fp_menu_text'> Teachers </p> 
                </div>
        
                <div className='fp_find_us_button' onClick={this.props.footer}>
                    <img src='images/mapicon.png' className='fp_menu_icon' />
                    <p className='fp_menu_text'> Find Us </p> 
                </div>
                <Typekit kitId="sim6twb" /> 
                <div className='soc_me'>
                <img src='images/soc_twitter.png' className='fp_soc_icon' />
                <img src='images/soc_facebook.png' className='fp_soc_icon' />
                <img src='images/soc_instagram.png' className='fp_soc_icon' />
                <img src='images/soc_snapchat.png' className='fp_soc_icon' />
                </div>

                </div>
        )
    }
}
export default FP_Menu