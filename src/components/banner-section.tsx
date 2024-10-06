import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Background } from "./background";
import { MailPlus } from "lucide-react";
import NavbarItems from "./navbar-items";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { navdata } from "@/components/constant/data";
import '../css/style.css'


export function Banner() {

  return (
    <div className="relative w-full h-full">

        <div className="absolute  w-[300px] -top-3 -right-7 flex justify-around gap-5 border-2 border-gray-300 rounded-3xl py-2
         px-7 custom-shadow z-20 bg-white">
            {
                navdata.map((data, index) => (
                    <NavbarItems 
                        key={index} 
                        name={data.name} 
                        icon={data.icon}
                        link={data.link}/>
                ))
            }
        </div>

        <div className="absolute bottom-3 left-3 bg-blue-400 flex justify-center items-center w-[65px] h-[65px] rounded-full z-20 cursor-pointer custom-shadow">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <a href="mailto:khesir.dev@gmail.com"><MailPlus className="w-5 h-5"/></a>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={50}>
                    <p>Contact me</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>

        <Dialog>
            <DialogTrigger>
                <Card className="absolute w-2/3 flex flex-col items-start p-5 -bottom-5 -right-5 bg-white z-20 rounded-3xl custom-shadow overflow-hidden">
                    <span className="font-semibold text-2xl">
                        Khesir (Aj)
                    </span>
                    <span className="font-semibold text-lg">
                        Software engineer
                    </span>
                    <span className="text-start font-normal text-sm text-gray-600 truncate-text ">
                        I like to work on computer graphics and study software architecture.
                    </span>  
                </Card>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>A bit of background about me</DialogTitle>
                <div className="grid grid-cols-2 gap-3">
                    {/* About me */}
                    <div className="col-span-2 flex flex-col">
                        <span className="font-semibold text-2xl">
                            Khesir
                        </span>
                        <span className="font-semibold text-lg">
                            Full stack Developer 
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span className="font-normal text-sm text-gray-600">
                            Create and develop web apps using Type script and React, Svelte, and Next.js. Interested in computer graphics, software architecture, and technical arts.
                        </span> 
                    </div> 
                    {/* Technology */}
                    <div className="col-span-2 flex flex-col gap-3">
                        <span className="font-semibold text-2xl">
                            Technology
                        </span>
                        <Separator/>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Languages
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Javascript/ Typescript</Badge>
                                <Badge>Python</Badge>
                                <Badge>C#</Badge>
                                <Badge>Java</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Web app development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>React</Badge>
                                <Badge>Typescript</Badge>
                                <Badge>Svelte</Badge>
                                <Badge>Next.js</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Backend development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Node.js</Badge>
                                <Badge>Nest.js</Badge>
                                <Badge>Django</Badge>
                                <Badge>Springboot</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Bot development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Dsharp</Badge>
                                <Badge>discord.py</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Game development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Unity</Badge>
                            </div> 
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
        <div className="absolute w-[300px] h-[70px] -top-5 -right-5 bg-white z-10 rounded-3xl border-8 border-white soft-nav "/>
        <div className="absolute -bottom-10 -left-10 bg-white w-[150px] h-[150px] rounded-full z-10 bottom-button"/>
        <Background />       
    </div>  
  )
}