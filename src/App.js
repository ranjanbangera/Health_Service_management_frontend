import "./App.css";
import Nav from "./component/nav";
import Home from "./component/home";
import Register from "./component/register";
import Finance from "./component/Finance/finance";
import UpdateBill from "./component/Finance/updateBill";
import AddBill from "./component/Finance/addBill";
import PageNotFound from "./component/pagenotfound";
import Counter from "./component/counter";
import { Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://www.txmgroup.com/wp-content/uploads/2018/10/Healthcare.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Nav />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/finance/update/:bId" component={UpdateBill} />
        <Route path="/finance/add" component={AddBill} />
        <Route path="/finance" component={Finance} />
        <Route path="/counter" component={Counter} />
        <Redirect exact path="/" to="/home" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}
export default App;
