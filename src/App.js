import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Read from './components/Read'
import Shop from './components/Shop'
import Stores from './components/Stores'
import Search from './components/Search'




class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null,
    }
  }

  componentDidMount() {
    fetch("https://cat-fact.herokuapp.com/facts")
      .then(response => response.json())
      .then(data => console.log(data));
  }


  render() {
    return (
      <Router>
        <div>
         
          <nav>
            <ul>
              <li>
                <Link to="/">Shop</Link>
              </li>
              <li>
                <Link to="/read">Read</Link>
              </li>
              <li>
                <Link to="/stores">Stores</Link>
              </li>
              <li>
                <Link to="/search">Search</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/about" component={Read} />
            <Route path="/users" component={Shop} />
            <Route path="/about" component={Stores} />
            <Route path="/about" component={Search} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;