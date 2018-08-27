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
    
    

    </div>
);
    }
};

export default FP_Footer;