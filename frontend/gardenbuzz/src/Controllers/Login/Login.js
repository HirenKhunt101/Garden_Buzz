import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";



const Login = () => {
  return (
    <>  
        <div className="login-root">
            <div className="box-root flex-flex flex-direction--column" style={{minHeight: "100vh", flexGrow: 1}}>
                <div className="loginbackground box-background--white padding-top--64">
                    <div className="loginbackground-gridContainer">
                        <div className="box-root flex-flex" style={{ gridArea: "top / start / 8 / end" }}>
                            <div className="box-root" style={{ backgroundImage: "linear-gradient(white 0%, rgb(247, 250, 252) 33%)", flexGrow: 1 }}>
                            </div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "4 / 2 / auto / 5" }}>
                            <div className="box-root box-divider--light-all-2 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "6 / start / auto / 2" }}>
                            <div className="box-root box-background--blue800" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "7 / start / auto / 4" }}>
                            <div className="box-root box-background--blue animationLeftRight" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "8 / 4 / auto / 6" }}>
                            <div className="box-root box-background--gray100 animationLeftRight tans3s" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "2 / 15 / auto / end" }}>
                            <div className="box-root box-background--cyan200 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "3 / 14 / auto / end" }}>
                            <div className="box-root box-background--blue animationRightLeft" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "4 / 17 / auto / 20" }}>
                            <div className="box-root box-background--gray100 animationRightLeft tans4s" style={{flexGrow: 1}}></div>
                        </div>
                        <div className="box-root flex-flex" style={{ gridArea: "5 / 14 / auto / 17" }}>
                            <div className="box-root box-divider--light-all-2 animationRightLeft tans3s" style={{flexGrow: 1}}></div>
                        </div>
                    </div>
                </div>


                <div className="box-root padding-top--24 flex-flex flex-direction--column" style={{ flexGrow: 1, zIndex: 9 }}>
                    <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                        <h1>
                        <Link to="http://blog.stackfindover.com/" rel="dofollow"></Link>GardenBuzz
                        </h1>
                    </div>
                    <div className="formbg-outer">
                        <div className="formbg">
                            <div className="formbg-inner padding-horizontal--48">
                                <span className="padding-bottom--15">Sign in to your account</span>
                                <form id="stripe-login">
                                        <div className="loginp1">
                                            <div className="field padding-bottom--24">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" name="email" />

                                                
                                            {/* </div> */}
                                            {/* <div className="field padding-bottom--24">
                                                <div className="grid--50-50">
                                                    <label htmlFor="password">Password</label>
                                                    <div className="reset-pass">
                                                        <Link to="#">Forgot your password?</Link>
                                                    </div>
                                                </div>
                                                <input type="password" name="password" />
                                            </div> */}

                                            {/* <div className="field padding-bottom--24"> */}
                                                <label htmlFor="password">Password</label>
                                                <input type="password" name="password" />

                                                <label htmlFor="password">Contact Number</label>
                                                <input type="tel" name="contactnumber" />

                                                <label htmlFor="password">Pickup Address:</label>
                                                <input type="text" name="pickup-address" rows="1" />
                                            </div>
                                            
                                        </div>
                                    <div className="field field-checkbox padding-bottom--24 flex-flex align-center">
                                        <label htmlFor="checkbox">
                                        <input type="checkbox" name="checkbox" /> Stay signed in for a week
                                        </label>
                                    </div>
                                    <div className="field padding-bottom--24">
                                        <input type="submit" name="submit" value="Continue" />
                                    </div>
                                    <div className="field">
                                        <Link className="ssolink" to="#">Use single sign-on (Google) instead</Link>
                                    </div>
                                </form>
                            </div>
                            </div>
                            <div className="footer-link padding-top--24">
                            <span>Don't have an account? <Link to="">Sign up</Link></span>
                            <div className="listing padding-top--24 padding-bottom--24 flex-flex center-center">
                                <span><Link to="#">© Stackfindover</Link></span>
                                <span><Link to="#">Contact</Link></span>
                                <span><Link to="#">Privacy & terms</Link></span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </>
  );
};

export default Login;