import gql from 'graphql-tag';

const Q_Instructors =  gql`
{        
    teachers    
         
   {  			
           id
           teacherName
                 salsa
                 belly
                 tango
                 swing
                 hipHop
                 wedding
                 modern
                 classesTaught
     theirPhoto {
             url
             
           }
           teacherBio
   }             
       }
`;


export default Q_Instructors;


/*export default Teachers;

gql`
    {
          teachers (where:{
              tango: true
          })
              {
            classTime
            classStyle
            teacherName
            id
            theirPhoto {
              url
            }
        
      
            
      
        }
      }
`*/