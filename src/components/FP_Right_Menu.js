import React from 'react';
import FP_Bio from './FP_Bio';
import PropTypes from 'prop-types';

class FP_Right_Menu extends React.Component {
    constructor(props){
        super(props)
    }
render(){
return(
    <div className='fp_right_menu'>  
    <div className='fp_right_styles_button' onClick={this.props.resetChoice}>
                    <img src='images/stylesicon.png' className='fp_right_menu_icon' />
                    <p className='fp_right_menu_text'> All Styles </p> 
                </div>

    <FP_Bio instructor={this.props.instructor}/>
    </div>

    
)}
    }

export default FP_Right_Menu;
