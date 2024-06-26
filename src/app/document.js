// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
       
        <script src="/assets/js/jquery-3.2.1.min.js"></script>
        <script src="/assets/js/popper.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/stellar.js"></script>
        <script src="/assets/js/jquery.magnific-popup.min.js"></script>
        <script src="/assets/vendors/nice-select/js/jquery.nice-select.min.js"></script>
        <script src="/assets/vendors/isotope/imagesloaded.pkgd.min.js"></script>
        <script src="/assets/vendors/isotope/isotope-min.js"></script>
        <script src="/assets/vendors/owl-carousel/owl.carousel.min.js"></script>
        <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
        <script src="/assets/js/mail-script.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
        <script src="/assets/js/gmaps.min.js"></script>
        <script src="/assets/js/theme.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
