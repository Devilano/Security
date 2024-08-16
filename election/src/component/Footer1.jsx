import React from 'react';
import "../style/footer.css"
import '@fortawesome/fontawesome-free/css/all.css';


function Footer1() {
  return (
    <div className="container-editable" style={{backgroundColor:"#264fb0"}}>
      {/* Footer */}
      <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#203080' }}>
        {/* Grid container */}
        <div className="container p-4 pb-0">
          {/* Section: Links */}
          <section className="">
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h3 className="text-uppercase mb-4 font-weight-bold">
                  Election Analysis
                </h3>
                <p>
                  "Election Analysis is a web application designed to provide
                   comprehensive insights and visualizations on electoral data,
                    enabling users to explore trends, understand voting patterns,
                     and gain valuable insights into political landscapes."
                </p>
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Features</h6>
                <p>
                  <a className="text-white" href="/election-news">Election News</a>
                </p>
                <p>
                  <a className="text-white" href="/vote-data">Vote Data</a>
                </p>
                <p>
                  <a className="text-white" href="/comparison">Comparison</a>
                </p>
                <p>
                  <a className="text-white" href="/ranking">Ranking</a>
                </p>
              </div>
              {/* Grid column */}

              <hr className="w-100 clearfix d-md-none" />

              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Dillibazar,Kathmandu, KtM-200, NP</p>
                <p><i className="fas fa-envelope mr-3"></i> wrabwagle123@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 977 9811529654</p>
                <p><i className="fas fa-print mr-3"></i> + 977 9811529654</p>
              </div>
              {/* Grid column */}

              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

                {/* Facebook */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com" role="button">
                  <i className="fab fa-facebook-f"></i>
                </a>

                {/* Twitter */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="https://www.twitter.com" role="button">
                  <i className="fab fa-twitter"></i>
                </a>

                {/* Google */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="https://www.google.com" role="button">
                  <i className="fab fa-google"></i>
                </a>

                {/* Instagram */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com" role="button">
                  <i className="fab fa-instagram"></i>
                </a>

                {/* Linkedin */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com" role="button">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                {/* Github */}
                <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="https://www.github.com" role="button">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
            {/* Grid row */}
          </section>
          {/* Section: Links */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2020 Copyright:
          <a className="text-white" href="https://www.linkedin.com/in/rabi-wagle-a03585192/">Rabindra Wagle</a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
    </div>
  );
}

export default Footer1;
