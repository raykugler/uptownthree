import React from 'react';
import Typekit from 'react-typekit';
//import ShowMenu from './Show_Menu';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Style_Button from './Styles_Button';
import Teachers_Button from './Teachers_Button';
import Schedule_Button from './Schedule_Button';
import Find_Us_Button from './Find_Us_Button';

class Menu extends React.Component{
 constructor(props){
     super(props)
    
 }


  render(){   
    
 return( 
           
           
       <div className='vert_menu'>
        <Style_Button  />
        <Teachers_Button />
        <Schedule_Button />
       <Find_Us_Button />
        </div> 
    
    );   
    };}
        export default Menu;

    

/*           <img src={'images/scheduleicon.png'} className={props.state.condition ? 'menu_images image_one' : 'no_menu_images image_one'}/>
            <p className={props.state.condition ? 'menu_title title_one' : 'no_menu_title title_one'}>Schedule</p>
            <img src={'images/stylesicon.png'} className={props.state.condition ? 'menu_images image_two' : 'no_menu_images image_two'} />
            <p className={props.state.condition ? 'menu_title title_two' : 'no_menu_title title_two'}>Styles</p>
            <img src={'images/instructors.png'} className={props.state.condition ? 'menu_images image_three' : 'no_menu_images image_three'}/>
            <p className={props.state.condition ? 'menu_title title_three' : 'no_menu_title title_three'}>Intructors</p>
            <img src={'images/mapicon.png'} className={props.state.condition ? 'menu_images image_four' : 'no_menu_images image_four'}/>
            <p className={props.state.condition ? 'menu_title title_four' : 'no_menu_title title_four'}>Find Us</p>
 




<div>
<div className="widget-header">
<h3 className="widget-header__title">Your Options</h3>
<button 
className="button button--link"
onClick={props.handleDeleteOptions}>Remove All</button>
</div>

{props.options.length === 0 && <p className="message"> Please add an option to get started!</p>}
{
    props.options.map((option, index) =>(
        <Option
            key={option}
            optionText={option}
            count={index + 1}
            handleDeleteOption={props.handleDeleteOption}
            />
    ))
}
</div>








/*const Main = (props) =>{
    return(
 
    <div className='main'>
    <div className="menu_block">
    <div className="grey_bar">
    </div>
    </div>
    <input type='image' src={'/images/Hamburger_icon.svg.png'} className='hamburger' onClick={ShowMenu}/>
   <img src={'/images/mainw_omenuflat.png'} className='main_image'/>
    <p className='main_title'>Uptown <br/>   Dance</p>
    <Typekit kitId="sim6twb" />
    
 
    </div>
);

};

export default Main;

*/