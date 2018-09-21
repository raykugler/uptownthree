import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';

class FP_Teacher_Name extends React.Component{
    constructor(props){
      super(props)
    }
 
 render(teachers){
   return( 
   <Query query={Q_Instructors} variable={{teachers}}>
     {({loading, error, data}) =>{
        if (loading) return <li>Loading...</li>
        if (error) return <li>Error:</li>
        return data.teachers.filter(teacher => teacher[this.props.classes]).map(({theirPhoto,tango, modern,belly, wedding, salsa, hiphop, swing, teacherName, id }) => (
         <ul className='teacher_name_list'>
          <li className="fp_table_text" key={id} >{`${teacherName}`}</li>
          </ul>
        ));
     }}
     </Query>   

    )
   }}
 
     export default FP_Teacher_Name;