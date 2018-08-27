import React from 'react';
import Typekit from 'react-typekit';
//import ShowMenu from './Show_Menu';
import Menu from './Menu';

import Cover from './Cover';
import Full_Page from './Full_Page';
import Media from 'react-media';



const Main =(props)=> {
   
     return(
<div>
<Media query="(min-width: 600px)">
{matches => 
    matches ? (
<Full_Page />
    ) : (
<div>
        <Cover />            
        <Menu />
</div>
    )
}
    </Media>
</div>
   
     );
 }
     
     export default Main;

    

//     <div className="menu_block">
  //   <div className={props.condition ? 'grey_bar' : 'blue_bar'}>
//    </div>    
// </div>
    













/*const Main = (props) =>{
    return(
 
    <div className='main'>
    <div className="menu_block">
    <div className="grey_bar">
    </div>
    </div>
    <input type='image' src={'/images/Hamburger_icon.svg.png'} className='hamburger' onClick={ShowMenu}/>
   <img src={'/images/mainw_omenuflat.png'} className='main_image'/>
    <p className='main_title'>Uptown <br/>   Dance</p>
    <Typekit kitId="sim6twb" />
    
 
    </div>
);

};

export default Main;

*/