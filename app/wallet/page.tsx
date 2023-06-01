"use client";
import Link from "next/link"

export default function Wallet(){
    return(
        <div className="flex flex-col px-10 py-5">
            <nav className='flex flex-row justify-between'>
      <Link href='/' className=' text-4xl font-semibold'>ETHER</Link>
      <button className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
        <p className='p-3 transition-all text-white hover:text-black'>Connect Wallet</p>
      </button>
      </nav>
           <div className="flex flex-row justify-center">
            <h1></h1>
            </div> 
        </div>
    )
}   