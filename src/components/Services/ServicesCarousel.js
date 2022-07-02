import React from "react";
import Slider from "react-slick";
import ServiceCard from "./ServiceCard";
import frontEnd from "../../Assets/Services/frontEnd.jpg";
import backEnd from "../../Assets/Services/backEnd.jpg";
import appDev from "../../Assets/Services/appDev.jpg";
const services = [
  {
    title: "Front-End",
    desc: "From a prototype to a reliable it system. Single page application, Static Site with CMS, Adaptive Layout, Real-time app, High load systems, Integration with third-party services",
    img: frontEnd,
  },
  {
    title: "Back-End",
    desc: "Traditional Back-end which is a mix of the server, databases, APIs, and OS that power an app's Front-End. Cloud-based servers and Data warehouses, Containerization with a service like Docker.",
    img: backEnd,
  },
  {
    title: "App Development",
    desc: "Fully Responsive, Mobile-first Web Application. Cross-Platform & Native Mobile App Development using React Native, Java and Deployment on the App Store and Google Play.",
    img: appDev,
  },
];

export const ServicesCarousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {services.map((s) => (
        <ServiceCard title={s.title} img={s.img} desc={s.desc} />
      ))}
    </Slider>
  );
};

export default ServicesCarousel;
