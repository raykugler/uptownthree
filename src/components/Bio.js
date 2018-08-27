import React from 'react';
import PropTypes from 'prop-types';
import Q_Instructors from './Q_Instructors';
import { Query } from 'react-apollo';


class Bio extends React.Component {
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


    
    <div  className='bio' key={id}>
    {id === this.props.instructor ? (
    <div className='bio_data'>
        <p className='bio_name'>{`${teacherName}`} </p>
        <p className='bio_text'>{`${teacherBio}`}</p> 
</div>) : null}
    </div>));
        }}
        </Query>)};}

    export default Bio;
    Bio.propTypes = {instructor:  PropTypes.string.isRequired};
