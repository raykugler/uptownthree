import React from 'react';
import Low_Style from './Low_Style';
import High_Style from './High_Style';
import Small_Menu from './Small_Menu';

class HipHop extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'HipHop',
            instructor: '',
            classes: 'hipHop'
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
            <High_Style resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/> 
            
            <p className='style_name'>Hip Hop</p>
            <img src={'/images/dance_images/hiphop.png'} className='big_style_image hip_hop_image'/>
           
            
            <Low_Style style={this.state.style} setBio={this.setBio} classes={this.state.classes} close={this.props.close} />
         
            
            </div>    
        );}
        
    }
    
    

export default HipHop;