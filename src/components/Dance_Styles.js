import React from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import Dance_Styles_List from './Dance_Styles_List';

const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });

class Dance_Styles extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){
    return(
    <ApolloProvider client={client}>    
    <div>
    
    <Dance_Styles_List />
  
        
    </div>
    </ApolloProvider>
    );
};}

export default Dance_Styles;

/*

<img src={'/images/one_screen.jpg'}className='block style_image_one_screen'/>
    
class Dance_Styles extends React.Component {
    state = { 
           condition: false 
         };
     handleClick= ()=> {
       this.setState(()=>({condition: !this.state.condition}));
     }
  render(){
      
    <img src={'/images/dance_images/salsa.jpg'}className='block style_image_one'/>
        <img src={'/images/one_screen.jpg'}className='block style_image_one_screen'/>
        
    
    */