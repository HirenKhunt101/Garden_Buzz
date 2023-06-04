import React, { useState } from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      {/* <!--==================== FOOTER ====================--> */}
      <footer class="footer section">
        <hr />
        <div class="footer__container container grid">
          <div class="footer__content">
            <a href="#" class="footer__logo">
              <i class="ri-leaf-line footer__logo-icon"></i> Plantex
            </a>

            <h3 class="footer__title">
              Subscribe to our newsletter <br></br> to stay update
            </h3>

            <div class="footer__subscribe">
              <input
                type="email"
                placeholder="Enter your email"
                class="footer__input"
              />

              <button class="button button--flex-sub footer__button">
                Subscribe
                <i class="ri-arrow-right-up-line button__icon"></i>
              </button>
            </div>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Our Address</h3>

            <ul class="footer__data">
              <li class="footer__information">SP Hostel, Gulbai Tekra</li>
              <li class="footer__information"> Navrangpura</li>
              <li class="footer__information">Ahmedabad - 380006</li>
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">Contact Us</h3>

            <ul class="footer__data">
              <li class="footer__information">+916351869907</li>

              <div class="footer__social">
                <a href="https://www.facebook.com/" class="footer__social-link">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a
                  href="https://www.instagram.com/"
                  class="footer__social-link"
                >
                  <i class="ri-instagram-line"></i>
                </a>
                <a href="https://twitter.com/" class="footer__social-link">
                  <i class="ri-twitter-fill"></i>
                </a>
              </div>
            </ul>
          </div>

          <div class="footer__content">
            <h3 class="footer__title">We accept all credit cards</h3>

            <div class="footer__cards">
              <img src={require("./card1.png")} alt="" class="footer__card" />
              <img src={require("./card2.png")} alt="" class="footer__card" />
              <img src={require("./card3.png")} alt="" class="footer__card" />
              <img src={require("./card4.png")} alt="" class="footer__card" />
            </div>
          </div>
        </div>

        <p class="footer__copy">&#169; Gulgule. All rigths reserved</p>
      </footer>

      {/* <!--=============== SCROLL UP ===============--> */}
      <a href="#" class="scrollup" id="scroll-up">
        <i class="ri-arrow-up-fill scrollup__icon"></i>
      </a>

      {/* <!--=============== SCROLL REVEAL ===============--> */}
      <script src="./Controllers/scrollreveal.min.js"></script>

      {/* <!--=============== MAIN JS ===============--> */}
      <script src="./Controllers/main.js"></script>
    </>
  );
};

export default Footer;
