import React from 'react';
import Typekit from 'react-typekit';
import { Link} from 'react-router-dom';

class Style_Button extends React.Component{
    constructor(props){
        super(props)
    
}

render(){
    return(
        <Link to='/dance_styles' className='menu_button styles_button' onClick={this.props.resetChoice}>
        <img src={'images/stylesicon.png'} className='styles_button button_image'/>
        <img src={'images/style_button.jpg'} className='big_styles_image big_button_image'/>
        <p className='button_text style_button_text'>Styles</p>
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Style_Button;