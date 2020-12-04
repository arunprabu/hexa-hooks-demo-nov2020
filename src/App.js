import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import { PageContext } from './PageContext';

function App() {

  // the data gonna be shared b/w home and about
  const userStatus = {
    isLoggedIn: true,
    lastLogin: '4/Dec/2020'
  }

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hooks Demo!</h1>
        <Switch>
          {/*  Step 2 of useContext: providing data to the home and about comps */}
          <PageContext.Provider value={userStatus}>
            <Route path='/' component={Home} exact />
            <Route path='/about' component={About} />
          </PageContext.Provider>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
