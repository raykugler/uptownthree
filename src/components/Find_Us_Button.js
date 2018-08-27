import React from 'react';
import Typekit from 'react-typekit';
import { Link} from 'react-router-dom';

class Find_Us_Button extends React.Component{
    constructor(props){
        super(props)
    
}
render(){
    return(
        <Link to='/findus' className='menu_button find_us_button'>
        <Typekit kitId="sim6twb" /> 
        <div className='map_overlay'></div>
        <img src={'images/map.png'} className='map'/>
        <p className='address'> 200 Broad Street<br/> Seattle, WA<br/><br/> 1-800-DANCING</p>
        </Link>
    )
};}
export default Find_Us_Button;