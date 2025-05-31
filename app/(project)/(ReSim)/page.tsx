import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "ReSim | OpenDriveLab",
    description: "ReSim",
    keywords: ["ReSim", "OpenDriveLab", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"



import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <main className="w-full h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory">



            <div className="w-full h-screen flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center p-20 snap-start">
                
                <div className="flex-1/2  h-full flex flex-col justify-center select-none">
                    <AspectRatio ratio={16/9}>
                        <Image
                            src="https://ik.imagekit.io/opendrivelab/univla"
                            alt="ReSim"
                            fill
                            className="rounded-sm object-cover bg-gradient-landing"
                        />
                    </AspectRatio>
                </div>


                <div className="flex-1/2 flex flex-col gap-10 justify-around select-none">
                    <div className="flex flex-col gap-10 w-full">
                        <h1 className="text-t1 font-bold w-full">
                            Resim xxx
                        </h1>
                        <h2 className="w-full">
                            Jiazhi Yang
                        </h2>
                    </div>
                </div>

                

            </div>



            <div className="w-full h-screen flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center p-20 snap-start">
                
                <div className="flex-1/2  h-full flex flex-col justify-center select-none">
                    <AspectRatio ratio={16/9}>
                        <Image
                            src="https://ik.imagekit.io/opendrivelab/univla"
                            alt="ReSim"
                            fill
                            className="rounded-sm object-cover bg-gradient-landing"
                        />
                    </AspectRatio>
                </div>


                <div className="flex-1/2 flex flex-col gap-10 justify-around select-none snap-start">
                    <div className="flex flex-col gap-10 w-full">
                        <h1 className="text-t1 font-bold w-full">
                            Resim xxx
                        </h1>
                        <h2 className="w-full">
                            Jiazhi Yang
                        </h2>
                    </div>
                </div>

                

            </div>


            <footer className="w-full mb-24 flex flex-col gab-10">
                <div className="w-full pl-6 pr-6 flex flex-row justify-center mt-24">
                    <div className="max-w-4xl w-full flex flex-row justify-between">
                        <div className="flex-1 flex flex-col justify-start">
                            <span className="select-none">Resim © 2025</span>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
    );
}
