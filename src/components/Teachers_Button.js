import React from 'react';
import Typekit from 'react-typekit';
import { Link } from 'react-router-dom';

class Teachers_Button extends React.Component{
    constructor(props){
        super(props)
    
}
render(){
    return(
        <Link to='/teachers' className='teachers_button menu_button'>
        <div className='button_hover'></div>
        <img src={'images/instructors.png'} className='teachers_button_image button_image'/>
        
        <img src={'images/teachers_button.png'} className='big_teachers_image big_button_image'/>
        <p className='button_text'>Our Teachers</p>
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Teachers_Button;