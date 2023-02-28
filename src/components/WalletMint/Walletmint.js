import React from 'react'
import "./walletmint.scss"

const Walletmint = () => {

    return (
        <>
            <section className='main-mint'>
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
                                            <h4>Price</h4>
                                            <p>0.45 ETH</p>
                                        </div>
                                        <div className='center'>
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
                                    <div className='pricecard'>
                                        <h4>Total price: 0.02 ETH</h4>
                                    </div>
                                    <div className="counter">
                                        <div className="btn__container">
                                            <button className="control__btn">-</button>
                                            <button className="reset">1</button>
                                            <button className="control__btn" >+</button>

                                        </div>
                                    </div>
                                    <div className='mintbtn'>
                                        <button className='' data-toggle="modal" data-target="#exampleModal">Mint</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='mint-modal'>
                <div className='row'>
                    <div className='col-sm-12'>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div className='head'>
                                        <h5 class="modal-title" id="exampleModalLabel">Minting</h5>
                                        <a type="a" class="close" data-dismiss="modal" aria-label="Close">
                                            <img src='\assestwallet\entypo_cross.svg' className='img-fluid'/>
                                        </a>
                                        </div>
                                 <div className='ticksquare'>
                                    <img src='\assestwallet\tick-square.svg' className='img-fluid'/>
                                 </div>
                                 <div className='para'>
                                    <p>Minted Successfully</p>
                                 </div>
                                 <div className='donebtn'>
                                    <button>Done</button>
                                 </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Walletmint