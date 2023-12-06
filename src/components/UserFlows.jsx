import React, { useEffect, useState } from 'react';

const UserFlows = () => {
    const [imgs, setImgFields] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/imgWW_JSON`)
            .then(response => response.json())
            .then(data => setImgFields(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div name="imgSlideBlack" className='w-full mx-auto py-16 flex flex-col items-center justify-center bg-[#1F1F21]'>
            {imgs ? (
                <div className='w-full mx-auto flex flex-col items-center justify-center'>
                    <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>How Will They Use Our App?</h1>
                    <img className='max-h-[640px] mx-auto p-8' src={imgs.userflows_img} alt='app architecture' />
                </div>
            ) : (<p>Loading User Flows...</p>)}
        </div>
    )
}

export default UserFlows