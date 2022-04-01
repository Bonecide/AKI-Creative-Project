import React, { Component, useState } from "react";
import Slider from "react-slick";
import './Slider.scss'
import SlidesCard from "./SlidesCard";

export default class CenterMode extends Component {
  render() {
    const recomendationInfo = [
        {
            id:1 ,
            img : '/images/CreativeFilm.png',
            title: 'Фильмы, развивающие креативность ',
            body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  '
        },
        {
            id:2 ,
            img : '/images/CreativeBooks.png',
            title: 'Книги, развивающие креативность ',
            body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            id:3 ,
            img : '/images/CreativeSongs.png',
            title: 'Nemo enim ipsam ',
            body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
        {
            id:4 ,
            img : '/images/CreativeFilm.png',
            title: 'Фильмы, развивающие креативность ',
            body: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.  '
        },
        {
            id:5 ,
            img : '/images/CreativeBooks.png',
            title: 'Книги, развивающие креативность ',
            body: 'Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.'
        },
        {
            id:6 ,
            img : '/images/CreativeSongs.png',
            title: 'Nemo enim ipsam ',
            body: 'Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
        },
    ]
    const settings = {
      className: "center",
      infinite:  false, 
      dots: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="tops-slider">
        <div className="container">
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        <div className="prev_block"/> 
          <Slider slidesToScroll={3} customPaging={(i)=><div className="dots-pag">{i+1}</div>} dotsClass="slick-dots" {...settings}>
           
            {recomendationInfo.map ((info) => (
                <SlidesCard key={info.id} title={info.title} body={info.body} img={info.img}/>
                ))}
            
          </Slider>
          <div className="after_block"/>
        </div>
      </div>
    );
  }
}