"use client";
import { motion } from "framer-motion";
import { ThreeDCardExample } from "./cardcode/3d-card-code";
import { EvervaultCardExample } from "./cardcode/evervault-card-snippet";

const GraphicDesign = () => {
    return ( 
        <div>
        <div className="p-4 mx-auto relative z-10 w-full py-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-to-
                    from-purple-500 to bg-cyan-900 bg-opacity-50">
                        Graphic Design 
                    </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center  mx-auto px-4">
            Our team create stunning visulas for your brand . From logos to social media post, we got it covered.
        </p>
        <div className="items-ceter md:flex justify-center md:mx-autoo md:space-x-10">
            <motion.div
                    initial={{y:100, opacity: 0 }}
                    animate ={{ y:0, opacity:1 }}
                    className="px-10 md:px-0">
                        <ThreeDCardExample/>
                    </motion.div>
                    
                    <motion.div
                    initial={{y:100, opacity: 0 }}
                    animate ={{ y:0, opacity:1 }}
                    className="px-10 md:px-0">
                        <EvervaultCardExample/>
                    </motion.div>
        </div>
        </div>
    </div>
    );
    }
 
export default GraphicDesign;