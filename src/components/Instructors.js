import React from 'react';

import Instructor_List from './Instructor_List';

import Typekit from 'react-typekit';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import Small_Menu from './Small_Menu';


const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });


class Instructors extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    return(
        <ApolloProvider client={client}>  
    <nav className='instructors_page'>
    <div className='instructors'>
    <p className='table_head inst_text'>Instructors </p>
    
    <ul className='instructor_list' cellSpacing="0">
    

    <Instructor_List />
    
    </ul>
    <Typekit kitId="sim6twb" /> 
    </div>
    
    </nav>
    </ApolloProvider>
);

}};

export default Instructors;

