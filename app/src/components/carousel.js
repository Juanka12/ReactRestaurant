import { useEffect } from "react";
import "../styles/carousel.css"
import shopItems from "../data/shopItems.json"

let slideIndex = 0;
let slides;
let dots;

function Carousel() {
    useEffect(() => {
        slides = document.getElementsByClassName("slide");
        dots = document.getElementsByClassName("dot");
        showSlides();
    })

    return (
        <>
            <div className="carousel-body">
                <div className="slide fade">
                    <img className="slide-img" src={shopItems[Math.round(Math.random() * shopItems.length)].imgUrl} alt="slideImg"/>
                </div>
                <div className="slide fade">
                    <img className="slide-img" src={shopItems[Math.round(Math.random() * shopItems.length)].imgUrl} alt="slideImg"/>
                </div>
                <div className="slide fade">
                    <img className="slide-img" src={shopItems[Math.round(Math.random() * shopItems.length)].imgUrl} alt="slideImg"/>
                </div>
            </div>
            <br/>
            <div className="carousel-dots">
                <span className="dot" onClick={() => showSlides(1)}></span>
                <span className="dot" onClick={() => showSlides(2)}></span>
                <span className="dot" onClick={() => showSlides(3)}></span>
            </div>
        </>
    );
}

function showSlides(id) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].className = "dot";
    }
    if (id == null) {
        slideIndex++;
        setTimeout(showSlides, 4000);
    }else {
        slideIndex = id;
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " activeDot";
}

export default Carousel;