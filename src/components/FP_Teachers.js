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
       if (loading) return <li>Loading...</li>
       if (error) return <li>Error:</li>
       return data.teachers.filter(teacher => teacher[this.props.classes]).map(({theirPhoto,tango, modern,belly, wedding, salsa, hiphop, swing, teacherName, id }) => (
        
        <ul key={id} className='headshot_list'>
        <li className='headshot_list_item'>
        <img key={id} src={`${theirPhoto.url}`}  className='headshot' onClick={e =>this.props.setBio(id)}/>
        <li className="fp_table_text" key={id} >{`${teacherName}`}</li>
        </li>
        </ul>
        
       ) ); 
    }}
    
    </Query>         

)
 }}

 export default FP_Teachers;