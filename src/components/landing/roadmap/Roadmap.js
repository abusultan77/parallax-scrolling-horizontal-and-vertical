import { useEffect } from 'react';
import './roadmap.scss';

export const Roadmap = () => {
  return (
    <>
      <section className="roadmap">
        <div class="container-fluid timeline">
          <div className="row">
            <div className="col-lg-10 col-md-12 col-sm-6 m-auto">
              <h1 class="timeline__heading">Roadmap:</h1>
              <div class="timeline__section">
                <div class="row timeline__point timeline__gutter flex-md-row-reverse wow bounceInUp mt-5">
                  <div class="col-md-6">
                    <div className="maindivcc">
                      <h2 class="timeline__title ">Q3, 2022:</h2>
                      <ul className="styledott timeline__text">
                        {' '}
                        <p class="">
                          <li className="liiisss">
                            Introduction of the tomi Mini Super Computer – MP1;
                          </li>
                          <li className="liiisss">
                            Launch of the tomi Pioneer Club – a first-ever active NFT (aNFT) club;
                          </li>
                          <li className="liiisss">
                            Introduction of tomi NFT – a first-ever active NFT (aNFT);
                          </li>
                          <li className="liiisss">
                            Introduction of the tomi Multichain Wallet;
                          </li>
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row timeline__point timeline__gutter wow bounceInUp mt-5">
                  <div class="col-md-6">
                    <div className="maindivcc">
                      <h2 class="timeline__title ">Q4, 2022:</h2>
                      <ul className="styledott timeline__text">
                        {' '}
                        <p class="">
                          <li className="liiisss">
                            Introduction of the Decentralized Cloud (D-Cloud);
                          </li>
                          <li className="liiisss">Launch of the tomi DAO;</li>
                          <li className="liiisss">
                            Launch of the tomi governance token;
                          </li>
                          <li className="liiisss">Launch of the tomi aNFT.</li>
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row timeline__point timeline__gutter flex-md-row-reverse wow bounceInUp mt-5">
                  <div class="col-md-6">
                    <div className="maindivcc">
                      <h2 class="timeline__title ">Q1, 2023:</h2>
                      <ul className="styledott timeline__text">
                        {' '}
                        <p class="">
                          <li className="liiisss">
                            Introduction of a Decentralized Domain Naming Service;
                          </li>
                          <li className="liiisss">
                            Launch of the tomi governance token in a centralized exchange;
                          </li>
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row timeline__point timeline__gutter wow bounceInUp mt-5">
                  <div class="col-md-6">
                    <div className="maindivcc">
                      <h2 class="timeline__title ">Q4, 2022:</h2>
                      <ul className="styledott timeline__text">
                        {' '}
                        <p class="">
                          <li className="liiisss">
                            Introduction of the tomi Super Computer.
                          </li>
                          <li className="liiisss">
                            {' '}
                            Introduction of “Project: Codename Gotham”.
                          </li>
                        </p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Roadmap;
