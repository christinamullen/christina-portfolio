import React, { useEffect, useState } from 'react';


const EmpathyMap = () => {
    const [empMap, setImgFields] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/imgWW_JSON`)
            .then(response => response.json())
            .then(data => setImgFields(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div name='empathyMap' className=' flex flex-col justify-center bg-[#1F1F21]'>
            {empMap ? (
                <div className='w-full mx-auto flex flex-col items-center justify-center'>
                    <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 mt-20 mb-4 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'> Host Empathy Map</h1>
                    <img className='max-w-[800px] mx-auto p-4' src={empMap.empathy_map2} alt='emapthy map for a host' />
                </div>
            ) : (<p>Loading empathy map...</p>)}
        </div>
    )
}

export default EmpathyMap