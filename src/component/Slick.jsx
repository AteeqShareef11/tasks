import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>
            <div style={{ width: "10% !important" }}>
                <div style={{ backgroundColor: "lightblue", height: "100%", padding: "20px" }}>
                    <h3>1</h3>
                </div>
            </div>
            <div style={{ width: "80%" }}>
                <div style={{ backgroundColor: "lightgreen", height: "100%", padding: "20px" }}>
                    <h3>2</h3>
                </div>
            </div>
            <div style={{ width: "10%" }}>
                <div style={{ backgroundColor: "lightcoral", height: "100%", padding: "20px" }}>
                    <h3>3</h3>
                </div>
            </div>
            <div style={{ width: "33.33%" }}>
                <div style={{ backgroundColor: "lightskyblue", height: "100%", padding: "20px" }}>
                    <h3>4</h3>
                </div>
            </div>
            <div style={{ width: "66.66%" }}>
                <div style={{ backgroundColor: "lightpink", height: "100%", padding: "20px" }}>
                    <h3>5</h3>
                </div>
            </div>
            <div style={{ width: "33.33%" }}>
                <div style={{ backgroundColor: "lightseagreen", height: "100%", padding: "20px" }}>
                    <h3>6</h3>
                </div>
            </div>
        </Slider>
    );
}
