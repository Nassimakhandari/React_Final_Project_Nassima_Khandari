import React from 'react';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import '../../style/contact.css'
const Conatct = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_xqzpves', 'template_60vf14z', form.current, {
                publicKey: 'gd3PeyPA7DcAgU_yD',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <>
            <div className="bg-image relative">
            </div>
            <div className='absolute top-[25%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center gap-4'>
                <h1 className='text-5xl text-white font-bold'>CONTACT</h1>
            </div>
            <div className='flex justify-center items-center pb-11 respo-contact'>
                <div className='pt-11 respo-maps'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.058438495086!2d-7.536426624459416!3d33.6037881733291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1726185198454!5m2!1sfr!2sma" width="500" height="470" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                </div>
                <div>
                    <div className='w-[40vw] flex flex-col gap-7 p-16 mx-auto mt-10 rounded-xl respo-form'>
                        <h1 className=' text-3xl font-light'>Send us your message</h1>
                        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 items-start justify-start">
                            <input className="ps-5 border w-[33vw] h-10 rounded-sm" type="text" name='Full name' placeholder="Full name" />
                            <input className="ps-5 border w-[33vw] h-10 rounded-sm" type="email" name='Email' placeholder="Enter your email" />
                            <input className="ps-5 border w-[33vw] h-10 rounded-sm" type="text" name='Email' placeholder="Phone" />
                            <textarea className="ps-5 border h-32 w-[33vw] rounded-sm " placeholder="Message" name='Message'></textarea>
                            <button className="bg-black text-white text-center py-2 px-11 rounded-full ">SEND</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Conatct;