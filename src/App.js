import { Route } from 'react-router';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { SignIn } from './pages/sign-in';
import { SignUp } from './pages/sign-up';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact>
            <SignIn />
          </Route>
          <Route path='/sign-up'>
            <SignUp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
