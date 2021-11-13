import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './containers/Header';
import productListing from './containers/ProductListing';
import productDetail from './containers/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Switch>
            <Route path="/" exact component={productListing} />
            <Route path="/product/:productId" exact component={productDetail} />
            <Route>404 Not Found !</Route>
          </Switch>
      </Router>
      
    </div>
  );
}

export default App;
 