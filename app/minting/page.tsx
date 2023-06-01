"use client";
import Image from "next/image"
import Link from "next/link"
import { useState } from "react";


export default function Minting(){
    const [useAmount, setAmount] = useState(0)
    const [useStock, setStock] = useState(100)
    const add = ()=>{
        setAmount(useAmount+1)
        setStock(useStock-1)
    }
    const sub = ()=>{
        setAmount(useAmount-1)
        setStock(useStock+1)
    }
    return(
        <div className="flex flex-col px-10 py-5">
            <nav className='flex flex-row justify-between'>
      <Link href='/' className=' text-4xl font-semibold'>ETHER</Link>
      <button className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
        <p className='p-3 transition-all text-white hover:text-black'>Connect Wallet</p>
      </button>
      </nav>
      <div className="flex flex-row justify-evenly mt-16 mx-32 rounded-lg">
        <div className="flex flex-col my-7gap-6 px-2  outline outline-1 outline-white">
        <h1 className="text-4xl font-semibold self-center px-4">
                Mint This NFT
            </h1>
        <p>stock: {useStock}</p>
            <form action="post" className="flex flex-col gap-10">
                <p>Amount</p>
                <div className="flex flex-row justify-center">
                    <button disabled={useAmount < 1 ? true:false} onClick={(e)=>{e.preventDefault(); sub()}} className="bg-white text-black outline outline-1 rounded-sm px-2 mx-4">-</button>
                    <input type="text" readOnly value={useAmount} name="" id="" className="w-7 text-black text-center" />
                    <button disabled={useStock < 1 ? true:false} onClick = {(e)=>{e.preventDefault(); add()}}  className="bg-white text-black outline outline-1 rounded-sm px-2 mx-4">+</button>
                </div>
                <button type="submit" className="bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all self-center">
                    <p className="px-10 transition-all text-white hover:text-black">Mint</p>
                </button>
            </form>
        </div>
     
            <Image 
                src="/cantik.png" 
                alt="" 
                width={500}
                height={500}
                className=" self-end"
        />
      </div>
           
        </div>
    )
}