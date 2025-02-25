import React from "react";
import { NavBar } from "../Navbar/NavBar";
import { Carousel } from "../Carousel/Carousel";
import ProductMenu from "../Product-menu/product-menu";

export const MainView: React.FC = () => {
    return (
        <div className="App-header">
            <NavBar />
            <div>
                <section id="home">
                   <Carousel/>
                </section>
                <section id="menu">
                    <h1>Menu</h1>
                    <p>Welcome to the Menu section.</p>
                    <ProductMenu/>
                </section>
                <section id="about">
                    <h1>About Us</h1>
                    <p>Welcome to the About Us section.</p>
                </section>
                <section id="contact">
                    <h1>Contact</h1>
                    <p>Welcome to the Contact section.</p>
                </section>
            </div>
        </div>
    );
};