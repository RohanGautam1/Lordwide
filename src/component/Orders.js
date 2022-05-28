import React from "react"
import Sidebar from "./Sidebar";
import '../App.css';




function Orders() {

    return (
        <>

            <div className=" mt-1 d-flex flex-wrap">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-7 d-flex flex-column flex-wrap ">
                    <div className="orders-row-1 ">

                        {/* _________________Navbar__________________ */}

                        <nav className="navbar navbar-light  ">
                            <div className="container-fluid">
                                <div className="d-flex flex-column "> <h1>Orders</h1>
                                    <p className="hello-pizzeria mt-0">Hello Pizzeria Italiana, welcome back</p>
                                    <span className="d-flex justify-content-center align-items-center below-one-order mt-4" >Orders</span>

                                </div>
                                <form >
                                    <input className="form-control rounded-pill" type="search" placeholder="Search everything.." aria-label="Search" />

                                </form>
                            </div>
                        </nav>
                        {/* _________________Navbar Ends__________________ */}

                    </div>
                    <div className=" orders-row-2 ">
                        <div className="ml-4 mt-4"><p className="ongoing-orders"> 4 Ongoing Orders</p></div>
                        <div className="">
                            <div className="m-4 d-flex flex-wrap">

                                <div className="card m-2 card-set ">
                                    <div className="card-body d-flex align-items-center flex-column">
                                        <div className="d-flex justify-content-center"> <button type="button " className="btn rounded-pill tablebutton mt-1">Table 6</button></div>

                                        <div > <button type="button " className="btn rounded-pill inprogress-button mt-1">in Progress</button><span className="ml-5 three-dot">•••</span></div>
                                        <div className="d-flex justify-content-start align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-4" >Caramel cake with beries</span><span className="d-flex justify-content-center align-items-center side-text mt-4 ml-3">1</span></div>
                                        <div className="d-flex justify-content-start align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-2" >Chocolate cake with cherries</span><span className="d-flex justify-content-center align-items-center side-text mt-2 ml-3">3</span></div>

                                        <div className="mt-5 d-flex ">
                                            <div><p className="total-price">Total Price &nbsp;</p><p className="dollor-text"> &nbsp;27.99$</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price "> &nbsp; Payment Method &nbsp;</p> <p className="dollor-text">&nbsp;Credit Card</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price"> &nbsp; Time Wait</p> <p className="dollor-text">&nbsp; 27.99$</p></div>



                                        </div>

                                    </div>
                                </div>

                                <div className="card m-2 card-set ">
                                    <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                        <div> <button type="button " className="btn rounded-pill tablebutton mt-1">Table 2</button></div>

                                        <div > <button type="button " className="btn rounded-pill completed-button mt-1">Completed</button><span className="ml-5 three-dot">•••</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-4" >Caramel cake with beries</span><span className="d-flex justify-content-center align-items-center side-text mt-4 ml-3">1</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-2" >Chocolate cake with cherries</span><span className="d-flex justify-content-center align-items-center side-text mt-2 ml-3">3</span></div>

                                        <div className="mt-5 d-flex ">
                                            <div><p className="total-price">Total Price &nbsp;</p><p className="dollor-text"> &nbsp;27.99$</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price "> &nbsp; Payment Method &nbsp;</p> <p className="dollor-text">&nbsp;Cash</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price"> &nbsp; Time Wait</p> <p className="dollor-text">&nbsp; 27.99$</p></div>



                                        </div>

                                    </div>
                                </div>

                                <div className="card m-2 card-set">
                                    <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                        <div> <button type="button " className="btn rounded-pill tablebutton mt-1">Table 3</button></div>

                                        <div > <button type="button " className="btn rounded-pill inprogress-button mt-1">in Progress</button><span className="ml-5 three-dot">•••</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-4" >Caramel cake with beries</span><span className="d-flex justify-content-center align-items-center side-text mt-4 ml-3">1</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-2" >Chocolate cake with cherries</span><span className="d-flex justify-content-center align-items-center side-text mt-2 ml-3">3</span></div>

                                        <div className="mt-5 d-flex ">
                                            <div><p className="total-price">Total Price &nbsp;</p><p className="dollor-text"> &nbsp;27.99$</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price "> &nbsp; Payment Method &nbsp;</p> <p className="dollor-text">&nbsp;Paypal</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price"> &nbsp; Time Wait</p> <p className="dollor-text">&nbsp; 27.99$</p></div>



                                        </div>

                                    </div>
                                </div>

                                <div className="card  m-2 card-set">
                                    <div className="card-body d-flex justify-content-center align-items-center flex-column">
                                        <div> <button type="button " className="btn rounded-pill tablebutton mt-1">Table 4</button></div>

                                        <div > <button type="button " className="btn rounded-pill inprogress-button mt-1">in Progress</button><span className="ml-5 three-dot">•••</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-4" >Caramel cake with beries</span><span className="d-flex justify-content-center align-items-center side-text mt-4 ml-3">1</span></div>
                                        <div className="d-flex justify-content-center align-items-center flex-row"><span className="caramel-text rounded-pill d-flex justify-content-center align-items-center  mt-2" >Chocolate cake with cherries</span><span className="d-flex justify-content-center align-items-center side-text mt-2 ml-3">3</span></div>

                                        <div className="mt-5 d-flex ">
                                            <div><p className="total-price">Total Price &nbsp;</p><p className="dollor-text"> &nbsp;27.99$</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price "> &nbsp; Payment Method &nbsp;</p> <p className="dollor-text">&nbsp;Credit Card</p></div>
                                            <div className="border-line"></div>
                                            <div><p className="total-price"> &nbsp; Time Wait</p> <p className="dollor-text">&nbsp; 27.99$</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    );


}
export default Orders