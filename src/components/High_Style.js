import React from 'react';
import Bio from './Bio';
import PropTypes from 'prop-types';

class High_Style extends React.Component {
    constructor(props){
        super(props)
    }
render(){
return(
    <div className='top_half_menu'>  
    <div className='menu_schedule_button'>
    <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank">
    <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling"  border="0" />
    </a>
    </div>
      </div>

    
)}
    }

export default High_Style;
High_Style.propTypes = {instructor:  PropTypes.string.isRequired};

/*
 <Bio instructor={this.props.instructor}/>
 
*/