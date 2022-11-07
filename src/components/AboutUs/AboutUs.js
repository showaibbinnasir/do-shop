import React from 'react';
import image from '../../assets/images/about_us/person.jpg'
const AboutUs = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row md:flex-row justify-center items-center gap-5 mt-12'>
            <div>
                <img className='w-[340px] rounded-xl' src={image} alt="" />
            </div>
            <div className='w-[340px]'>
                <h1 className='text-red-400 font-bold'>About Us</h1>
                <h1>We are qualified & of experience in this field</h1>
                <h1>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </h1>
                <button className="btn btn-outline btn-primary mt-2">See our product</button>
            </div>
        </div>
    );
};

export default AboutUs;