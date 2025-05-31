'use client'



import { redirect, usePathname } from 'next/navigation'



export default function NotFound404() {

    redirect('/')
    return (
        <main className='w-full'></main>
    )
}
