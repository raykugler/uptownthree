import React from 'react';
import Small_Style_Button from './Small_Style_Button';
import Small_Instructor_Button from './Small_Instructor_Button';
import Small_Schedule_Button from './Small_Schedule_Button';
import Small_Find_Us_Button from './Small_Find__Us_Button';


class Small_Menu extends React.Component{
 constructor(props){
     super(props)
 }

 render(){
 return(

<div className='footer_menu'>
<div className='bg'></div>
<Small_Style_Button  resetChoice={this.props.resetChoice}/>
<Small_Instructor_Button />
<Small_Schedule_Button />
<Small_Find_Us_Button />
</div>

 );
};}
export default Small_Menu;