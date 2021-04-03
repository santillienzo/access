import './App.css';

import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import We from './components/we/We'
import Services from './components/service/Services'
import Contact from './components/contact/Contact'
import Location from './components/contact/Location'
import Product from './components/productos/Product'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <Nav/>  
        <Switch>

          <Route exact path="/">
            <Home/>
            <We/>
            <Services/>
            <Contact/>
            <Location/>
          </Route>
          
          <Route path="/productos">
            <Product/>
          </Route>

          <Route path="/noticias">

          </Route>

        </Switch>
      </Router>



      
    </div>
  );
}

export default App;
