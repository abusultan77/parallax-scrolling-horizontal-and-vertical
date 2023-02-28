import "./App.scss";
import Landing from "./components/landing/Landing.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/landing/footer/Footer.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Profile from "./components/mainprofile/Profile";
import Walletaddress from "./components/WalletAddress/Walletaddress";
import Walletmint from "./components/WalletMint/Walletmint";
import useEagerConnect from "./hooks/useEagerConnect";

function App() {
  useEagerConnect();
  return (
    <>
      <ToastContainer style={{ fontSize: 20 }} />
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/mainprofile" component={Profile} />
          <Route exact path="/walletaddress" component={Walletaddress} />
          <Route exact path="/walletmint" component={Walletmint} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
