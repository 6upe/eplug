import './App.css';
import { MainPage } from './components/Home/MainPage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AppBarComponent from './components/Home/Sections/AppBarComponent'
import {AllProducts} from './components/Home/AllProducts';
import AdminDashboard from './components/Admin/AdminDashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppBarComponent></AppBarComponent>
      <Switch>
        <Route exact path="/">
          <MainPage></MainPage>
        </Route>
        <Route  path="/signin">
          <SignIn></SignIn>
        </Route>
        <Route path="/signup">
          <SignUp></SignUp>
        </Route>
        <Route  path="/allproducts">
          <AllProducts></AllProducts>
        </Route>
        <Route  path="/admin">
          <AdminDashboard></AdminDashboard>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
