import React from 'react';
import Teacher_Name from './Teacher_Name';
import Teachers from './Teachers';
import Style_Description from './Style_Description';

class Teacher_Consolidate extends React.Component{
    constructor(props){
        super(props)
    };

    render(){
        return(

            <ul className='low_menu_grid'>
        
            <Teachers style={this.props.style} setBio={this.props.setBio} classes={this.props.classes}/>
                
            </ul>        )
    }
}
export default Teacher_Consolidate;
