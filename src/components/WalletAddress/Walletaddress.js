import React from 'react'
import "./walletaddress.scss"
import { Link } from "react-router-dom";
const Walletaddress = () => {
    return (
        <>
            <section className='main-address'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-12 p-0'>
                            <div className='row'>
                                <div className='col-xl-6  m-auto p-0'>
                                    <div className='walletcard'>
                                        <h4>Wallet Address</h4>
                                        <p>0x4DC09253B3c5F238fb2256cB5e08085B7A09F52B</p>
                                    </div>
                                    <div className='parentaddress'>
                                        <div className='left'>
                                            <h4>Supply</h4>
                                            <p>2/10</p>
                                        </div>
                                        <div className='right'>
                                            <h4>Sale Status</h4>
                                            <p>Coming Soon</p>
                                        </div>
                                    </div>
                                    <div className='imagewallet'>
                                        <img src='\assestwallet\inner-card.svg' className='img-fluid' />
                                    </div>
                                    <Link to="/walletmint">
                                        <div className='mintbtn'>
                                            <button>Mint</button>
                                        </div>
                                    </Link>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Walletaddress