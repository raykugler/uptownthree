import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';


class Instructor_List extends React.Component {
    constructor(props){
        super(props)
        this.state={
            bio:'none'
   
        }
    }
    addBio=(e)=>{
     this.setState({bio: e})
     console.log({e})
     console.log(this.state.bio)
     
    }
    render(teachers){
    return(
 
        <Query query={Q_Instructors} variable={{teachers}}  >
        {({loading, error, data}) =>{
           if (loading) return <tr><td>Loading...</td></tr>
           if (error) return <tr><td>Error:</td></tr>
           return data.teachers.map(({theirPhoto,teacherBio,classesTaught, teacherName, id, teacher }) => (
            <tr key={id} className={this.state.bio === id ? 'instructor_rows_bio' : 'instructor_rows'}>
            <td className='headshot_td'>
            <img key={id} src={`${theirPhoto.url}`} className={this.state.bio === id ? 'headshot_select' : 'headshot_small'} onClick={e =>this.addBio(id)}/>
            </td>
            <td className={this.state.bio === id ? 'classes_taught_off' : 'classes_taught_on'} onClick={e =>this.addBio(id)}>
            {classesTaught}

           </td>
           <td className={this.state.bio === id ? 'small_bio_on' : 'small_bio_off'}>
           {teacherBio}
           </td>
        
            </tr>
        ) ); 
    }}
    
    </Query>         
 
     
        )

}}

export default Instructor_List;
