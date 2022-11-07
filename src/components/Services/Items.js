import React from 'react';

const Items = ({content}) => {
    return (
        <div className='flex justify-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={content.image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{content.service}</h2>
                    <p className='text-red-400'>Price : {content.price}$</p>
                    <div className="card-actions">
                    <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Items;