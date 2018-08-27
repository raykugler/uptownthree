import React from 'react';
import FP_Dance_Styles from './FP_Dance_Styles';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';


const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });

class FP_Dance_List extends React.Component{
    constructor(props){
        super(props);
    }

render(){
    return(
        <ApolloProvider client={client}>
        <div className='fp_dance_styles' id='styles'>
        <FP_Dance_Styles />
        </div>
        </ApolloProvider>
    )}
}

export default FP_Dance_List