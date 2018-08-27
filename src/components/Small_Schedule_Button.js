import React from 'react';
import Typekit from 'react-typekit';


class Small_Schedule_Button extends React.Component{
    constructor(props){
        super(props)
    
}

render(){
    return(
        <a className='small_menu_button small_schedule_button' href='https://www.schedulicity.com/scheduling/SYL6WN/classes'>
        <img src={'images/scheduleicon.png'} className='small_button_image'/>
    
        <Typekit kitId="sim6twb" /> 
        </a>
    )
};}
export default Small_Schedule_Button;