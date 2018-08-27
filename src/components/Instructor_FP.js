import React from 'react';
import Typekit from 'react-typekit';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import FP_Instructors_List from './FP_Instructors_List';
import FP_Teacher_Name from './FP_Teacher_Name';

const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });


class Instructor_FP extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <ApolloProvider client={client}>
            <div className='instructor_fp' id='teachers'>
            <p className='instructors_fp_style'>Instructors</p>
            <table className='fp_instructor_table' cellSpacing="0">
    <thead>
    </thead>
    <tbody>
    <tr>
    <FP_Instructors_List />
    
    
    <FP_Teacher_Name />
    </tr>
    </tbody>
            </table>
            <Typekit kitId="sim6twb" /> 
            </div>
            </ApolloProvider>
        )}}


export default Instructor_FP;