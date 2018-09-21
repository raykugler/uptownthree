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
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
           return data.teachers.map(({theirPhoto,teacherBio,classesTaught, teacherName, id, teacher }) => (
            
            <ul key={id} className='fp_headshot_td'>
            <li>
            <img key={id} src={`${theirPhoto.url}`} className='fp_headshot_small'/>
            </li>                
            <li>
            <a className='fp_small_bio_on'>{teacherBio}</a>
            </li>
            </ul>
            ))
}}
</Query>
    )
}}

export default FP_Instructors_List;