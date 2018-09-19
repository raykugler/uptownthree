import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';
import ApolloClient from 'apollo-boost';
const client = new ApolloClient({
    uri: "https://api-uswest.graphcms.com/v1/cjkb8en5w1x2j01d2buf11dvk/master"
  });
class Teachers extends React.Component{
    constructor(props){
        super(props)
   
}
    

 render(teachers){
     return(
    <Query query={Q_Instructors} variable={{teachers}}  >
    {({loading, error, data}) =>{
       if (loading) return <li>Loading...</li>
       if (error) return <li>Error:</li>
       return data.teachers.filter(teacher => teacher[this.props.classes]).map(({theirPhoto, teacherName, id }) => (
        
        <li key={id} className='headshot_li table_text'>

        <img key={id} src={`${theirPhoto.url}`}  className='headshot' onClick={e =>this.props.setBio(id)}/>
        
        {`${teacherName}`}
        </li>
       ) ); 
    }}
    
    </Query>         

)
 }}

 export default Teachers;