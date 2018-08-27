import React from 'react';
import Typekit from 'react-typekit';
import FP_HipHop from './FP_HipHop.js';
import FP_Tango from './FP_Tango.js';
import FP_Salsa from './FP_Salsa.js';

import FP_Modern from './FP_Modern.js';
import FP_Swing from './FP_Swing.js';
import FP_Wedding from './FP_Wedding.js';
import FP_Belly from './FP_Belly.js';

    class FP_Dance_Styles extends React.Component {
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
                  <FP_Salsa resetChoice={this.resetChoice}/>
              )
          }
      else if(this.state.choice ===2){  
        console.log(this.state.choice);          
            return(
                <FP_Tango resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===3){  
        console.log(this.state.choice);          
        console.log('hiphop');  
        return(
                <FP_HipHop resetChoice={this.resetChoice}/>
                
            )
        }
     else if(this.state.choice ===4){  
        console.log(this.state.choice);          
            return(
                <FP_Modern resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===5){ 
        console.log(this.state.choice);             
            return(
                <FP_Swing resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===6){    
        console.log(this.state.choice);          
            return(
                <FP_Wedding resetChoice={this.resetChoice}/>
            )
        }
     else if(this.state.choice ===7){    
        console.log(this.state.choice);  
                
            return(
                <FP_Belly resetChoice={this.resetChoice}/>
            )
        }

        
    else{
          
    return  (  
    <div className='fp_dance_styles_page'>
    
   
    <div className='fp_styles_menu'>
    <div className='fp_dance_style_head'>Dance Styles</div>
    <div className='fp_block_one fp_curved-edges' onClick={ e => this.styleChoice(1)}>
        <p className='fp_style_block_text' ref='salsa'>Salsa</p>
        <img src={'/images/dance_images/salsa.jpg'}className='fp_block fp_style_image_one'/>
    </div>
    
    <div className='fp_block_two fp_curved-edges'  onClick={ e => this.styleChoice(2)}>
        <p className='fp_style_block_text'>Tango</p>
        <img src={'/images/dance_images/tango.jpg'}className='fp_block fp_style_image_two'/>
    </div>
    
    <div className='fp_block_three fp_curved-edges' onClick={ e => this.styleChoice(3)}>
        <p className='fp_style_block_text'>Hip Hop</p>
        <img src={'/images/dance_images/hiphop.jpg'}className='fp_block fp_style_image_three'/>
    </div>

    <div className='fp_block_four fp_curved-edges' onClick={ e => this.styleChoice(4)}>
        <p className='fp_style_block_text'>Modern</p>
        <img src={'/images/dance_images/modern.jpg'}className='fp_block fp_style_image_four'/>
    </div>

    <div className='fp_block_five fp_curved-edges' onClick={ e => this.styleChoice(5)}>
        <p className='fp_style_block_text'>Swing</p>
        <img src={'/images/dance_images/swing.jpg'}className='fp_block fp_style_image_five'/>
    </div>
    
    <div className='fp_block_six fp_curved-edges' onClick={ e => this.styleChoice(6)}>
        <p className='fp_style_block_text'>Wedding</p>
        <img src={'/images/dance_images/wedding.png'}className='fp_block fp_style_image_six'/>
    </div>

    <div className='fp_block_seven fp_curved-edges' onClick={ e => this.styleChoice(7)}>
        <p className='fp_style_block_text'>Belly</p>
        <img src={'/images/dance_images/belly.jpg'}className='fp_block fp_style_image_seven'/>
    </div>

    <Typekit kitId="sim6twb" /> 
    </div>
   
    </div>
);
}}}

export default FP_Dance_Styles;