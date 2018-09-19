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
        if (this.state.bio === 'none'){
     this.setState({bio: e})
     console.log({e})
     console.log(this.state.bio)
        }
        else{
            this.setState({bio: 'none'})
        }
     
    }
    render(teachers){
    return(
 
        <Query query={Q_Instructors} variable={{teachers}}  >
        {({loading, error, data}) =>{
           if (loading) return <li>Loading...</li>
           if (error) return <li>Error:</li>
           return data.teachers.map(({theirPhoto,teacherBio,classesTaught, teacherName, id, teacher }) => (
            <li onClick={e =>this.addBio(id)}>
            <ul className={this.state.bio === id ? 'big_sub_list' : 'sub_list'}>
            <li><img src='./images/arrow.png' className={this.state.bio === id ? 'bio_arrow_down' : 'bio_arrow'}  
                onClick={e =>this.addBio(id)}/></li>
            
                <li key={id} className={this.state.bio === id ? 'instructor_rows_bio' : 'instructor_rows'}>
            
            <img key={id} src={`${theirPhoto.url}`} className={this.state.bio === id ? 'headshot_select' : 'headshot_small'} 
            onClick={e =>this.addBio(id)}/>
            </li>
            
            <li className={this.state.bio === id ? 'classes_taught_off' : 'classes_taught_on'} onClick={e =>this.addBio(id)}>
            {classesTaught}

           </li>
           <li className={this.state.bio === id ? 'small_bio_on' : 'small_bio_off'}  onClick={e =>this.addBio(id)}>
           {teacherBio}
           
           </li>
           </ul>
           
           </li>

        ) ); 
    }}
    
    </Query>         
 
     
        )

}}

export default Instructor_List;
