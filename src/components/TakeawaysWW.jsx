import React, { useEffect, useState } from 'react';

const TakeawaysWW = () => {
    const [ta, setImgFields] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/imgWW_JSON`)
            .then(response => response.json())
            .then(data => setImgFields(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <div name='takeaways' className='flex flex-col justify-center bg-[#9995C8]'>
            {ta ? (
                <div className='w-full mx-auto px-8 sm:px-32 pt-8 flex flex-col items-center justify-center bg-[#9995C8]'>
                    <h1 className='sm:text-4xl font-bold inline border-4 px-4 py-2 my-8 tracking-wider bg-[#1F1F21] border-pink-600 text-[#F5F5FA]'>Takeaways</h1>
                    <p className='max-w-[640px] pb-16'>
                        {ta.takeaways_ww}
                    </p>
                </div>
            ) : (<p>Loading Competitive Analysis...</p>)}
        </div>
    )
}

export default TakeawaysWW