import React from 'react';
import Typekit from 'react-typekit';
import {Link} from 'react-router-dom';

class Small_Style_Button extends React.Component{
    constructor(props){
        super(props)
    
}

render(){
    return(
        <Link to='/dance_styles' className='small_menu_button small_styles_button'  >
        <img src={'images/stylesicon.png'} className='small_button_image' onClick={this.props.resetChoice}/>
    
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Small_Style_Button;