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
        <Switch>
          <Route exact path="/">
            <MenuBar></MenuBar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/home">
            <MenuBar></MenuBar>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route exact path="/about">
            <MenuBar></MenuBar>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route exact path="/courses">
            <MenuBar></MenuBar>
            <Courses></Courses>
            <Footer></Footer>
          </Route>
          <Route exact path="/contact">
            <MenuBar></MenuBar>
            <Contact></Contact>
            <Footer></Footer>
          </Route>
          <Route path="/*">
            <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
