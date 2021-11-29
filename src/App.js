import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/About Me/AboutMe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='container'></div>
      <Router>
        <Switch>
          <Route path='/' component={AboutMe}>
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
