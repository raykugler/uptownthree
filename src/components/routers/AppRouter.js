import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';
import Dance_App from '../DanceApp';
import 'normalize.css/normalize.css';
import '../../styles/styles.scss';
import Main from '../Main';
import Dance_Styles from '../Dance_Styles';
import HipHop from '../HipHop';
import Salsa from '../Salsa';
import Wedding from '../Wedding';
import Modern from '../Modern';
import Swing from '../Swing';
import Belly from '../Belly';
import Instructors from '../Instructors';
import Find_Us from '../Find_Us';

const Routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    <Route path='/teachers' component={Instructors}/>
    <Route path='/findus' component={Instructors}/>
   
    </div>
  </BrowserRouter>
);

export default Routes;