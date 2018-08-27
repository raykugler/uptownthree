import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';

class FP_Teachers extends React.Component{
    constructor(props){
        super(props)
   
}
    



 render(teachers){
     return(
    <Query query={Q_Instructors} variable={{teachers}}  >
    {({loading, error, data}) =>{
       if (loading) return <td>Loading...</td>
       if (error) return <td>Error:</td>
       return data.teachers.filter(teacher => teacher[this.props.classes]).map(({theirPhoto,tango, modern,belly, wedding, salsa, hiphop, swing, teacherName, id }) => (
        
        <td key={id}>
        <img key={id} src={`${theirPhoto.url}`}  className='headshot' onClick={e =>this.props.setBio(id)}/>
        </td>
        
       ) ); 
    }}
    
    </Query>         

)
 }}

 export default FP_Teachers;