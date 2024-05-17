"use client";
import Navbar from "@/components/navbar";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import SliderOne from "@/components/ui/slider";
import GraphicDesign from "./graphic-design";
import WebsiteDesign from "./website-design";
import ShopifyStores from "./shopify";
import Brands from "./brands";
import Services from "./service";
import FAQS from "./faq";
import { useRef } from "react";

export default function Home(){

    const websiteDesignRef = useRef<HTMLDivElement>(null);
    const graphicDesignRef = useRef<HTMLDivElement>(null);
    const shopifyStoresRef = useRef<HTMLDivElement>(null);
    const brandsRef= useRef<HTMLDivElement>(null);
    const servicesRef=useRef<HTMLDivElement>(null);
    
    const scrollToWebsiteDesign = () => {
      websiteDesignRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    };
  
    const scrollToGraphicDesign = () => {
      graphicDesignRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    const scrollToShopifyStores = () => {
      shopifyStoresRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    const scrollToBrands = () => {
      brandsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
    // Function to scroll to Services section
    const scrollToServices = () => {
      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    


  return(
    <div className="w-full  md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
       scrollToWebsiteDesign={scrollToWebsiteDesign}
       scrollToGraphicDesign={scrollToGraphicDesign}
       scrollToShopifyStores={scrollToShopifyStores}
       scrollToBrands={scrollToBrands}
       scrollToServices={scrollToServices}
      />
      <Spotlight
      className="hidden md:flex md:left-80 "
      fill="white"/>

      <div className="p-4 mx-auto relative z-10 w-full py-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-to-
                    from-neutral-50 to bg-neutral-400 bg-opacity-50">
                      Create ,Grow , and  <br /> Manage your  business
                    </div>
      </div>
      <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center  mx-auto px-4">
        Best solutions for your business . We are a team of creatives who are excited to help you grow your business
      </p>

    


          <div className="w-full pt-20">
            <SliderOne />


            <div ref={websiteDesignRef}>
            <WebsiteDesign/>
            </div>
            <div ref={graphicDesignRef}>
            <GraphicDesign />
            </div>
            <div ref= {shopifyStoresRef}>
            <ShopifyStores />
            </div>
            <div ref={brandsRef}>
            <Brands />
            </div>
            
            <Services />
            <FAQS />
          </div>
    </div>
  );
}