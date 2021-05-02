import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';
import AccountPage from './pages/account-page';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/cursor-homework22/' exact>
            <SignIn />
          </Route>
          <Route path='/cursor-homework22/sign-up'>
            <SignUp />
          </Route>
          <Route>
            <AccountPage path='/cursor-homework22/account-page' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
