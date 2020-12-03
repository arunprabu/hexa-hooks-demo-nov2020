import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Hooks Demo</h1>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/about' component={About}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
