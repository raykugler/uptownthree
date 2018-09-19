import React from 'react';

import Typekit from 'react-typekit';
import HipHop from './HipHop.js';
import Tango from './Tango.js';
import Salsa from './Salsa.js';

import Modern from './Modern.js';
import Swing from './Swing.js';
import Wedding from './Wedding.js';
import Belly from './Belly.js';

    class New_Styles_List extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                choice: 0
            };
            
          }
          componentDidMount() {
            window.scrollTo(0,0);
        }
                 
       
       resetChoice = () => { 
           this.setState({ choice: 0 });
        console.log('cheese')
     }
    
    render(){
       var style_choice= <p>JJJJJJ </p>;
if (this.props.style_decision === 1){
    style_choice= <Salsa close={this.props.close} />
}
else if
    (this.props.style_decision === 2){
        style_choice = <Tango />
    }
    else if
    (this.props.style_decision === 3){
        style_choice = <HipHop />
    }else if
    (this.props.style_decision === 4){
        style_choice = <Modern />
    }else if
    (this.props.style_decision === 5){
        style_choice = <Swing />
    }else if
    (this.props.style_decision === 6){
        style_choice = <Wedding />
    }else if
    (this.props.style_decision === 7){
        style_choice = <Belly />
    }

 
          
    return  (  
    <div>
    {style_choice}
    <Typekit kitId="sim6twb" /> 
    </div>
   

   
);
}}

export default New_Styles_List;

