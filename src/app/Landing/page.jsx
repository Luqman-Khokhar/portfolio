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
                      <img src="/assets/img/brands/logo5.png" alt="logo5" />
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
                <img src="/assets/img/services/s1.png" alt="S1" />
                <h4>Wp developing</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s2.png" alt="S2" />
                <h4>Ui/ux design</h4>
                <p>Is give may shall likeness made yielding spirit a itself toget created after sea
                  is in beast beginning signs open god you're gathering ithe</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="feature_item">
                <img src="/assets/img/services/s3.png" alt="S3" />
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p1.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p1.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p2.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p2.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p3.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p3.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p4.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p4.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p5.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p5.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p6.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p6.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p7.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p7.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p8.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p8.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
                    <img className="img-fluid w-100" src="/assets/img/portfolio/p9.jpg" alt="" />
                    <div className="overlay"></div>
                    <a href="/assets/img/portfolio/p9.jpg" className="img-gal"><div className="icon"><span className="lnr lnr-cross"></span></div></a>
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
      <div class="testimonial_area section_gap_bottom">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
					<div class="main_title">
						<h2>client say about me</h2>
						<p>Is give may shall likeness made yielding spirit a itself togeth created after sea is in beast <br/>
							 beginning signs open god you're gathering ithe</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="testi_slider owl-carousel">
        			<div class="testi_item">
        				<div class="row">
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t1.jpg" alt=""/>
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="testi_item">
        				<div class="row">
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t2.jpg" alt=""/>
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="testi_item">
        				<div class="row">
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t1.jpg" alt=""/>
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="testi_item">
        				<div class="row">
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t2.jpg" alt=""/>
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="testi_item">
        				<div class="row">
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t1.jpg" alt="" />
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Elite Martin</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        			<div class="testi_item">
        				<div class="row"> 
        					<div class="col-lg-4">
        						<img src="/assets/img/testimonials/t2.jpg" alt=""/>
        					</div>
        					<div class="col-lg-8">
        						<div class="testi_text">
        							<h4>Davil Saden</h4>
									<p>Him, made can't called over won't there on divide there male fish beast own his day third seed sixth seas unto. Saw from </p>
        						</div>
        					</div>
        				</div>
        			</div>
        		</div>
			</div>
		</div>
	</div>
      {/* <!--================ End Testimonials Area =================--> */}

      {/* <!--================ Start Newsletter Area =================--> */}
	<section class="newsletter_area">
		<div class="container">
			<div class="row justify-content-center align-items-center">
				<div class="col-lg-12">
					<div class="subscription_box text-center">
						<h2 class="text-uppercase text-white">get update from anywhere</h2>
						<p class="text-white">
							Bearing Void gathering light light his eavening unto dont afraid. 
						</p>
						<div class="subcribe-form" id="mc_embed_signup">
							<form target="_blank" novalidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscription relative">
								<input name="EMAIL" placeholder="Email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email address'" required="" type="email" />
								<div style={{position: "absolute", left: "-5000px"}}>
									<input name="b_36c4fd991d266f23781ded980_aefe40901a" tabindex="-1" value="" type="text" />
								</div>
								<button class="primary-btn hover d-inline">Get Started</button>
								<div class="info"></div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	{/* <!--================ End Newsletter Area =================--> */}

	{/* <!--================Footer Area =================--> */}
	<footer class="footer_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="footer_top flex-column">
						<div class="footer_logo">
							<a href="#">
								<img src="/assets/img/logo.png" alt="" />
							</a>
							<h4>Follow Me</h4>
						</div>
						<div class="footer_social">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-dribbble"></i></a>
							<a href="#"><i class="fa fa-behance"></i></a>
						</div>
					</div>
				</div>
			</div>
			{/* <div class="row footer_bottom justify-content-center">
				<p class="col-lg-8 col-sm-12 footer-text"> */}
					{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
{/* Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a> */}
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
{/* </p>
			</div>*/}
		</div> 
	</footer>
	{/* <!--================End Footer Area =================--> */}


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
