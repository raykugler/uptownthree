import React from 'react';
import FP_Left_Menu from './FP_Left_Menu';
import FP_Right_Menu from './FP_Right_Menu';
class FP_Belly extends React.Component {
        constructor(props){
            super(props)
        this.state={
            style: 'Belly',
            instructor: '',
            classes: 'belly'
        }
        } 
       
        setBio=(id)=>{
            this.setState({instructor: id})
            console.log({id})
        };    
      
      
      
        render(){
        return(  
            <div className='fp_full_style'>
            <h2 className='fp_dance_style_head_fade'>Dance Styles</h2>
            <FP_Left_Menu style={this.state.style} setBio={this.setBio} classes={this.state.classes}/>
            <h3 className='fp_style_name'>Belly</h3>
            <img src={'/images/dance_images/belly.png'} className='fp_big_style_image fp_salsa_adjust'/>
            <FP_Right_Menu resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/>
            
            </div>    
        );}
        
    }
    
    
export default FP_Belly;