import { SchoolIcon, Search } from "lucide-react"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { data } from '@/lib/data'
import BlurFade from "./magicui/blur-fade"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "postcss"

const NavigationBar = () => {

    return (
        <>
            <nav className="sticky top-0 w-full z-20 start-0 backdrop-blur-sm  bg-transparent rounded-lg p-3">
                <div className="flex items-center justify-between ">
                    <button>
                        <SchoolIcon />
                    </button>
                    <div className="flex items-center gap-4">
                        <Dialog>
                            <DialogTrigger>
                                <Search />
                            </DialogTrigger>
                            <DialogContent className="">
                                <DialogHeader>
                                    <DialogTitle>Edit profile</DialogTitle>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                        <Sheet>
                            <SheetTrigger><HamburgerMenuIcon className="size-8" /></SheetTrigger>
                            <SheetContent side={'top'} className="bg-slate-300 h-[600px] lg:max-w-3xl lg:mx-auto">
                                <SheetHeader>
                                    <SheetTitle>NYRDDC</SheetTitle>
                                    <SheetDescription>
                                        This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                    </SheetDescription>

                                </SheetHeader>
                                <div className="space-y-2">
                                    {data.navItems.map((item, i) =>
                                        <BlurFade key={item} duration={i / 10 + 0.5} className="transition delay-150 hover:underline text-2xl py-2 ">
                                            {item}
                                        </BlurFade>)}
                                </div>
                                <SheetFooter>Thank you</SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>

        </>

    )
}

export default NavigationBar