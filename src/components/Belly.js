import React from 'react';
import Low_Style from './Low_Style';
import High_Style from './High_Style';
import Small_Menu from './Small_Menu';

class Belly extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'Belly',
            instructor: '',
            classes: 'belly'
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
            <High_Style instructor={this.state.instructor}/> 
            
            <h2 className='style_name'>Belly</h2>
            <img src={'/images/dance_images/belly.png'} className='big_style_image belly_adjust'/>
           
            
            <Low_Style style={this.state.style} setBio={this.setBio} classes={this.state.classes} close={this.props.close} />
           
            </div>    
        );}
        
    }
    
    
export default Belly;