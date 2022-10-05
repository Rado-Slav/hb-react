import React from 'react';
import { Tooltip } from 'react-tippy';
import "aos/dist/aos.css";

export default function Map () {

  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Our Clients</h2>
          <p>We have worked with clients from all over the world</p>
          <div className="bar"></div>
        </div>
        <div className="map-container">

          <img
            src="http://res.cloudinary.com/slzr/image/upload/v1500321012/world-map-1500_vvekl5.png"/>

          <div className="point venezuela">
            <Tooltip
              // options
              title="Venezuela"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point brasil">
            <Tooltip
              // options
              title="Brazil"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point argentina">
            <Tooltip
              // options
              title="Argentina"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point colombia">
            <Tooltip
              // options
              title="Columbia"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point panama">
            <Tooltip
              // options
              title="Panama"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point mexico">
            <Tooltip
              // options
              title="Mexico"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point usa">
            <Tooltip
              // options
              title="United States"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point arabia">
            <Tooltip
              // options
              title="Arabia Saudi"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point turquia">
            <Tooltip
              // options
              title="Turkey"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point rusia">
            <Tooltip
              // options
              title="Russia"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point china">
            <Tooltip
              // options
              title="China"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point japon">
            <Tooltip
              // options
              title="Japan"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

          <div className="point australia">
            <Tooltip
              // options
              title="Australia"
              trigger="mouseenter"
            ><span className="inner-span"></span>
            </Tooltip></div>

        </div>
      </div>

      <style jsx>{`
          html, body {
          height: 100%;
      }

      body {
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .map-container {
          padding: 3.2rem .8rem;
          position: relative;
          display: inline-block;
      }
      .map-container img {
          width: 100%;
      }
      .map-container .point {
          cursor: pointer;
          position: absolute;
          width: 1.6rem;
          height: 1.6rem;
          background-color: #00acc1;
          border-radius: 50%;
          transition: all .3s ease;
          will-change: transform, box-shadow;
          transform: translate(-50%, -50%);
          box-shadow: 0 0 0 rgba(0, 172, 193, 0.4);
          animation: pulse 3s infinite;
      }
      .map-container .point:hover {
          animation: none;
          transform: translate(-50%, -50%) scale3D(1.35, 1.35, 1);
          box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      }

      .map-container .inner-span {
          display: inline-block;
          margin: 0 auto;
          width: 100%;
          height: auto;
      }
      .map-container .venezuela {
          top: 54%;
          left: 24%;
      }
      .map-container .brasil {
          top: 64%;
          left: 28%;
      }
      .map-container .argentina {
          top: 77%;
          left: 27%;
      }
      .map-container .colombia {
          top: 55%;
          left: 21%;
      }
      .map-container .panama {
          top: 51%;
          left: 18%;
      }
      .map-container .mexico {
          top: 38%;
          left: 12%;
      }
      .map-container .usa {
          top: 26%;
          left: 17%;
      }
      .map-container .arabia {
          top: 40%;
          left: 53%;
      }
      .map-container .turquia {
          top: 31%;
          left: 57%;
      }
      .map-container .rusia {
          top: 16%;
          left: 67%;
      }
      .map-container .china {
          top: 40%;
          left: 72%;
      }
      .map-container .japon {
          top: 34%;
          left: 86%;
      }
      .map-container .australia {
          top: 72%;
          left: 86%;
      }

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 172, 193, 0.5);
  }
  70% {
    box-shadow: 0 0 0 25px rgba(0, 172, 193, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 172, 193, 0);
  }
}
          `}
      </style>
    </>)
}


