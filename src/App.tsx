import classes from "./App.module.css";
import {
  Container,
  Transition,

} from "@mantine/core";
import Slider from "react-slick";
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


import Elevate from "../public/Elevate-2.png";
import Edit from "../public/Edit-2.png";
import Draft from "../public/Draft-2.png";
import LinearSlider from "./component/LinearSlider";
import useScrollPercentage from "./hooks/useScrollPercentage";
import News from "../public/shutterstock_2307916095-768x409.jpg";
import BBC from "../public/BBC_white_logo.png";
import CNBC from "../public/cnbc.png";
import BLOOM from "../public/bloomberg.png";
import TIMES from "../public/the-times.png";
import RTextInput from "./component/RTextInput";


function App() {
  const [mounted, setMounted] = useState(false);

  const [ref, scrollPercentage] = useScrollPercentage();

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

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log("0as0d-a0sd-0asd", scrollPercentage);

  return (
    <div ref={ref}>
      <header className={classes.header}>
        <nav className="navbar navbar-expand-lg navbar-dark ">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="logo.png" style={{width:'200px', height:'40px'}} />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    SECURITY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    ARTICLES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    CAREERS
                  </a>
                </li>
                <li className="nav-item">
                  <button className="btn btn-info" onClick={() => console.log('[aspd')}>
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
              
      </header>
      <div className={classes.bannerarea}>
        <Container mx={200} className={classes.container}>
          <div className="row gap-3">
            <div className="col-lg-7 col-md-7 col-sm-12">
              <Transition
                mounted={mounted}
                transition="slide-up"
                duration={400}
                timingFunction="ease"
              >
                {(styles) => (
                  <h1 style={styles}>
                    Write high-quality, winning bids & proposals faster than
                    ever.
                  </h1>
                )}
              </Transition>
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
          <Transition
            mounted={mounted}
            transition="slide-up"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => <h2 style={styles}>Trusted by</h2>}
          </Transition>
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
              <Transition
                mounted={scrollPercentage > 3}
                transition="slide-up"
                duration={400}
                timingFunction="ease"
              >
                {(styles) => (
                  <h2 style={styles} className="text-left">
                    A new way of bid writing
                  </h2>
                )}
              </Transition>
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
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
                <div className="box">
                  <h3>70% Increase</h3>
                  <p>In Drafting Speed</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="ingredients">
        <div className="container  max-container">
          <div className="row">
            <Transition
              mounted={scrollPercentage > 14}
              transition="slide-up"
              duration={400}
              timingFunction="ease"
            >
              {(styles) => (
                <h2 style={styles}>
                  The 4 key ingredients of our custom language engines
                </h2>
              )}
            </Transition>

            <hr />

            <div className="tabBox">
              <div className="row upperBtns">
                <div className="col-md-3">
                  <button className="btn btn-danger">WORLD ENGINEERING</button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger">
                    LINGUISTIC ENGINEERING
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger">
                    YOUR KNOWLEDGE LIBRARY
                  </button>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-danger">THE BEST UX/UI</button>
                </div>
              </div>
              <div className="tab-content">
                <div className="max-content">
                  <h2>WORLD ENGINEERING</h2>
                  <p>
                    We employ the top AI-engineers in the world. We combine
                    their intelligence with the insight and experience of dozens
                    of the most successful bid and proposal writing
                    professionals. Our team has invested over 50,000 hours into
                    defining the elements of compelling competitive prose and
                    overcoming the complexities, challenges, and nuances
                    involved in building software that wins more work and saves
                    more time.
                  </p>
                  <p>
                    We have developed a unique approach for optimising language.
                    Our tool effectively conveys ideas and arguments by
                    tailoring proposals to match the linguistic patterns,
                    preferences, and nuances of the target audience.
                  </p>
                  <button className="btn btn-info">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="key-feature">
        <div className="container">
          <Transition
            mounted={scrollPercentage > 20}
            transition="slide-up"
            duration={400}
            timingFunction="ease"
          >
            {(styles) => <h2 style={styles}>Our key features</h2>}
          </Transition>

          <hr />
          <div className="row">
            <div className="col-md-6">
              <h2 className="big">Draft</h2>
              <hr />
              <h3 className="big">Reduce drafting time by 70%</h3>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Draft} className="w-100" alt="Draft" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <img src={Edit} className="w-100" alt="Draft" />
            </div>
            <div className="col-md-6">
              <h2 className="big">Edit</h2>
              <hr />
              <h3 className="big">Reduce drafting time by 70%</h3>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <h2 className="big">Elevate</h2>
              <hr />
              <h3 className="big">Reduce drafting time by 70%</h3>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
              <div className="innerbox">
                <h4>Creative Ideation</h4>
                <p>
                  Automatically generate winning bid ideas for a competitive
                  edge in seconds.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img src={Elevate} className="w-100" alt="Draft" />
            </div>
          </div>
        </div>
      </div>

      <div className="tesimonial">
        <div className="container">
          <h2>Our customers</h2>
          <hr />
          <p className="max-text">
            Our Language Engines are making our clients’ bid-writing teams up to
            85% more efficient, allowing them to get to draft in minutes rather
            than days and boosting their win rates by up to 241%. But don’t just
            take our word for it, see what our customers are saying.
          </p>
          <div className="row">
            <LinearSlider />
          </div>
        </div>
      </div>

      <div className="commitment-sec dark-sec">
        <div className="container">
          <h2>AutogenAI's commitment to trust</h2>
          <hr />
          <p className="max-text">
            Trust is at the core of our business and embedded in everything we
            do. Businesses around the globe rely on AutogenAI to write winning
            prose, increase the quantity and quality of the proposals they
            submit, and gain a competitive edge for their most sensitive and
            time-critical bids. AutogenAI maintains the secure environments
            they’ve come to trust.{" "}
          </p>
          <button className="btn btn-info">Learn More</button>
        </div>
      </div>

      <div className="featured">
        <div className="container">
          <h2>As featured in</h2>
          <hr />
          <div className="logoOuter">
            <div className="logoBox">
              <img src={BBC} className="w-100" alt="Draft" />
            </div>

            <div className="logoBox">
              <img src={CNBC} className="w-100" alt="Draft" />
            </div>

            <div className="logoBox">
              <img src={TIMES} className="w-100" alt="Draft" />
            </div>

            <div className="logoBox">
              <img src={BLOOM} className="w-100" alt="Draft" />
            </div>
          </div>
        </div>
      </div>

      <div className="formbox">
        <div className="container">
          <h6>INTERESTED?</h6>
          <h2>BOOK YOUR DEMO TODAY</h2>
          <hr />
          <div className="row justify-content-center gap-1 mb-4">
            <div className="col-md-3">
              <RTextInput />
            </div>
            <div className="col-md-3">
              <RTextInput />
            </div>
          </div>
          <div className="row justify-content-center gap-1 mb-4">
            <div className="col-md-3">
              <RTextInput />
            </div>
            <div className="col-md-3">
              <RTextInput />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <RTextInput />
            </div>
          </div>
          <p className="mx-auto mt-4 w-50">
            We will use your details to book your demo and keep you up to date
            with AutogenAI services. For more details, please see our{" "}
            <span className={classes.privacyLink}>
              <a href="#">Privacy Notice</a>
            </span>
          </p>
          <button className="btn btn-info">Submit</button>
        </div>
      </div>

      <div className="news">
        <div className="container">
          <h2>LATEST NEWS & INSIGHTS.</h2>
          <hr />
          <p>
            WRITTEN IN COLLABORATION WITH AUTOGENAI’S GENERAL LANGUAGE ENGINE 1
          </p>

          <div className="row newsOuter">
            <div className="newsBox">
              <div className="news-circle">
                <img src={News} className="w-100" alt="logo" />
              </div>
              <h6>26TH MAY, 2024</h6>
              <hr />
              <h3>
                UK General Election 2024: What is purdah, when does it start and
                how will it impact your business?
              </h3>
              <button className="btn btn-info">View Article</button>
            </div>

            <div className="newsBox">
              <div className="news-circle">
                <img src={News} className="w-100" alt="logo" />
              </div>
              <h6>26TH MAY, 2024</h6>
              <hr />
              <h3>
                UK General Election 2024: What is purdah, when does it start and
                how will it impact your business?
              </h3>
              <button className="btn btn-info">View Article</button>
            </div>

            <div className="newsBox">
              <div className="news-circle">
                <img src={News} className="w-100" alt="logo" />
              </div>
              <h6>26TH MAY, 2024</h6>
              <hr />
              <h3>
                UK General Election 2024: What is purdah, when does it start and
                how will it impact your business?
              </h3>
              <button className="btn btn-info">View Article</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <h5>Content</h5>
              <ul>
                <li>
                  <a>Articles</a>
                </li>
                <li>
                  <a>Security</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Careers</a>
                </li>
              </ul>
            </div>
            <div className="col-md-8">
              <h5>Legal</h5>
              <ul>
                <li>
                  <a>Privacy Policy</a>
                </li>
                <li>
                  <a>Usage Policy</a>
                </li>
                <li>
                  <a>Cookie Policy</a>
                </li>
                <li>
                  <a>Application Cookie Policy</a>
                </li>
                <li>
                  <a>Customer T&Cs</a>
                </li>
                <li>
                  <a>Application T&Cs</a>
                </li>
              </ul>
            </div>
            <div className="col-md-2"></div>
          </div>
          <div className="row mt-4 pt-4 bottomBar">
            <div className="col-md-8 p-0">
              <p>
                © Copyright 2024 AutogenAI. All rights reserved. Company number
                13907128
              </p>
              <p>
                {" "}
                All text on this site was co-created using AutogenAI’s General
                Language Engine 1 (Genny-1).
              </p>
              <p>
                {" "}
                All AI-generated text has been reviewed, approved and verified
                by humans.
              </p>
            </div>
            <div className="col-md-4 text-end">
              <p>
                Registered office address 5th Floor, 123 Pentonville Road, N1
                9LG
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
