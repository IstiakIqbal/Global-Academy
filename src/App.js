import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MenuBar from './Component/MenuBar/MenuBar';
import Footer from './Component/Footer/Footer';
import Error from './Component/Error/Error';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Courses from './Component/Courses/Courses';
import Contact from './Component/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <MenuBar></MenuBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
