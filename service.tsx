"use client";
import { CardHoverEffectDemo } from "./cardcode/crad-hover-effect-snippe";

const Services = () => {
    return ( 
        <div>
        <div className="p-4 mx-auto relative z-10 w-full py-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-600/70 to bg-neutral-50W bg-opacity-50">
                    Streamline your business with our services
                    </div>
    </div>
    <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center  mx-auto px-4">
        From website design to social media management ,we offer a wide range of service
    </p>

    <CardHoverEffectDemo />
    </div>

        );
}
            
export default Services;