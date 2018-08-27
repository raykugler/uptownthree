import React from 'react';
import { Query } from 'react-apollo';
import Q_Instructors from './Q_Instructors';

class FP_Instructors_List extends React.Component{
    constructor(props){
        super(props)
        this.state={
            bio: 'none'
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
           if (loading) return <td>Loading...</td>
           if (error) return <td>Error:</td>
           return data.teachers.map(({theirPhoto,teacherBio,classesTaught, teacherName, id, teacher }) => (
            
            <td key={id} className='fp_headshot_td'>
            
            <img key={id} src={`${theirPhoto.url}`} className='fp_headshot_small'/>
            
            
            <a className='fp_small_bio_on'>{teacherBio}</a>
            </td>
            ))
}}
</Query>
    )
}}

export default FP_Instructors_List;