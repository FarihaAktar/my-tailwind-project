import React from 'react';

const Content = () => {
    return (
        <div className='bg-gray-100 '>
            <h1 className='text-center p-5 text-4xl italic font-serif '>Work Experience</h1>
            <div className='grid gap-10 lg:grid-cols-2 sm:grid-cols-1  w-11/12 p-3 m-auto font-serif mt-3'>
                <div className='flex flex-col items-center shadow-2xl p-5'>
                    <img className='w-48 h-48 object-cover rounded-full' src="https://site.adform.com/media/87529/adform_flow_1080px.png" alt="" />
                    <h2 className='font-bold text-2xl text-center mb-2'>Ad Serving <br /> & Programmatic Specialist</h2>
                    <p>Vilnius, Lithuania</p>
                    <p className='font-bold'>Present- 5/2021</p>
                </div>
                <div className='flex flex-col items-center shadow-2xl p-5 '>
                    <img className='w-48 h-48 object-cover rounded-full' src="https://i.pinimg.com/originals/b0/fe/72/b0fe727930e7047494bacb740e381f05.png" alt="" />
                    <h2 className='font-bold text-2xl text-center mb-2'>IT Service Desk Analyst</h2>
                    <p>Vilnius, Lithuania</p>
                    <h6 className='font-bold'>User support specialist</h6>
                    <p className='font-bold'>01/2020 - 05/2021</p>
                    <p> <span className='font-bold text center'> Contact: </span>Lina Nevulyte (HR) <br /> lina.nevulyte@hcl.com</p>
                </div>

            </div>
            <div className='flex flex-col items-center shadow-2xl p-5 lg:w-5/12 m-auto sm:w-11/12 mb-10'>
                <img className='w-64 h-48 object-cover mb-2' src="https://pinoyjobs.ph/wp-content/uploads/2017/01/Transcom_Logo.jpg" alt="" />
                <h2 className='font-bold text-2xl text-center mb-2' >Jr. Logistic Coordinator</h2>
                <p>Vilnius, Lithuania</p>
                <h6 className='font-bold '>Global customer experience specialist</h6>
                <p className='font-bold '>09/2019 - 01/2020,</p>
                <p> <span className='font-bold text-center '> Contact: </span>Aistė Vasilkevičienė <br /> aiste.vasilkeviciene@transcom.com</p>
            </div>
        </div>
    );
};

export default Content;