import { SchoolIcon, Search } from "lucide-react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { data } from '@/lib/data'
import BlurFade from "./magicui/blur-fade"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"
import Link from "next/link"

const NavigationBar = () => {

    return (
        <>
            <nav className="sticky top-1 w-full z-20 start-0 backdrop-blur-sm  bg-transparent rounded-lg p-3 ring-1 ring-slate-300">
                <div className="flex items-center justify-between ">
                    <button>
                        <SchoolIcon />
                    </button>
                    <div className="flex items-center gap-4 justify-center">
                        <Dialog>
                            <DialogTrigger>
                                <Search />
                            </DialogTrigger>
                            <DialogContent className="overflow-clip">
                                <DialogHeader>
                                    <DialogTitle>Search</DialogTitle>
                                    <DialogDescription>Search through all of the memories</DialogDescription>
                                </DialogHeader>
                                <div className="flex items-center justify-center gap-5">
                                    <Input className="w-2/3 border-slate-600 rounded-2xl" placeholder='Search everything...' />
                                    <Button className="rounded-full">Search</Button>
                                </div>
                                <DialogFooter>This feature will implement soon.</DialogFooter>
                            </DialogContent>

                        </Dialog>
                        <Sheet>
                            <SheetTrigger><HamburgerMenuIcon className="size-8" /></SheetTrigger>
                            <SheetContent side={'right'} className="bg-slate-300 h-screen w-[350px] xs:max-w-44  md:max-w-3xl md:mx-auto">
                                <SheetHeader>
                                    <SheetTitle>NYRDDC</SheetTitle>
                                </SheetHeader>
                                <div className="space-y-2 mt-10">
                                    {data.navItems.map((item, i) =>
                                        <BlurFade key={i} duration={i / 10 + 0.5} className="transition delay-150 hover:underline text-xl ">
                                            {item}
                                        </BlurFade>)}
                                </div>
                                <SheetFooter className="mt-10">
                                    <Link href={'./about'}>
                                        <button className="text-left hover:underline text-xl">
                                            About
                                        </button>
                                    </Link>

                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default NavigationBar