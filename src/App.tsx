import classes from "./App.module.css";
import { Container } from "@mantine/core";
import Slider from "react-slick";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <>
      <div className={classes.bannerarea}>
        <Container mx={200} className={classes.container}>
          <div className="row gap-3">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <h1>
                Write high-quality, winning bids & proposals faster than ever.
              </h1>
              <hr />
              <p>
                Harness the power of augmented intelligence to write
                high-quality bids, proposals and tenders.
              </p>
              <p>
                Use AutogenAI to create exceptional bids in minutes, not days.
              </p>

              <button className="btn btn-sm btn-info">Book a Demo</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/3SyHScC96Ws?si=tO-ThHdaAwasBGOx"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>

      <div className="trust-sec text-center">
        <Container>
          <h2>Trusted by</h2>
          <hr className="center" />
          <div className={`row ${classes.slidecontainer}`}>
            <Slider {...settings}>
              <div>
                <img src="/slideimg/img1.png" className={classes.slideimg} />
              </div>
              <div>
                <img src="/slideimg/img2.png" className={classes.slideimg} />
              </div>
              <div>
                <img src="/slideimg/img3.png" className={classes.slideimg} />
              </div>
              <div>
                <img src="/slideimg/img4.png" className={classes.slideimg} />
              </div>
              <div>
                <img src="/slideimg/img5.png" className={classes.slideimg} />
              </div>
              <div>
                <img src="/slideimg/img6.png" className={classes.slideimg} />
              </div>
            </Slider>
          </div>
        </Container>
      </div>

      <div className="bid-write">
        <Container>
          <div className="row">
            <div className="col-md-8">
              <h2 className="text-left">A new way of bid writing</h2>
              <hr />
              <p className="max-w-text">
                Bid teams spend 80% of their time in the drafting stage with
                little scope to edit, enhance and elevate the quality of their
                work. Our world className engineers have dedicated over 50,000
                hours to building software that allows you to spend more time on
                the activities that get you to a winning bid.
              </p>
            </div>
            <div className="col-md-4">
              <div className="grid">
                <div className="box">
                  <img src="images/up-circle.png" alt="" />
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <img src="images/up-circle.png" alt="" />
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <img src="images/up-circle.png" alt="" />
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <img src="images/up-circle.png" alt="" />
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
