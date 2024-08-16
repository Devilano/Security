import React, { useEffect, useState } from 'react';
import { getAllProgressApi } from '../apis/Api';
import '../style/homepage.css'
import { Link } from 'react-router-dom';


const Homepage = () => {
    const [progress, setProgress] = useState([]);
    useEffect(() => {
        getAllProgressApi().then((res) => {
            console.log(res.data);
            setProgress(res.data.progress);
        });
    }, []);

  return (
    <div>
        {/* pulling down section with inline css */}
<section className="article05 zoom-hover" id="about-me-5-u1HYGE0Az8"style={{marginTop: '200px',backgroundColor:"lightblue"}}>   
      <div className="container"style={{backgroundColor:"#264fb0"}}>
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="card-wrapper">
              <div className="row">
                <div className="col-12 col-md-12 col-lg-5 image-wrapper">
                  <img className="w-100" src="assets/home1.jpg" alt="Image"/>
                </div>
                <div className="col-12 col-lg col-md-12">
                  <div className="text-wrapper align-left">
                    <h1 className="mbr-section-title mbr-fonts-style mb-4 display-2">
                      <strong>About Nepal Election</strong>
                    </h1>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">Welcome to the heart of Nepal's political landscape, where we dive deep into the analysis of election data and party progress.</p>
                    <p className="mbr-text mbr-fonts-style mb-3 display-7">Our platform offers a unique experience, allowing you to track the progress of political parties, view individual rankings, and stay updated with the latest news.</p>
                    <p className="mbr-text mbr-fonts-style display-7">Join us in shaping the future of Nepal's political scene by signing up and choosing your favorite political party.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

{/* // Party galary */}
<section class="gallery1 mbr-gallery cid-u1HYGE1hBv" id="gallery-10-u1HYGE1hBv">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-12 content-head">
                <div class="mb-5">
                    <h3 class="mbr-section-title mbr-fonts-style align-center m-0 display-2" style={{backgroundColor:"yellow"}}><strong>Party Gallery</strong></h3>
                </div>
            </div>
        </div>
        <div class="row mbr-gallery">
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/congress1.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/mawbadi1.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/uml2.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/combomu.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/democracy.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/graphvoter.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/rsplogo1.jpg"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-3 item gallery-image">
                <div class="item-wrapper mb-3">
                    <img class="w-100" src="assets/public1.jpg"/>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="features023 cid-u1HYGE2v7E" id="metrics-1-u1HYGE2v7E"style={{backgroundColor:"lightblue"}}>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 content-head">
                <div class="card-wrapper mb-5">
                    <div class="card-box align-center">
                    </div>
                </div>
            </div>
        </div>
        <div class="row content-row"style={{backgroundColor:"#264fb0"}}>
            <div class="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="title mb-3">
                        <span class="num mbr-fonts-style display-1"><strong>11</strong></span>
                    </div>
                    <h4 class="card-title mbr-fonts-style display-5 " >
                        <strong>Users Engaged</strong>
                    </h4>
                </div>
            </div>
            <div class="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="title mb-3">
                        <span class="num mbr-fonts-style display-1"><strong>50+</strong></span>
                    </div>
                    <h4 class="card-title mbr-fonts-style display-5">
                        <strong>Political Parties Ranked</strong>
                    </h4>
                </div>
            </div>
            <div class="item features-without-image col-12 col-md-6 col-lg-4 item-mb">
                <div class="item-wrapper">
                    <div class="title mb-3">
                        <span class="num mbr-fonts-style display-1"><strong>24/7</strong></span>
                    </div>
                    <h4 class="card-title mbr-fonts-style display-5">
                        <strong>Access to Latest News</strong>
                    </h4>
                </div>
            </div>
        </div>
    </div>
</section>
<section class="image3 cid-u1HYGE2t0I" id="image-3-u1HYGE2t0I"style={{backgroundColor:"#264fb0"}}>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-lg-10">
        <h4 class="mbr-description mbr-fonts-style mb-3 align-center display-5"style={{backgroundColor:"green"}}>
          <strong>Latest Updates</strong>
        </h4>
        <div class="image-wrapper">
          <img class="w-100" src="assets/mawbadi1.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Upcoming Event */}
<section class="features03 cid-u1HYGE2PvM" id="events-1-u1HYGE2PvM">
	<div class="container-fluid">
		<div class="row justify-content-center mb-5">
			<div class="col-12 content-head">
				<div class="mbr-section-head">
					<h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2" style={{backgroundColor:"yellow"}}>
						<strong>Upcoming Events</strong>
					</h4>

				</div>
			</div>
            <div className="row">
                    {progress.map((item, index) => (
                        <div key={index} className="col-12 col-md-6 col-lg-3">
                            <div className="card mb-3">
                                <img src={item.newsImageUrl} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title"><strong><a href="#">{item.newsTitle}</a></strong></h5>
                                    <p className="card-text">{item.date}</p>
                                    <p className="card-text">{item.sourceFrom}</p>
                                    <Link to="#" className="btn btn-primary">{item.publisher.slice(0, 10)}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
		</div>
		</div>
</section>


      
    </div>
  );
};

export default Homepage;
