import { useState } from "react";
import { Button } from "react-bootstrap";
import { ProductCard } from "../Product-card/product-card";
import "./product-menu.scss";

export default function ProductMenu() {

  const cardData = [
    {
      title: "Hammer",
      description: "A sturdy tool used for driving nails into surfaces.",
      imageUrl: "https://images.unsplash.com/photo-1564767609342-620cb19b2357"
    },
    {
      title: "Screwdriver Set",
      description: "A collection of screwdrivers for different screw types.",
      imageUrl: "https://images.unsplash.com/photo-1585126201710-3c4d0bdbf1f4"
    },
    {
      title: "Adjustable Wrench",
      description: "A versatile wrench that fits various nut sizes.",
      imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1d636df"
    },
    {
      title: "Cordless Drill",
      description: "Rechargeable drill for efficient drilling and screwing.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Tape Measure",
      description: "A retractable tool for measuring distances accurately.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Utility Knife",
      description: "A sharp, retractable blade for cutting materials.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Spirit Level",
      description: "A tool used to check if a surface is perfectly level.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Pliers",
      description: "A gripping tool used for holding or bending materials.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Hand Saw",
      description: "A manual saw for cutting wood or plastic.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    },
    {
      title: "Ladder",
      description: "A sturdy, portable structure for reaching high places.",
      imageUrl: "https://images.unsplash.com/photo-1585126150613-4a3b9a3b1f3e"
    }
  ];

  const categories = [
    "All",
    "Power Tools",
    "Hand Tools",
    "Fasteners & Fixings",
    "Building Materials",
    "Electrical & Plumbing"
  ];

  const [selectedBtn, setSelectedBtn] = useState(categories[0]);

  function handleBtnClick(val: string) {
    setSelectedBtn(val);
  }


  return (
    <div className="menu-container">
      <div className="menu-title">
        <h2>Feature Products</h2>
      </div>
      <div className="menu-btn-container">
        {categories.map((btn, index) => (
          <Button key={index} className={`menu-btn ${btn === selectedBtn ? "active" : ""}`}
            onClick={() => handleBtnClick(btn)}>{btn}</Button>
        ))}
      </div>
      <div className="menu-card-container">
        {cardData.map((card, index) => (
          <ProductCard key={index} title={card.title} description={card.description} imageUrl={card.imageUrl} />
        ))}
      </div>
    </div>
  );
}
