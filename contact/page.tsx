"use client";
import { useState } from "react";


export default function ContactForm() {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    


    return (
    <div className=" w-full h-screen   md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden ">
    
    
        <div className="md:flex items-start justify-center md:py-20 px-6">
        <div className="">
            <div className="text-5xl font-medium  w-full md:w-2/3  pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
            </div>
            <div
            className="  
                py-4 text-gray-300"
            >
            Let&apos;s talk about how Bit can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b ">
              <div className=" font-normal pb-4 ">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4  ">
              <div className=" font-normal pb-4 ">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
        </div>
        </div>
        </div>
        <div className="md:flex items-start justify-center md:py-10 px-6">
        <div className="bg-[#f6f5f4] md:w-8/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col text-center ">
            <div className="flex gap-4 border-b ">
            <div className=" text-steal-900/100  text-2xl text-bold">
                Contact us on 91-70021 87641 or sent us an email on BizBytecreator@gmail.com
            </div>
            </div>
            </div>
        </div>
        </div>
        
  );
}