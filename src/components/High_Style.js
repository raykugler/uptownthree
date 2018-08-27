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
    
    <Bio instructor={this.props.instructor}/>
    </div>

    
)}
    }

export default High_Style;
High_Style.propTypes = {instructor:  PropTypes.string.isRequired};

/*
*/