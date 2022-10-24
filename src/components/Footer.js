import React from "react";
import { Figure, Image } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="row">
          <div className="col-auto order-md-1 mb-active">
            <div className="logo">
              <a href="/" className="inline-block">
                <Image
                  src="/images/Asteria.svg"
                  width="100px"
                  className="rounded h-36"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="col-md order-md-2 hotels-list-block">
            <Swiper
              spaceBetween={40}
              slidesPerView={4.99}
            >
              <SwiperSlide className="mr-7 w-72">
                <h4 className="hotels-block-title">ASTERIA BODRUM RESORT</h4>
                <Figure>
                  <Image className="rounded" src="./images/bodrum.jpg"></Image>
                  <a href="/">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </a>
                </Figure>
              </SwiperSlide>
              <SwiperSlide>
                <h4 className="hotels-block-title">ASTERIA KEMER RESORT</h4>
                <Figure>
                  <Image className="rounded" src="./images/kemer.jpg"></Image>
                  <a href="/">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </a>
                </Figure>
              </SwiperSlide>
              <SwiperSlide>
                <h4 className="hotels-block-title">Asteria Kremlin Palace</h4>
                <Figure>
                  <Image className="rounded" src="./images/kremlin.jpg"></Image>
                  <a href="/">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </a>
                </Figure>
              </SwiperSlide>
              <SwiperSlide>
                <h4 className="hotels-block-title">ASTERIA ZEUS DİDİM</h4>
                <Figure>
                  <Image className="rounded" src="./images/didim.jpg"></Image>
                  <a href="/">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </a>
                </Figure>
              </SwiperSlide>
              <SwiperSlide className="last">
                <h4 className="hotels-block-title">ASTERIA VENUS DİDİM</h4>
                <Figure>
                  <Image
                    className="rounded"
                    src="./images/venus-didim.jpg"
                  ></Image>
                  <a href="/">
                    <i className="fa-solid fa-circle-chevron-right"></i>
                  </a>
                </Figure>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-12 order-md-3">
            <div className="footer-pages">
              <ul className="footer-first">
                <li>
                  <a type="button" className="footer-menu-link-active" href="/">
                    HOMEPAGE
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    RESTAURANTS
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    SPA & WELLNESS
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    CONFERENCE
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    MARRIAGE & HONEYMOON
                  </a>
                </li>
              </ul>
              <ul className="footer-first">
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    ACCOMMODATION
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    ACTIVITES
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    ASTERIA KIDS CLUB
                  </a>
                </li>
                <li>
                  <a type="button" className="footer-menu-link" href="/">
                    SPORT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 order-md-4 col-xl-auto">
            <ul className="footer-first">
              <li>
                <a type="button" className="footer-menu-link" href="/">
                  FACT SHEET
                </a>
              </li>
              <li>
                <a type="button" className="footer-menu-link-active" href="/">
                  MULTIMEDIA
                </a>
              </li>
              <li>
                <a type="button" className="footer-menu-link" href="/">
                  PROTECTION OF PERSONAL DATA
                </a>
              </li>
            </ul>
            <ul className="footer-first">
              <li>
                <a type="button" className="footer-menu-link" href="/">
                  AWARDS
                </a>
              </li>
              <li>
                <a type="button" className="footer-menu-link" href="/">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xl-auto col-md order-md-5 d-flex align-items-center ms-xl-auto ps-xl-0">
            <p className="copyright">© 2018 All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
