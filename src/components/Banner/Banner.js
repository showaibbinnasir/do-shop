import React from 'react';
import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'
import './Banner.css'
const Banner = () => {
    return (
        <div className='flex justify-center'>
            <div className="carousel w-full lg:w-2/3">
              <div id="slide1" className="carousel-item relative w-full">
                <div className='carousal-img'>
                  <img src={img1} className="w-full rounded-2xl" alt='hwllo' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide2" className="btn btn-circle btn-secondary">❯</a>
                </div>
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <h1 className='text-2xl lg:text-6xl text-white font-semibold'>Affordable Bussiness</h1>
                  <h1 className='text-sm text-white font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                  <div className='flex gap-4 items-center justify-center mt-5'>
                    <button className="btn btn-outline btn-primary">Our services</button>
                    <button className="btn btn-outline btn-secondary">Sign Up</button>
                  </div>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
              <div className='carousal-img'>
                  <img src={img2} className="w-full rounded-2xl" alt='hwllo' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide3" className="btn btn-circle btn-secondary">❯</a>
                </div>
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <h1 className='text-2xl lg:text-6xl text-white font-semibold'>Affordable Bussiness</h1>
                  <h1 className='text-sm text-white font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                  <div className='flex gap-4 items-center justify-center mt-5'>
                    <button className="btn btn-outline btn-primary">Our services</button>
                    <button className="btn btn-outline btn-secondary">Sign Up</button>
                  </div>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
              <div className='carousal-img'>
                  <img src={img3} className="w-full rounded-2xl" alt='hwllo' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide4" className="btn btn-circle btn-secondary">❯</a>
                </div>
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <h1 className='text-2xl lg:text-6xl text-white font-semibold'>Affordable Bussiness</h1>
                  <h1 className='text-sm text-white font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                  <div className='flex gap-4 items-center justify-center mt-5'>
                    <button className="btn btn-outline btn-primary">Our services</button>
                    <button className="btn btn-outline btn-secondary">Sign Up</button>
                  </div>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
              <div className='carousal-img'>
                  <img src={img4} className="w-full rounded-2xl" alt='hwllo' />
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide1" className="btn btn-circle btn-secondary">❯</a>
                </div>
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <h1 className='text-2xl lg:text-6xl text-white font-semibold'>Affordable Bussiness</h1>
                  <h1 className='text-sm text-white font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. </h1>
                  <div className='flex gap-4 items-center justify-center mt-5'>
                    <button className="btn btn-outline btn-primary">Our services</button>
                    <button className="btn btn-outline btn-secondary">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;