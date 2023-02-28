import React, { useState, useEffect } from "react";
import "./banner.scss";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { useWeb3React } from "@web3-react/core";

import axios from "axios";



const Banner = () => {

  return (
    <>
      <section className="main-banner ">
        <div className="container-fluid p-0">
          <div className="row">
            <div className=" col-12 p-0 m-auto">
              <main>
                <section class="section-background parallax">
                  <h2>Desert</h2>
                </section>
                <section class="text-bloc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                </section>
                <section class="section-background parallax1">
                  <h2>Mountain</h2>
                </section>

                <section class="text-bloc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis minima fuga debitis quasi eius aliquid sapiente? Cumque blanditiis quibusdam, ex totam aliquam provident alias culpa, sit illo, eum doloribus doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reprehenderit voluptatum aperiam pariatur numquam praesentium recusandae, ipsa at iusto eveniet, distinctio sunt dolore nemo veniam maiores vitae deserunt cum ducimus.</p>
                </section>

                <section class="section-background parallax2">
                  <h2>Sea</h2>
                </section>
                <section class="section-background parallax3">
                  <h2>Galaxy</h2>
                </section>
              </main>

            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Banner;
