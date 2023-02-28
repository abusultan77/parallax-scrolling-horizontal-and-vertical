import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { useWeb3React } from "@web3-react/core";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import useAuth from "../../../hooks/useAuth";
import { useHistory } from "react-router-dom";

// });
const Navbar = ({ setIndexxxx }) => {
  const AllowedUsers = localStorage.getItem("UserAllowed");
  console.log("allowed user", AllowedUsers);
  const [stickyClass, setStickyClass] = useState(false);
  const Token = localStorage.getItem("AccessToken");
  const history = useHistory();
  const [toggle, setToggle] = useState();
  const [idelem, setidelem] = useState("629880b29f10584b3b3b341f");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [closee, setClosee] = useState(true);

  const { account } = useWeb3React();
  const { login, logout } = useAuth();

  const closeee = () => {
    // console.log(abc,'121');
    window.$("#exampleModalwallet1").modal("hide");
    window.$("#exampleModalwallet").modal("hide");
    handleClose();
  };
  const closeoff = () => {
    // console.log(abc,'121');
    window.$("#offcanvasTop").modal("toggle");
    handleClose();
  };

  // meta trust wallet Connections
  const trustWallet = async () => {
    localStorage.setItem("flag", "true");
    localStorage.setItem("connectorId", "walletconnect");
    if (account) {
      logout();
    } else {
      login("walletconnect");
      handleClose();
    }
  };
  const connectMetaMask1 = () => {
    localStorage.setItem("connectorId", "injected");
    localStorage.setItem("flag", "true");
    if (account) {
      logout();
    } else {
      login("injected");

      handleClose();
    }
  };
  const disconnect = () => {
    localStorage.setItem("flag", "false");
    logout();
  };

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const openbuttonss = () => {
    setToggle(true);
  };

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      console.log("windowscroll", windowHeight);
      windowHeight > 20 ? setStickyClass(true) : setStickyClass(false);
    }
  };

  return (
    <>
      <section className={stickyClass ? "main-navbar-mobile" : "main-navbar"}>
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-11 col-lg-11 m-auto ">
              <nav className="navbar  navbar-expand-xl ">
                <a href="#" className="navbar-brand sdvgdvsdhvd">
                  <img
                    src="\tomilogo.svg"
                    alt="img"
                    className="img-fluid gcsgcdgsdvcgc"
                  />
                </a>
                <div className="ahsbahsba">
                  <img src="\tomilogo.svg" alt="img" className="img-fluid" />
                </div>
                <button
                  onClick={openbuttonss}
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-bs-controls="navbarSupportedContent"
                  aria-bs-expanded="false"
                  aria-bs-label="Toggle navigation"
                >
                  <span className="togg">
                    <i class="fas fa-bars"></i>
                  </span>
                </button>
                <div
                  className="collapse navbar-collapse marg"
                  id="navbarSupportedContent"
                  style={{ justifyContent: "space-between" }}
                >
                  <ul className="navbar-nav mr-auto">
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        Browser
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        tDNS
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        tomiDAO
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        ArtDAO
                      </NavLink>
                    </li>
                    <li class="nav-item">
                      <NavLink to="/home" className="nav-link">
                        Pioneers
                      </NavLink>
                    </li>

                    <NavLink to="/home" className="nav-link">
                      Nodes
                    </NavLink>
                    <li className="nav-item">
                      <a href="https://pioneer.tomi.com/" className="nav-link">
                        tomiPay
                      </a>
                    </li>
                    {/* <NavLink to="/home" className="nav-link">
                        Home
                      </NavLink> */}

                    <li class="nav-item dropdown"></li>
                  </ul>
                  <div className="shdvs"></div>
                </div>
                {account ? (
                  <div className="butn-nav">
                    <button className="w-connect-button" onClick={disconnect}>
                      Disconnect
                    </button>
                  </div>
                ) : (
                  <button className="w-connect-button" onClick={handleShow}>
                    CONNECT WALLET
                  </button>
                )}
                {/* <button className="w-connect-button">Connect Wallet</button> */}
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <Modal className="new-modal-wallet" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center d-block w-100 yytdtyyt">
              {" "}
              Connect your Wallet
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="button-modal1 d-flex">
              <button
                className="modal-button display-mb"
                onClick={connectMetaMask1}
              >
                <img src="\metaa.svg" className="img-fluid" />

                <h3 className=""> MetaMask</h3>
                <p className="">Connect to your MetaMask wallet </p>
              </button>
              <button className="modal-button" onClick={trustWallet}>
                <img src="\walletconnect.svg" className="img-fluid" />
                <h3 className="">WalletConnect</h3>
                <p className="">Scan with WalletConnect to Connect </p>
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
