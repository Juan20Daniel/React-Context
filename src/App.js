import Home from './pages/Home';
import Admin from './pages/Admin';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { UserProvider } from './Context/user-context';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route  path="/admin" exact component={Admin} />
        </Switch>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
