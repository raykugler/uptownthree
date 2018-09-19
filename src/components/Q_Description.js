
import gql from 'graphql-tag';

const Q_Describe = gql`
 {        
    classDescriptions
    {
      classStyle
      theDescription
      id
      tango
      belly
      salsa
      hipHop
      wedding
      modern
      swing
    }}
    `;



export default Q_Describe;