import React, { useEffect, useState } from 'react';


const FeaturesImages = () => {
    const [imgs, setImgFields] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/imgWW_JSON`)
            .then(response => response.json())
            .then(data => setImgFields(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div name='featuresImages' className=' flex flex-col justify-center bg-[#1F1F21]'>
            {imgs ? (
                <div className='w-full mx-auto p-8 flex flex-col items-center justify-center'>

                    <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-20 mb-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Features</h1>
                    <div className='max-w-[1200px] w-full grid grid-cols-1 md:grid-cols-4 gap-8 py-8'>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>User Profiles</h1>
                            <img className='max-h-[360px] mx-auto' src={imgs.features_img1} alt='host profile prototype' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Chat Portal</h1>
                            <img className='max-h-[360px] mx-auto' src={imgs.chatportal_img} alt='inbox prototype' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Reviews</h1>
                            <img className='max-h-[360px] mx-auto' src={imgs.reviews_img} alt='reviews prototype' />
                        </div>
                        <div className='flex flex-col items-center justify-center'>
                            <h1 className='text-2xl font-bold inline py-2 text-[#F5F5FA]'>Experiences</h1>
                            <img className='max-h-[360px] mx-auto' src={imgs.feat_experiences} alt='home page experiences prototype' />
                        </div>
                    </div>

                </div>
            ) : (<p>Loading Features...</p>)}
        </div>
    )
}

export default FeaturesImages