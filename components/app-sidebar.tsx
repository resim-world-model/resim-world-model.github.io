"use client"



import Image from 'next/image'
import Link from "next/link"
import { ChevronDown  } from "lucide-react"



import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    SidebarMenuSubItem,
    SidebarMenuSub,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/animation/fade-in"



function PageSidebar() {
    const { content } = useSidebar()
    if (content != null) {
        return (
                <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">
                    <span className="font-bold p-2 select-none text-foreground/50">
                        This Page
                    </span>
                    {content.map((item) => (
                        <Link key={item.text} href={"#" + item.id}  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            {item.text}
                        </Link>
                    ))}

                </SidebarMenu>
        )
    } else {
        return <SidebarMenu/>
    }
}



export function AppSidebar() {

    return (
        <FadeIn>
            <Sidebar>
                <div className="fixed flex flex-row gap-3 m-6 z-20 flex-wrap">
                    <Button asChild className="bg-background text-foreground hover:bg-white group">
                        <Link href="/" className="select-none">
                            <Image
                                src="/logo/OpenDriveLab/D.png"
                                alt="OpenDriveLab"
                                width={24}
                                height={24}
                            className="group-hover:scale-125 transition delay-100 duration-200"
                            />
                        </Link>
                    </Button>
                </div>


                <div className="mt-24 overflow-y-scroll no-scrollbar">
                
                    <SidebarMenu className="mb-12 px-8 text-xs overflow-y-scroll no-scrollbar">

                        <Link href="#introduction"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Introduction
                        </Link>

                        <Link href="#action_control_nuscenes"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Action Control / nuScenes
                        </Link>



                        <Link  href="#action_control_waymo"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Action Control / Waymo
                        </Link>



                        <Link href="#action_free"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Action-free
                        </Link>

                        <Link href="#long_horizon"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Long Horizon
                        </Link>
                        <Link href="#comparison"  className="p-2 rounded-sm hover:bg-o-blue/3 select-none">
                            Comparison
                        </Link>



                    </SidebarMenu>



                    <PageSidebar/>



                </div>



            </Sidebar>
        </FadeIn>
    )
}
