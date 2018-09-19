import React from 'react';
import Typekit from 'react-typekit';
import { Link} from 'react-router-dom';

class Find_Us_Button extends React.Component{
    constructor(props){
        super(props)
    
}
render(){
    return(
        <div className='menu_button find_us_button'>
        <Typekit kitId="sim6twb" /> 
        <div className='map_overlay'></div>
        <img src={'images/map.png'} className='map'/>
        <p className='address'> 200 Broad Street<br/> Seattle, WA<br/><br/> 1-800-DANCING</p>
        <div className='schedule_button'>
       <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank">
       <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling"  border="0" />
       </a>
       </div>
</div>
    )
};}
export default Find_Us_Button;