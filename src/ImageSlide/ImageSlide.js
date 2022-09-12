import { Component } from "react";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CAROUSEL } from "../constants/Constants";
import { Image } from "react-bootstrap";

class ImageSlide extends Component {
  render() {
    return (
      <section >
        <Carousel >{this.showCarousel()}</Carousel>
      </section>

    );
  }

  showCarousel() {
    const carouselItems = CAROUSEL.map((carouselElement) => (
      <Carousel.Item key={carouselElement.id} interval={3000}>
        {/* <img
          className="d-block w-100"
          src={carouselElement.img}
          alt="First slide"
        /> */}
        <Image className=" d-block w-100" src={carouselElement.img} fluid />
      </Carousel.Item>
    ));
    return carouselItems;
  }
}

export default ImageSlide;
