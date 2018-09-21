import React from 'react';
import FP_Teacher_Name from './FP_Teacher_Name';
import FP_Teachers from './FP_Teachers';
import FP_Style_Description from './FP_Style_Description';


class FP_Left_Menu extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return(
            <div className='fp_left_menu'>
            <div className='fp_left_overlay'></div>
            <ul className='fp_teacher_list'>
            <FP_Teachers  style={this.props.style} setBio={this.props.setBio} classes={this.props.classes}/>
            </ul>
           
            <FP_Style_Description style={this.props.style}/>
           
            
            </div>
        )
            
    }
}
export default FP_Left_Menu;
