import React from 'react';
import Low_Style from './Low_Style';
import High_Style from './High_Style'
import Small_Menu from './Small_Menu';

/*class Bio extends React.Component {



    render(){
        return(
            <p>{this.state.instructor}</p>
        )
        }};
*/



        
class Tango extends React.Component {
    constructor(props){
        super(props)
    this.state={
        style: 'Tango',
        instructor: '',
        classes:'tango'
    }
    }
    setBio=(id)=>{
        this.setState({instructor: id})
        console.log({id})
    };    
  
    render(){
    return(  
        <div className='big_style_grid'  >
       <High_Style resetChoice= {this.props.resetChoice} instructor={this.state.instructor}/>
        
        <p className='style_name'>Tango</p>
        <img src={'/images/dance_images/tango.png'} className='big_style_image tango_adjust'/>
       
        
        <Low_Style style={this.state.style} setBio={this.setBio} classes={this.state.classes} close={this.props.close} />
            
        </div>    
    );}
    
}


export default Tango;

/*resetChoice = () => { 
           this.setState({ choice: 0 });
           console.log(props.choice)

       }

        <img src={'/images/right_arrow.png'} className='back_arrow' onClick={this.props.resetChoice}/>
       */