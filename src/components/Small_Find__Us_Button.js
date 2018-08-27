import React from 'react';
import Typekit from 'react-typekit';
import { Link} from 'react-router-dom';

class Small_Find_Us_Button extends React.Component{
    constructor(props){
        super(props)
    
}

render(){
    return(
        <Link to='/findus' className='small_menu_button small_find_us_button' >
        <img src={'images/mapicon.png'} className='small_button_image small_find_us_image'/>
    
        <Typekit kitId="sim6twb" /> 
        </Link>
    )
};}
export default Small_Find_Us_Button;