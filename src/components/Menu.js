import React from 'react';
import Typekit from 'react-typekit';
import Modal from 'react-modal';
//import ShowMenu from './Show_Menu';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Style_Button from './Styles_Button';
import Teachers_Button from './Teachers_Button';
import Schedule_Button from './Schedule_Button';
import Find_Us_Button from './Find_Us_Button';
import Salsa from './Salsa';
import Style_Modal from './Style_Modal';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Teachers from './Teachers';
import Instructors from './Instructors';

const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });


class Menu extends React.Component{
 constructor(props){
     super(props)
    this.state={
        style_decision: 0,
        modalIsOpen: false,
             choice: 0

    };
 }

 style_decision=(e)=>{
     this.setState({style_decision: e});
     this.openModal();    
    console.log(this.state.style_decision);
 }

close=()=>{
    this.setState({modalIsOpen: false});
    console.log(this.state.modalIsOpen);
    
}

 openModal() {
    this.setState({modalIsOpen: true});
  }


  closeModal() {
    this.setState({modalIsOpen: false});
    
 
}

  render(){   

    
 return( 
           
           
       <nav className='vert_menu'>
       <div className='menu_button styles_button'>
       <img src={'images/style_button.jpg'} className='big_styles_image big_button_image'/>
       <p className='button_text style_button_text'>Styles</p>
       <nav className='the_styles'>
            <button className='salsa style_button' onClick={e =>this.style_decision(1)} >
                <p className='style_text'>Salsa</p>
            </button>

            <button className='tango style_button' onClick={e =>this.style_decision(2)}>
                <p className='style_text'>Tango </p>
            </button>
            <button className='hiphop style_button' onClick={e =>this.style_decision(3)}>
                <p className='style_text'>Hip-Hop</p>
            </button>
            <button className='modern style_button' onClick={e =>this.style_decision(4)}>
                <p className='style_text'>Modern</p>
            </button>
            <button className='swing style_button' onClick={e =>this.style_decision(5)}>
                <p className='style_text'>Swing</p>
            </button>
            <button className='wedding style_button' onClick={e =>this.style_decision(6)}>
                <p className='style_text'>Wedding</p>
            </button>
            <button className='belly style_button' onClick={e =>this.style_decision(7)}>
                <p className='style_text'>Belly</p>
            </button>
            <Modal client={client}
            isOpen={this.state.modalIsOpen}
            close={this.close}
            className='modal'
            onRequestClose={this.close}
            >

                <Style_Modal   
                     close={this.props.close}
                    style_decision ={this.state.style_decision}
                    styleChoice={this.styleChoice}
                    choice={this.state.choice}
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.close}
                 
                  />
                  <button onClick={this.close} className='close_button'><p className='close_x'>X</p></button>
        </Modal>
       </nav>
       </div>
       <Instructors />
       <Find_Us_Button />
       
       </nav> 
    
    );   
    };}
        export default Menu;

    





/*      
           <Style_Button  />
        <Teachers_Button />
        <Schedule_Button />
       <Find_Us_Button />

<img src={'images/scheduleicon.png'} className={props.state.condition ? 'menu_images image_one' : 'no_menu_images image_one'}/>
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