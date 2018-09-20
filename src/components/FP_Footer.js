import React from 'react';


class FP_Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
    
 <div className='fp_find_us_grid' id='footer'>
 <p className='fp_find_us_title'> Find Us </p>
 <img src={'images/map.png'} className='fp_big_map' />
 <p className='fp_big_address'> 200 Broad Street<br/> Seattle, WA<br/><br/> 1-800-DANCING</p>
 <div className='footer_schedule_button'>
    <a href="https://www.schedulicity.com/scheduling/SYL6WN/classes"  title="Online scheduling" target="_blank" className='schedule_image_holder'>
    <img src="//cdn.schedulicity.com/images/schedulenow_dk_red2_md.png" alt="Online scheduling" title="Online scheduling" className='schedule_image' border="0" />
    </a>
    </div>
    
    

    </div>
);
    }
};

export default FP_Footer;