import React from 'react';
import './project.css';
import img1 from "../Images/img1.webp";
import img2 from "../Images/img2.webp";
import img3 from "../Images/img3.webp";
import img4 from "../Images/img4.webp";
import img5 from "../Images/img5.webp";
import img6 from "../Images/img6.webp";

const Project = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img1} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio_item_CTA">
            <a href="" className="btn" target="_blank">
              Github
            </a>
            <a href="" className="btn btn-primary" target="_blank">
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Project