
import React from "react";
import "./profile.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Profile = () => {
  return (
    <>
      {/* <Navbar /> */}
      <section className="main-profile ">
        <div className="profile_background">

        </div>
        <div className="container-fluid">
          <div className="row">
            <div className=" col-xl-10 col-lg-10 col-md-12 col-sm-12 m-auto">
              <div className="main_profilecard">
                <div className="iner_profile">
                  <a class="">
                    <img src="\avatarpro.svg" alt="" className="logoimggpro" /></a>
                  <div className="profilemainn">

                    <h4 className="name_heading">
                      Daniel Guzman
                    </h4>
                    <p className="copy_data" >
                      0x2E2463B0D768FF8E14D0...56F43 <img src="\copy.svg" alt="" className="logoimggpccro" />
                    </p>
                    <p className="profile_para" >
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br></br>accusantium doloremque laudantium, totam rem aperiam,<br></br> eaque ipsa quae ab illo inventore veritatis et quasi.
                    </p>
                  </div>
                </div>
                <div className="right_icons">

                  <ul className="list-inline">
                    <li className="list-inline-item "><a href="">  <img src="\telegrm.svg" alt="" className="" /></a></li>
                    <li className="list-inline-item "><a class=""><img src="\twitrr.svg" alt="" className="" /></a></li>
                    <li className="list-inline-item "><a class=""><img src="\instgrm.svg" alt="" className="" /></a></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
