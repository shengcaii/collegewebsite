import React from 'react'
import { ArrowRight } from 'lucide-react'
import { data } from '@/lib/data'
import BlurFade from './magicui/blur-fade'

const Landing = () => {
    return (
        <div className='font-serif'>
            <div className='text-center mt-40'>
                <BlurFade duration={1} className='text-3xl font-black tracking-widest h-20'>Welcome to NYRDDC</BlurFade>
                <BlurFade duration={1 * 3} className='font-hairline text-lg'>
                    Where world-class faculty, innovative research, and dynamic students come together to advance education and foster change in the world.
                </BlurFade>
            </div>
            <div className='mt-10 lg:flex lg:items-center lg:justify-between lg:gap-24'>
                <h1 className='text-3xl font-black tracking-widest'>
                    NYRDDC at a glance
                </h1>
                <div className='group'>
                    <p className='font-hairline text-lg'>
                        For nearly four centuries, people have come to NYRDDC in the pursuit of truth, knowledge, and a better world.
                    </p>
                    <button className='flex py-2  gap-3 items-center text-lg'>
                        <ArrowRight className='bg-slate-600 text-white rounded-full p-1 group-hover:bg-black size-8' />
                        Learn more about our history
                    </button>
                </div>
            </div>
            <div className='w-full h-1 bg-slate-800 mt-12'></div>
            <div className='mt-5'>
                {data.harvard.map((hd, i) => (
                    <div key={i} className='mt-7'>
                        <h1 className='lining-nums font-extra-bold text-3xl py-3 text-red-900'>{hd.num}</h1>
                        <p className='text-lg'>{hd.description}</p>
                    </div>
                ))}
            </div>
            <div className='text-center mt-10 mx-auto'>
                <h1 className=' font-extra-bold text-3xl py-3 text-red-900'>Start exploring</h1>
                <div className='mx-10 flex flex-wrap gap-4'>
                    <div className='size-[400px] bg-slate-400 rounded-md '>
                        IMG
                    </div>
                    <div className='size-[400px] bg-slate-400 rounded-md '>
                        IMG-2
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing