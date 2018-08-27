import React from 'react';
import { Query, renderToStringWithData } from 'react-apollo';
import Q_Describe from './Q_Description';

class Style_Description extends React.Component{
    constructor(props){
        super(props)
    }
    
render(classDescriptions){
    return(    <Query query={Q_Describe} variable={{classDescriptions}}>
    {({loading, error, data}) =>{
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error:</p>
       return  data.classDescriptions.map(({theDescription, classStyle, id}) =>(
      <div  key={id} className='description'>{classStyle === this.props.style ? (

        <p >
        
            {`${theDescription}`} 
    </p>):null}
 
 </div> )  
       );
    
    }}
   
    </Query>
         
    );
}}
    export default Style_Description;