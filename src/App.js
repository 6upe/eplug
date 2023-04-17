import './App.css';
import { MainPage } from './components/Home/MainPage';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import AppBarComponent from './components/Home/Sections/AppBarComponent'
import {AllProducts} from './components/Home/AllProducts';
import AdminDashboard from './components/Admin/AdminDashboard'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ImageUploader from './components/Admin/ImageUploader';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <AppBarComponent></AppBarComponent>
          <MainPage></MainPage>
        </Route>
        <Route exact path="/:userId">
          <MainPage></MainPage>
        </Route>
        <Route exact path="/auth/signin">
          <AppBarComponent></AppBarComponent>
          <SignIn></SignIn>
        </Route>
        <Route path="/auth/signup">
          <AppBarComponent></AppBarComponent>
          <SignUp></SignUp>
        </Route>
        <Route exact path="/signin/admin">
          <AppBarComponent></AppBarComponent>
          <AdminDashboard></AdminDashboard>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
