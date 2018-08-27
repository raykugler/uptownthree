import React from 'react';

import Small_Menu from './Small_Menu';


class Find_Us extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
    return(
        <div className='find_us_page'>
 <div className='find_us_grid'>
 <p className='find_us_title'> Find Us </p>
 <img src={'images/map.png'} className='big_map' />
 <p className='big_address'> 200 Broad Street<br/> Seattle, WA<br/><br/> 1-800-DANCING</p>
    
    </div>
    <Small_Menu />

    </div>
);
    }
};

export default Find_Us;