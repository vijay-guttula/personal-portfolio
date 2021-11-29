import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/About Me/AboutMe';
import Resume from './components/Resume/Resume';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container'></div>
        <Switch>
          <Route exact path='/' component={AboutMe}>
            <AboutMe />
          </Route>
          <Route path='/resume' component={Resume}>
            <Resume />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
