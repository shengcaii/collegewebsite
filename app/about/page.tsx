"use client"
import MovingCursor from "@/components/MovingCursor"
import Header from "@/components/Header"
import { useRef } from "react"


const About = () => {
    const stickyElement = useRef(null)
    return (
        <>
            <Header ref={stickyElement}/>
            <MovingCursor stickyElement={stickyElement} />
        </>
    )
}

export default About