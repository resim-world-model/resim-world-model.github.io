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
                <div className="flex-1/2 flex flex-col gap-3 justify-around">
                    <div className="flex flex-col gap-10 w-full">
                        <div className="flex flex-col gap-3">
                            <h1 className="text-9xl font-bold w-full color-text-1">
                                ReSim
                            </h1>
                            <h1 className="text-6xl font-bold w-full  color-text-1 pb-3">
                                Reliable World Simulation for Autonomous Driving
                            </h1>
                        </div>
                        <h2 className="text-2xl w-full">
                            <a href="https://github.com/YTEP-ZHI" className="hover:underline">Jiazhi Yang</a>,{' '}
                            <a href="https://kashyap7x.github.io/" className="hover:underline">Kashyap Chitta</a>,{' '}
                            <a href="https://github.com/Little-Podi" className="hover:underline">Shenyuan Gao</a>,{' '}
                            <a href="https://long.ooo/" className="hover:underline">Long Chen</a>,{' '}
                            <a href="https://meteorcollector.github.io/" className="hover:underline">Yuqian Shao</a>,{' '}
                            <a href="https://jiaxiaosong1002.github.io/" className="hover:underline">Xiaosong Jia</a>,{' '}
                            <a href="https://lihongyang.info/" className="hover:underline">Hongyang Li</a>,{' '}
                            <a href="https://www.cvlibs.net/" className="hover:underline">Andreas Geiger</a>,{' '}
                            <a href="https://xyue.io/" className=" hover:underline">Xiangyu Yue</a>,{' '}
                            <a href="https://scholar.google.com/citations?user=ulZxvY0AAAAJ&hl=en" className="hover:underline">Li Chen</a>{' '}
                        </h2>
                        <p className="text-2xl w-full">
                            arXiv | Code in July
                        </p>
                        <p className="text-1xl w-full">
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
                        <span></span>
                    </div>
                </div>
            </div>



            <div className="w-full h-screen flex flex-col p-20 snap-start gap-10">
                <div className="w-full h-32 flex flex-row justify-center items-center">
                    <h1 className="text-t1 font-bold" id="action_control_nuscenes">
                        Action Control
                    </h1>
                </div>
                <div className="w-full h-full flex flex-row justify-center items-center">
                    <div className="w-1/4 h-full flex flex-col gap-20 justify-evenly items-center">
                        <h2 className="text-3xl font-bold">
                            nuScenes (Zero-shot)
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
                    <h1 className="text-t1 font-bold" id="comparison">
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
