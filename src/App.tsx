import { Route, Switch } from 'react-router';
import LoginComponent from './component/LoginComponent';
import ShapesPage from './pages/ShapePage';


const App = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={LoginComponent} />
    <Route path="/shapes" component={ShapesPage} />
    <Route path="*" component={LoginComponent} />
  </Switch>
)

export default App;
