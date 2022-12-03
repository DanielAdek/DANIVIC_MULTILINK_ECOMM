import './App.css';

import { Fragment } from 'react';
import { LoginPage } from './pages/login.page';
import { SignupAuthentication } from '../src/pages/signup.page';

function App() {
  return (
    // <Fragment>
    //   <LoginPage />
    // </Fragment

    <Fragment>
      <SignupAuthentication />
    </Fragment>
  );
};


export default App;
