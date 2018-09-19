import React from 'react';
import Typekit from 'react-typekit';
import Modal from 'react-modal';
import Salsa from './Salsa';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Dance_Styles from './Dance_Styles';



class Style_Modal extends React.Component{
    constructor(props){
        super(props)
    }

 render(){
     return(
         
         <Dance_Styles style_decision={this.props.style_decision} close={this.props.close} />
          )

 }   
}

export default Style_Modal;