import React from 'react';
import Typekit from 'react-typekit';
import { Link } from 'react-router-dom';

class Small_Instructor_Button extends React.Component{
    constructor(props){
        super(props)
    
}

render(){
    return(
        <Link to='/teachers' className='small_menu_button small_instructor_button' >
        <img src={'images/instructors.png'} className='small_button_image'/>
    
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Small_Instructor_Button;