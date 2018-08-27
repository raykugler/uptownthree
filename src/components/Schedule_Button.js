import React from 'react';
import Typekit from 'react-typekit';
import { Link } from 'react-router-dom';

class Schedule_Button extends React.Component{
    constructor(props){
        super(props)
    
}
render(){
    return(
        <Link to='/teachers' className='schedule_mod_button menu_button'>
        <img src={'images/scheduleicon.png'} className='schedule_menu_button button_image'/>
        <img src={'images/schedule_button.png'} className='big_schedule_image big_button_image'/>
        <p className='button_text'>Class Schedule</p>
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Schedule_Button;