import React from 'react';
import Q_Instructors from './Q_Instructors';
import { Query } from 'react-apollo';


class FP_Bio extends React.Component {
    constructor(props){
        super(props)
       
    }
    

render(teachers){
return(
    <Query query={Q_Instructors} variable={{teachers}}>
    {({loading, error, data}) =>{
        if (loading) return <p>Loading...</p>
        if (error) return <p>Error:</p>
        return data.teachers.map(({ theirPhoto,teacherBio, teacherName, id }) => (


    
    <div  className='fp_bio' key={id}>
    {id === this.props.instructor ? (
    <div className='fp_bio_data'>
        <p className='fp_bio_name'>{`${teacherName}`} </p>
        <p className='fp_bio_text'>{`${teacherBio}`}</p> 
</div>) : null}
    </div>));
        }}
        </Query>)};}

    export default FP_Bio;
