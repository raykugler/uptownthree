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
            <div className='fp_teacher_list'>
            <table>
            <tbody>
            <tr>
            <FP_Teachers  style={this.props.style} setBio={this.props.setBio} classes={this.props.classes}/>
            </tr>
            <tr>
            <FP_Teacher_Name classes={this.props.classes} />
            </tr>
            </tbody>
            </table>
            <FP_Style_Description style={this.props.style}/>
            <div className='fp_schedule_button'>
            <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank">
            <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling"  border="0" />
            </a>
            </div>
              </div>
            
            </div>
        )
            
    }
}
export default FP_Left_Menu;
