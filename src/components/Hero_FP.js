import React from 'react';
import Typekit from 'react-typekit';

class Hero_FP extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='hero_fp'>
            <img src='/images/mainimage.png' className='hero_image'/>
            <p className='main_text_fp'>Uptown <br/> Dance</p>
            <Typekit kitId="sim6twb" /> 
            </div>

        )
    }
}
export default Hero_FP;