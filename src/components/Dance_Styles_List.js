import React from 'react';

import Typekit from 'react-typekit';
import HipHop from './HipHop.js';
import Tango from './Tango.js';
import Salsa from './Salsa.js';

import Modern from './Modern.js';
import Swing from './Swing.js';
import Wedding from './Wedding.js';
import Belly from './Belly.js';
import Small_Menu from './Small_Menu';

    class Dance_Styles_List extends React.Component {
        constructor(props) {
            super(props)
            this.state ={
                choice: 0
            };
            
          }
          componentDidMount() {
            window.scrollTo(0,0);
        }
                 
       styleChoice=(e)=> {
           this.setState({choice: e})
           

       }
       resetChoice = () => { 
           this.setState({ choice: 0 });
        console.log('cheese')
     }
        render(){
          
     if (this.state.choice ===1){
         console.log(this.state.choice);
              return(
                  <Salsa resetChoice={this.resetChoice}/>
              )
          }
      else if(this.state.choice ===2){  
        console.log(this.state.choice);          
            return(
                <Tango resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===3){  
        console.log(this.state.choice);          
        console.log('hiphop');  
        return(
                <HipHop resetChoice={this.resetChoice}/>
                
            )
        }
     else if(this.state.choice ===4){  
        console.log(this.state.choice);          
            return(
                <Modern resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===5){ 
        console.log(this.state.choice);             
            return(
                <Swing resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===6){    
        console.log(this.state.choice);          
            return(
                <Wedding resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===7){    
        console.log(this.state.choice);  
                
            return(
                <Belly resetChoice={this.resetChoice}/>
            )
        }

        
    else{
          
    return  (  
    <div className='dance_styles_page'>
    
   
    <div className='styles_menu'>
    <div className='dance_style_head'>Dance Styles</div>
    <div className='block_one curved-edges' onClick={ e => this.styleChoice(1)}>
        <p className='style_block_text' ref='salsa'>Salsa</p>
        <img src={'/images/dance_images/salsa.jpg'}className='block style_image_one'/>
    </div>
    
    <div className='block_two curved-edges'  onClick={ e => this.styleChoice(2)}>
        <p className='style_block_text'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'}className='block style_image_two'/>
    </div>
    
    <div className='block_three curved-edges' onClick={ e => this.styleChoice(3)}>
        <p className='style_block_text'>Hip Hop</p>
        <img src={'/images/dance_images/hiphop.jpg'}className='block style_image_three'/>
    </div>

    <div className='block_four curved-edges' onClick={ e => this.styleChoice(4)}>
        <p className='style_block_text'>Modern</p>
        <img src={'/images/dance_images/modern.jpg'}className='block style_image_four'/>
    </div>

    <div className='block_five curved-edges' onClick={ e => this.styleChoice(5)}>
        <p className='style_block_text'>Swing</p>
        <img src={'/images/dance_images/swing.jpg'}className='block style_image_five'/>
    </div>
    
    <div className='block_six curved-edges' onClick={ e => this.styleChoice(6)}>
        <p className='style_block_text'>Wedding</p>
        <img src={'/images/dance_images/wedding.png'}className='block style_image_six'/>
    </div>

    <div className='block_seven curved-edges' onClick={ e => this.styleChoice(7)}>
        <p className='style_block_text'>Belly</p>
        <img src={'/images/dance_images/belly.jpg'}className='block style_image_seven'/>
    </div>

    <Typekit kitId="sim6twb" /> 
    </div>
    <Small_Menu resetChoice={this.props.resetChoice}/>
    </div>
);
}}}

export default Dance_Styles_List;

       /* state = {
        choice: 1
    };

    styleChoice(){
        
    }
    */