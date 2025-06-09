import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "ReSim | OpenDriveLab",
    description: "ReSim",
    keywords: ["ReSim", "OpenDriveLab", "HKU", "SII"],
};



import Image from 'next/image'
import Link from "next/link"
import DouDoubleTabSelector from "@/components/ui/doubletab"


import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function Home() {
    return (
        <main className="w-full h-screen overflow-x-hidden">



            <div className="w-full h-screen flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center items-center p-20  xl:pt-20  ">
                <div className="flex-1/2 h-1/3 w-full xl:h-full flex flex-col justify-center select-none">
                    <AspectRatio ratio={16/9}>
                        <Image
                            src="https://ik.imagekit.io/opendrivelab/univla"
                            alt="ReSim"
                            fill
                            className="rounded-sm object-cover bg-gradient-landing"
                        />
                    </AspectRatio>
                </div>
                <div className="flex-1/2 flex flex-col gap-3 justify-around">
                    <div className="flex flex-col gap-10 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-7xl 2xl:text-9xl font-bold w-full color-text-1">
                                ReSim
                            </h1>
                            <h1 className="text-4xl 2xl:text-6xl font-bold w-full  color-text-1 pb-3">
                                Reliable World Simulation for Autonomous Driving
                            </h1>
                        </div>
                        <h2 className="text-lg w-full">
                            <a href="https://github.com/YTEP-ZHI" className="text-o-blue hover:underline">Jiazhi Yang</a><sup className="align-super text-sm">1,6</sup>,{' '}
                            <a href="https://kashyap7x.github.io/" className="text-o-blue hover:underline">Kashyap Chitta</a><sup className="align-super text-sm">4,7,8</sup>,{' '}
                            <a href="https://github.com/Little-Podi" className="text-o-blue hover:underline">Shenyuan Gao</a><sup className="align-super text-sm">6</sup>,{' '}
                            <a href="https://long.ooo/" className="text-o-blue hover:underline">Long Chen</a><sup className="align-super text-sm">3</sup>,{' '}
                            <a href="https://meteorcollector.github.io/" className="text-o-blue hover:underline">Yuqian Shao</a><sup className="align-super text-sm">5</sup>,{' '}
                            <a href="https://jiaxiaosong1002.github.io/" className="text-o-blue hover:underline">Xiaosong Jia</a><sup className="align-super text-sm">5</sup>,{' '}
                            <br/>
                            <a href="https://lihongyang.info/" className="text-o-blue hover:underline">Hongyang Li</a><sup className="align-super text-sm">2</sup>,{' '}
                            <a href="https://www.cvlibs.net/" className="text-o-blue hover:underline">Andreas Geiger</a><sup className="align-super text-sm">7,8</sup>,{' '}
                            <a href="https://xyue.io/" className="text-o-blue hover:underline">Xiangyu Yue</a><sup className="align-super text-sm">1</sup>,{' '}
                            <a href="https://scholar.google.com/citations?user=ulZxvY0AAAAJ&hl=en" className="text-o-blue hover:underline">Li Chen</a><sup className="align-super text-sm">2</sup>{' '}
                        </h2>
                        <h2 className="text-lg w-full -mt-8">
                            <sup className="align-super text-sm">1</sup>The Chinese University of Hong Kong {'  '}
                            <sup className="align-super text-sm">2</sup>The University of Hong Kong {'  '}
                            <sup className="align-super text-sm">3</sup>Xiaomi EV {'  '}
                            <sup className="align-super text-sm">4</sup>NVIDIA Research {'  '}
                            <br/>
                            <sup className="align-super text-sm">5</sup>Shanghai Jiao Tong University {'  '}
                            <sup className="align-super text-sm">6</sup>OpenDriveLab at Shanghai AI Lab  {'  '}
                            <sup className="align-super text-sm">7</sup>University of Tübingen  {'  '}
                            <sup className="align-super text-sm">8</sup>Tübingen AI Center  {'  '}
                        </h2>
                        <p className="text-2xl w-full">
                            arXiv | Code in July
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-t1 font-bold" id="introduction">
                    Introduction
                </h1>
            </div>
            <div className="flex flex-row justify-center px-6 ">
                <p className="max-w-[1024px] text-xl text-justify leading-relaxed">
                    How can we reliably simulate future driving scenarios under a wide range of
                    ego driving behaviors? Recent driving world models, developed exclusively on
                    real-world driving data composed mainly of safe expert trajectories, struggle to
                    follow hazardous or non-expert behaviors, which are rare in such data. This limitation 
                    restricts their applicability to tasks such as policy evaluation. In this work,
                    we address this challenge by enriching real-world human demonstrations with
                    diverse non-expert data collected from a driving simulator (e.g., CARLA), and
                    building a controllable world model trained on this heterogeneous corpus. Starting
                    with a video generator featuring a diffusion transformer architecture, we devise
                    several strategies to effectively integrate conditioning signals and improve 
                    prediction controllability and fidelity. The resulting model, ReSim, enables Reliable
                    Simulation of diverse open-world driving scenarios under various actions, including
                    hazardous non-expert ones. To close the gap between high-fidelity simulation and
                    applications that require reward signals to judge different actions, we introduce a
                    Video2Reward module that estimates a reward from ReSim's simulated future. Our
                    ReSim paradigm achieves up to 44% higher visual fidelity, improves controllability
                    for both expert and non-expert actions by over 50%, and boosts planning and policy
                    selection performance on NAVSIM by 2% and 25%, respectively.
                </p>
            </div>



            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-t1 font-bold" id="action_control_nuscenes">
                    Action Control
                </h1>
                <h1 className="text-3xl font-bold">
                    nuScenes (Zero-shot)
                </h1>
            </div>



            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="w-1/4 h-full flex flex-col justify-evenly items-center">
                    <h2 className="text-3xl font-bold">
                        nuScenes (Zero-shot)
                    </h2>
                </div>
                <div className="w-3/4 h-full flex flex-col justify-evenly items-center">
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-3/4 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes1.mp4"/>
                    </video>
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-3/4 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_control/nuScenes2.mp4"/>
                    </video>
                </div>
            </div>



            <div className="w-full h-32 flex flex-col justify-center items-center">
                <h1 className="text-t1 font-bold" id="action_control_waymo">
                    Action Control
                </h1>
            </div>
            <div className="w-full h-full flex flex-row justify-center items-center">
                <div className="w-1/4 h-full flex flex-col gap-20 justify-evenly items-center">
                    <h2 className="text-3xl font-bold">
                        Waymo (Zero-shot)
                    </h2>
                </div>
                <div className="w-3/4 h-full flex flex-col gap-20 justify-evenly items-center">
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-3/4 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo1.mp4"/>
                    </video>
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-3/4 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_control/Waymo2.mp4"/>
                    </video>
                </div>
            </div>



            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-t1 font-bold" id="action_free">
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
                        className="w-2/3 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_free/NAVSIM.mp4"/>
                    </video>
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-2/3 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_free/nuScenes.mp4"/>
                    </video>
                    <video
                        preload="none"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-2/3 object-fit rounded-sm bg-gradient-landing"
                        >
                        <source src="https://opendrivelab.github.io/ReSim/action_free/Waymo.mp4"/>
                    </video>
                </div>
            </div>



            <div className="w-full flex flex-col justify-center items-center gap-3 px-6 my-32">
                <h1 className="text-t1 font-bold" id="comparison">
                    Comparison
                </h1>
            </div>


            <div className="w-full px-6 flex flex-col justify-center gap-20 items-center">
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[1280px] rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison1.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[1280px] rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison2.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[1280px] rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison3.mp4"/>
                </video>
                <video
                    preload="none"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full max-w-[1280px] rounded-sm bg-gradient-landing"
                    >
                    <source src="https://opendrivelab.github.io/ReSim/method_comparisons/comparison4.mp4"/>
                </video>
            </div>



            <div className="w-full h-32 flex flex-col justify-center items-center">
                <h1 className="text-t1 font-bold" id="comparison">
                    Comparison
                </h1>
            </div>
            <DouDoubleTabSelector/>



            <footer className="w-full mb-24 flex flex-col gab-10  ">
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
