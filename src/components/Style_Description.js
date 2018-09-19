import React from 'react';
import { Query, renderToStringWithData } from 'react-apollo';
import Q_Description from './Q_Description';

class Style_Description extends React.Component{
    constructor(props){
        super(props)
        this.state={
            classChoice: 'none',
        }
    }
 


    
render(classDescriptions){
    return(    <Query query={Q_Description} variable={{classDescriptions}}>
    {({loading, error, data}) =>{
    if (loading) return <li>Loading...</li>
    if (error) return <li>Error:</li>
       return  data.classDescriptions.filter(classDescription => classDescription[this.props.classes]).map(({theDescription, classStyle, id}) =>(
      
        <li  key={id} className='description'>
            {`${theDescription}`} 
        </li>

       ));
    
    }}
   
    </Query>
         
    )
}}
    export default Style_Description;
