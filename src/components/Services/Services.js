import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Items from './Items';



const Services = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('Service.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    console.log(data)
    return (
        <div className='mt-12'>
            <h1 className='text-2xl font-semibold text-red-400'>Services</h1>
            <h1 className='mt-2 text-4xl font-bold'>Our Service Area</h1>
            <h1><small>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</small> </h1>
            <div className='grid  grid-cols-2 lg:grid-cols-3 justify-center mt-12 gap-5 mx-6 lg:mx-20'>
                {
                    data.map(item => <Items key={item.id} content={item}></Items>)
                }
            </div>
        </div>
    );
};

export default Services;