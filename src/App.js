import './App.css';
import { GlobalProvider } from './Context/GlobalState';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Home} from './components/Home';
import {Edit} from './components/Edit';
import {Add} from './components/Add'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div style={{maxWidth:'30rem', margin: "4rem auto" }}>
      <GlobalProvider>
      <Router>
        <Switch>
        <Route exact path ='/' component={Home}/>
         <Route exact path ='/Add' component={Add}/>
        <Route exact path ='/Edit/:id' component ={Edit}/>
        </Switch>
      </Router>

      </GlobalProvider>
    </div>
  );
}
export default App;
