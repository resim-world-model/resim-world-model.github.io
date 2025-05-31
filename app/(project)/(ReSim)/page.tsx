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
                        <span>你先写内容，然后我再拍版</span>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-row justify-center items-center">
                    <h1 className="text-t1 font-bold">
                        Action Control
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-1/4 h-full flex flex-col gap-20 justify-evenly items-center">
                        <h2 className="text-3xl font-bold">
                            nuScenes
                        </h2>
                    </div>
                    <div className="w-3/4 h-full flex flex-col gap-20 justify-evenly items-center">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes1.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes2.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-col justify-center items-center">
                    <h1 className="text-t1 font-bold">
                        Action Control
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-1/4 h-full flex flex-col gap-20 justify-evenly items-center">
                        <h2 className="text-3xl font-bold">
                            Waymo
                        </h2>
                    </div>
                    <div className="w-3/4 h-full flex flex-col gap-20 justify-evenly items-center">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo1.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo2.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-col justify-center items-center">
                    <h1 className="text-t1 font-bold">
                        Action-Free
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-1/4 h-full flex flex-col gap-20 justify-between items-center">
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold">
                                NAVSIM
                            </h2>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold">
                                nuScenes
                            </h2>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold">
                                Waymo
                            </h2>
                        </div>
                    </div>
                    <div className="w-3/4 h-full flex flex-col gap-20 justify-between items-center">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/NAVSIM.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/nuScenes.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/action_free/Waymo.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-col justify-center items-center">
                    <h1 className="text-t1 font-bold">
                        Long Horizon
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-full h-full flex flex-col gap-20 justify-evenly items-center">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/long_horizon/long_horizon1.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/3 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/long_horizon/long_horizon1.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-col justify-center items-center">
                    <h1 className="text-t1 font-bold">
                        Comparison
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-full h-full flex flex-col gap-20 justify-evenly items-center">
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/8 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison1.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/8 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison2.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/8 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison3.mp4"/>
                        </video>
                        <video
                            preload="none"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-1/8 object-fit rounded-sm bg-gradient-landing"
                            >
                            <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison4.mp4"/>
                        </video>
                    </div>
                </div>
            </div>



            <footer className="w-full mb-24 flex flex-col gab-10 snap-start">
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
