import "./App.css";
import { useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductScreen from "./screens/ProductScreen";
import Navbar from "./components/Navbar";
import Backdrop from "./components/Backdrop";
import SideDrawer from "./components/SideDrawer";

function App() {

  const [ slideToggle, setSlideToggle ] = useState(false);

  return (
    <Router>
      <div className="app">
        <Navbar click={() => setSlideToggle(true)} />
        <Backdrop click={() => setSlideToggle(false)} show={slideToggle} />
        <SideDrawer show={slideToggle} click={() => setSlideToggle(false)} />
        <main>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/product/:id" component={ProductScreen} />
            <Route exact path="/cart" component={CartScreen} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
