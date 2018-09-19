import React from 'react';
import Typekit from 'react-typekit';


class Cover extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
    return(
<header className='header' >
   
<h1 className='main_title'>

          Uptown Dance</h1>
         <Typekit kitId="sim6twb" />     
         
         <div className='bar'></div>
          <img 
          src={'/images/mainimage.png'} 
          className='main_image'/>
         
         
          
         
         
</header>
          
    );}
}
    export default Cover;

    /*    */

    /* <input type='image' 
    src={'/images/Hamburger_icon.svg.png'} 
    className='hamburger'
    onClick={this.handleClick}/> </div>*/