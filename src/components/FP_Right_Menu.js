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
    <button className='fp_right_styles_button' onClick={this.props.resetChoice}>
                    <img src='images/back.png' className='fp_right_menu_icon' />
                    <p className='fp_right_menu_text'> All Styles </p> 
                </button>
                <div className='fp_schedule_button'>
                <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank">
                <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling"  border="0" />
                </a>
                  </div>

    <FP_Bio instructor={this.props.instructor}/>
    </div>

    
)}
    }

export default FP_Right_Menu;
