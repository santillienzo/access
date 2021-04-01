import './App.css';

import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import We from './components/we/We'
import Services from './components/service/Services'
import Contact from './components/contact/Contact'

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/all.js';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <We/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default App;
