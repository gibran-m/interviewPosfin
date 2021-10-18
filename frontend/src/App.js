import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Header from './index/Header.js';
import Main from './index/Main.js';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
