import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';


 
 class Teacher_Name extends React.Component{
   constructor(props){
     super(props)
   }

render(teachers){
  return( 
  <Query query={Q_Instructors} variable={{teachers}}>
    {({loading, error, data}) =>{
       if (loading) return <td>Loading...</td>
       if (error) return <td>Error:</td>
       return data.teachers.filter(teacher => teacher[this.props.classes]).map(({theirPhoto,tango, modern,belly, wedding, salsa, hiphop, swing, teacherName, id }) => (
        <td className="table_text" key={id}>{`${teacherName}`}</td>
      ));
    }}
    </Query>   
    )
  }}

    export default Teacher_Name;