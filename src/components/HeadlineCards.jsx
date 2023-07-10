import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-p[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> Sun's Out, BOGO's Out</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/6740508/pexels-photo-6740508.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> New Vendors</p>
                <p className='px-2'> Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/4374580/pexels-photo-4374580.jpeg?auto=compress&cs=tinysrgb&w=800' alt='' />
        </div>
        {/*Card*/}
        <div className='rounded-xl relative'>
            {/*Overlay*/}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'> We Deliver Fresh</p>
                <p className='px-2'>Always</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
                    Order Now
                </button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/3085062/pexels-photo-3085062.jpeg?auto=compress&cs=tinysrgb&w=600' alt='' />
        </div>
    </div>
    // I could use a reusable element code but there's only three cards! so I've decided to just duplicate!
  );
};

export default HeadlineCards