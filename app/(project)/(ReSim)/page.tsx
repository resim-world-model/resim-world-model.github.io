import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "ReSim | OpenDriveLab",
    description: "ReSim",
    keywords: ["ReSim", "OpenDriveLab", "HKU", "SII"],
};



export default function Home() {
    return (
        <main className="w-full overflow-hidden">






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
