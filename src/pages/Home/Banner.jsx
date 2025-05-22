import React from 'react';
import { motion } from 'motion/react';
import banner1 from "../../assets/team/banner1.jpg";
import banner2 from "../../assets/team/banner2.jpg";

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={banner1}
                        animate={{ y: [50, 100, 50] }} transition={{ duration: 6, repeat: Infinity }}
                        className="max-w-sm shadow-2xl w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-green-300" />

                    <motion.img
                        src={banner2}
                        animate={{ x: [100, 150, 100] }} transition={{ duration: 6, repeat: Infinity }}
                        className="max-w-sm shadow-2xl w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-green-300" />
                </div>
                <div className='flex-1'>

                    <motion.h1 animate={
                        {
                            x: 50,

                        }
                    } transition={{
                        ease: "easeOut",
                        repeat: Infinity,
                        duration: 2,
                        delay: 1
                    }} className="text-5xl font-bold">Latest <motion.span animate={{
                        color: ['#00e4ff', '#f9fc00'], duration: 2, repeat: Infinity
                    }}>Jobs</motion.span> for You!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;