import Image from "next/image"
const WebsiteDesign = () => {
    return (  
    <div className="text-white">
    <div className="p-4 mx-auto relative z-10 w-full py-10 md:pt-20 px-2">
        <div className="text-4xl pb-5 md:text-7xl px-6 text-center  bg-clip-text text-transparent bg-gradient-to-to-
                    from-purple-500 to bg-sky-200 bg-opacity-50">
                        BizByte   <br /> get help from professionals
                    </div>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center  mx-auto px-4">
            Creating, designing and developing websites that work for your business.
        </p>
        </div>
        

<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <Image
                width={500}
                height={500}
                priority 
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""></Image>
        </div>
        <div>
            <Image 
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""></Image>
        </div>
        <div>
            <Image 
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image 
            width={500}
            height={500}
            priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""></Image>
        </div>
        <div>
            <Image 
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""></Image>
        </div>
        <div>
            <Image
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image 
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt=""></Image>
        </div>
        <div>
            <Image
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt=""></Image>
        </div>
        <div>
            <Image
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""></Image>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <Image
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt=""></Image>
        </div>
        <div>
            <Image
                width={500}
                height={500}
                priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt=""></Image>
        </div>
        <div>
            <Image
                    width={500}
                    height={500}
                    priority
            className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt=""></Image>
        </div>
    </div>
    </div>
    </div>);
}
    
export default WebsiteDesign;