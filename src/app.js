//three steps to using npm modules. 1.Install 2.Import 3.Use
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route , Switch,  Link} from 'react-router-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Main from './components/Main';
import Dance_Styles from './components/Dance_Styles';
import Instructors from './components/Instructors';
import Find_Us from './components/Find_Us';

const routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={Main} exact={true}/>
    <Route path='/dance_styles' component={Dance_Styles}/>
    <Route path='/teachers' component={Instructors}/>
    <Route path='/findus' component={Find_Us}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render( routes, document.getElementById('app'));





