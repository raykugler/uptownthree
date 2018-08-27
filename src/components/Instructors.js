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
    <div className='instructors_page'>
    <div className='instructors'>
    <table className='instructor_table' cellSpacing="0">
    <thead>
    <tr className='table_head'><td colSpan="2" className="instructors_style_head">Instructors</td></tr>
    </thead>
    <tbody>

    <Instructor_List />
    </tbody>
    
    </table>
    <Typekit kitId="sim6twb" /> 
    <Small_Menu />
    </div>
    
    </div>
    </ApolloProvider>
);

}};

export default Instructors;

