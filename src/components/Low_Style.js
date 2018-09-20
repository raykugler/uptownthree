import React from 'react';
import Teacher_Name from './Teacher_Name';
import Teachers from './Teachers';
import Style_Description from './Style_Description';
import Teacher_Consolidate from './Teacher_Consolidate';

class Low_Style extends React.Component{
    constructor(props){
        super(props)
    };

  
    render(){
        return(

            <ul className='bottom_half_menu'>
            
            <li className='sub_bottom'>
           <Teacher_Consolidate style={this.props.style} setBio={this.props.setBio} classes={this.props.classes}/>
            </li>
           
            <Style_Description style={this.props.style} classes={this.props.classes}/>
            <button onClick={this.props.close} className='low_close_button'>
            <img src='images/back.png' className='low_back_icon' />
            <p className='low_close_text'> All Styles </p> </button>
    
            
            </ul>        )
    }
}
export default Low_Style;
