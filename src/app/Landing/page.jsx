import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import '../../../public/assets/css/style.css';
import '../../../public/assets/css/bootstrap.css';
import '../../../public/assets/css/font-awesome.min.css';
import '../../../public/assets/css/magnific-popup.css';
import '../../../public/assets/vendors/linericon/style.css';
import '../../../public/assets/vendors/owl-carousel/owl.carousel.min.css';
import '../../../public/assets/vendors/nice-select/css/nice-select.css';

const Landing = () => {
  return (
    <>
      {/* <!--================ Start Header Area =================--> */}
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              {/* <!-- Brand and toggle get grouped for better mobile display --> */}
              <a className="navbar-brand logo_h" href="index.html"><img src="/assets/img/logo.png" alt="" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              {/* <!-- Collect the nav links, forms, and other content for toggling --> */}
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item active"><a className="nav-link" href="index.html">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="services.html">Services</a></li>
                  <li className="nav-item"><a className="nav-link" href="portfolio.html">Portfolio</a></li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Pages</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
                      <li className="nav-item"><a className="nav-link" href="portfolio-details.html">Portfolio Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                      aria-expanded="false">Blog</a>
                    <ul className="dropdown-menu">
                      <li className="nav-item"><a className="nav-link" href="blog.html">Blog</a></li>
                      <li className="nav-item"><a className="nav-link" href="single-blog.html">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {/* <!--================ End Header Area =================--> */}

      {/* <!--================ Start Home Banner Area =================--> */}
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="banner_content">
                  <h3 className="text-uppercase">Hello</h3>
                  <h1 className="text-uppercase">I am Luqman</h1>
                  <h5 className="text-uppercase">React Developer</h5>
                  <div className="d-flex align-items-center">
                    <a className="primary_btn" href="#"><span>Hire Me</span></a>
                    <a className="primary_btn tr-bg" href="#"><span>Get CV</span></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="home_right_img">
                <img className="" src="/assets/img/banner/home-right.png" alt="HOME-RIGHT" loading="lazy" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Home Banner Area =================--> */}

      {/* <!--================ Start About Us Area =================--> */}
      <section className="about_area section_gap">
        <div className="container">
          <div className="row justify-content-start align-items-center">
            <div className="col-lg-5">
              <div className="about_img">
                <img className="" src="/assets/img/about-us.png" alt="ABOUT-US" />
              </div>
            </div>
            <div className="offset-lg-1 col-lg-5">
              <div className="main_title text-left">
                <h2>let’s <br />
                  Introduce about <br />
                  myself</h2>
                <p>
                  Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven
                  midst their. Beast creepeth. Fish days.
                </p>
                <p>
                  Is give may shall likeness made yielding spirit a itself together created after sea
                  is in beast beginning signs open god you're gathering whose gathered cattle let.
                  Creature whales fruit unto meat the life beginning all in under give two.
                </p>
                <a className="primary_btn" href="#"><span>Download CV</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End About Us Area =================--> */}

      {/* <!--================ Start Brand Area =================--> */}
      <section className="brand_area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo1.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo2.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo3.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo4.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo5.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo6.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo7.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo8.png" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6">
                  <div className="single-brand-item d-table">
                    <div className="d-table-cell text-center">
                      <img src="/assets/img/brands/logo9.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="offset-lg-2 col-lg-4 col-md-6">
              <div className="client-info">
                <div className="d-flex mb-50">
                  <span className="lage">10</span>
                  <span className="smll">Years Experience Working</span>
                </div>
                <div className="call-now d-flex">
                  <div>
                    <span className="fa fa-phone"></span>
                  </div>
                  <div className="ml-15">
                    <p>call us now</p>
                    <h3>(+1)-800-555-6789</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Brand Area =================--> */}

      {/* <!--================ Start Features Area =================--> */}
      <section className="features_area">
        <div className="container">
          <div className="row feature_inner">
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s1.png" alt="" />
                <h4>Wp developing</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s2.png" alt="" />
                <h4>Ui/ux design</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s3.png" alt="" />
                <h4>Web design</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s4.png" alt="" />
                <h4>Seo optimize</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Features Area =================--> */}

      {/* <!--================ Start Portfolio Area =================--> */}
      <section className="portfolio_area section_gap_top" id="portfolio">
        <div className="container">
          <div className="main_title">
            <h2>quality work <br />
              Recently done project</h2>
          </div>
          <div className="row portfolio-filter justify-content-center">
            <div className="col-lg-12">
              <div className="filters">
                <ul>
                  <li className="active" data-filter="*">All</li>
                  <li data-filter=".brand">Branding</li>
                  <li data-filter=".web">Web</li>
                  <li data-filter=".ads">Ads</li>
                  <li data-filter=".graphics">Graphics</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid justify-content-center">
              <div className="col-lg-4 col-md-6 all web">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p1.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p1.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">2D Vinyl Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all ads">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p2.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p2.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Creative Poster</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all graphics">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p3.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p3.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Embosed Logo Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all web">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p4.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p4.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">3D Helmet Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all ads">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p5.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p5.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">2D Vinyl Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all graphics">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p6.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p6.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">3D Helmet Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all web">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p7.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p7.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Creative Poster</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all web">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p8.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p8.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">Embosed Logo Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 all ads">
                <div className="portfolio_box">
                  <div className="single_portfolio">
                    <img className="img-fluid w-100" src="img/portfolio/p9.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="img/portfolio/p9.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
                  </div>
                  <div className="short_info">
                    <h4><a href="portfolio-details.html">3D Helmet Design</a></h4>
                    <p>Client Project</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Portfolio Area =================--> */}

      {/* <!--================ Start Testimonials Area =================--> */}
      <section className="testimonials_area section_gap">
        <div className="container">
          <div className="testi_slider owl-carousel">
            <div className="item">
              <div className="testi_item">
                <img src="/assets/img/quote.png" alt="" />
                <h4>Fanny Spencer</h4>
                <ul className="list">
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                </ul>
                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you</p>
              </div>
            </div>
            <div className="item">
              <div className="testi_item">
                <img src="/assets/img/quote.png" alt="" />
                <h4>Fanny Spencer</h4>
                <ul className="list">
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                </ul>
                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you</p>
              </div>
            </div>
            <div className="item">
              <div className="testi_item">
                <img src="/assets/img/quote.png" alt="" />
                <h4>Fanny Spencer</h4>
                <ul className="list">
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                  <li><a href="#"><i className="fa fa-star"></i></a></li>
                </ul>
                <p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--================ End Testimonials Area =================--> */}

      {/* <!--================ Start Footer Area =================--> */}
      <footer className="footer_area">
        <div className="container">
          <div className="row footer_inner">
            <div className="col-lg-4 col-sm-6">
              <aside className="f_widget ab_widget">
                <div className="f_title">
                  <h4>About Me</h4>
                </div>
                <ul>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-4 col-sm-6">
              <aside className="f_widget news_widget">
                <div className="f_title">
                  <h4>Newsletter</h4>
                </div>
                <p>Stay updated with our latest trends</p>
                <div id="mc_embed_signup">
                  <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=72f1d1f3e1e8b8657012d9ff4&id=2e6a7c985f" method="get" className="subscribe_form relative">
                    <div className="input-group d-flex flex-row">
                      <input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address '" required="" type="email" />
                      <button className="btn sub-btn"><span className="lnr lnr-arrow-right"></span></button>
                    </div>
                    <div className="mt-10 info"></div>
                  </form>
                </div>
              </aside>
            </div>
            <div className="col-lg-4">
              <aside className="f_widget social_widget">
                <div className="f_title">
                  <h4>Follow Me</h4>
                </div>
                <p>Let us be social</p>
                <ul className="list">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </footer>
      {/* <!--================ End Footer Area =================--> */}


      <Script src="/assets/js/jquery-3.2.1.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/popper.js" strategy="beforeInteractive" />
      <Script src="/assets/js/bootstrap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/stellar.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/nice-select/js/jquery.nice-select.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/isotope/imagesloaded.pkgd.min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/isotope/isotope-min.js" strategy="lazyOnload" />
      <Script src="/assets/vendors/owl-carousel/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/mail-script.js" strategy="lazyOnload" />
      <Script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE" strategy="lazyOnload" />
      <Script src="/assets/js/gmaps.min.js" strategy="lazyOnload" />
      <Script src="/assets/js/theme.js" strategy="lazyOnload" />
    </>
  );
}

export default Landing;
