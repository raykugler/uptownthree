import React from 'react';
import Modal from 'react-modal';
import Low_Style from './Low_Style';
import High_Style from './High_Style';
import Small_Menu from './Small_Menu';

class Salsa extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'Salsa',
            instructor: '',
            classes: 'salsa'
        }
        } 
        componentDidMount() {
            window.scrollTo(0,0);
        } 

        setBio=(id)=>{
            this.setState({instructor: id})
            console.log({id})
        };    
      
      
      
        render(){
        return(  
            <div className='big_style_grid'  >
            <High_Style resetChoice= {this.props.resetChoice} styleChoice={this.props.styleChoice} instructor={this.state.instructor}/> 
            
            <p className='style_name'>Salsa</p>
            <img src={'/images/dance_images/salsa.png'} className='big_style_image salsa_adjust'/>
           
            
            <Low_Style close={this.props.close} style={this.state.style} setBio={this.setBio} classes={this.state.classes}/>
          
            
            </div>    
        );}
        
    }
    
    
    
export default Salsa;