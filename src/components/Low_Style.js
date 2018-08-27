import React from 'react';
import Teacher_Name from './Teacher_Name';
import Teachers from './Teachers';
import Style_Description from './Style_Description';

class Low_Style extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return(

            <div className='bottom_half_menu'>
            <div className='teacher_list'>
           
            <table>
            <tbody>
            <tr>
            <Teachers  style={this.props.style} setBio={this.props.setBio} classes={this.props.classes}/>
            
            
            </tr>
            <tr>
              <Teacher_Name classes={this.props.classes} />
            </tr>
            </tbody>
            </table>
            <Style_Description style={this.props.style}/>
            </div>
           
    
            <div className='schedule_button'>
            <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank">
            <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling"  border="0" />
            </a>
            </div>
            
            </div>        )
    }
}
export default Low_Style;
