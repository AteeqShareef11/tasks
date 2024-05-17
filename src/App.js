import React from "react";
import "./App.css";
import Carousel from "./component/Carousel";
import SimpleSlider from "./component/Slick";
import DemoComponent from "./component/Flick";

const slides = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
];
const sample = [
  {
    items: [
      { "image-url": "https://via.placeholder.com/800x400?text=Slide+3" },
      { "image-url": "https://i.imgur.com/8yIIokW.jpg" },
      { "image-url": "https://via.placeholder.com/800x400?text=Slide+3" },
    ],
  },
];

const slidesData = [
  {
    title: "Nanda Kot peak",
    description: "Mukteshwar, Uttarakhand",
    imgSrc: "https://source.unsplash.com/gkIXFjDRyDc/1600x700",
    altText: "Nanda Kot peak",
  },
  {
    title: "Manali Mountains",
    description: "Manali, Himachal Pradesh",
    imgSrc: "https://source.unsplash.com/oIXJ839p55k/1600x700",
    altText: "Manali Mountains",
  },
  {
    title: "Aotearoa",
    description: "New Zealand",
    imgSrc: "https://source.unsplash.com/MlWRXR18fAg/1600x700",
    altText: "Aotearoa",
  },
  {
    title: "Richmond Park",
    description: "London, England",
    imgSrc: "https://source.unsplash.com/jlVEj8IDPQc/1600x700",
    altText: "London’s Richmond Park",
  },
  {
    title: "Nanda Kot peak",
    description: "Mukteshwar, Uttarakhand",
    imgSrc: "https://source.unsplash.com/gkIXFjDRyDc/1600x700",
    altText: "Nanda Kot peak",
  },
  {
    title: "Manali Mountains",
    description: "Manali, Himachal Pradesh",
    imgSrc: "https://source.unsplash.com/oIXJ839p55k/1600x700",
    altText: "Manali Mountains",
  },
];

function App() {
  return (
    <div className="App">
      <h1>Custom Carousel</h1>
      <div className="site-container">
        <Carousel carouselId="carousel-1" slides={slidesData} />
      </div>
      {/* <SimpleSlider /> */}
      {/* <DemoComponent /> */}
    </div>
  );
}

export default App;
