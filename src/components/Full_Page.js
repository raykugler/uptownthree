
import React from 'react';
import Hero_FP from './Hero_FP';
import Instructor_FP from './Instructor_FP';
import FP_Dance_List from './FP_Dance_List';
import FP_Footer from './FP_Footer';
import FP_Menu from './FP_Menu';


class Full_Page extends React.Component{
    constructor(props){
        super(props)
       }
       footer=()=>{
        const footer = document.getElementById("footer");
        footer.scrollIntoView({behavior: "smooth"});
       }
       styles=()=>{
        const styles = document.getElementById("styles");
        styles.scrollIntoView({behavior: "smooth"});
       }
       teachers=()=>{
        const teachers = document.getElementById("teachers");
        teachers.scrollIntoView({behavior: "smooth"});
       }

       toTop=()=>{
        const menu = document.getElementById("menu");
        menu.scrollIntoView({behavior: "smooth"});
       }


       render(){
    return(
        <div className='full_page'>
        <FP_Menu footer={this.footer} teachers={this.teachers} styles={this.styles}/> 
        <Hero_FP />
        <Instructor_FP />
        <FP_Dance_List />
        <FP_Footer />
        <img src='images/top_button.png' className='topbutton' onClick={this.toTop}/>
        </div>
    )
}


}

export default Full_Page;