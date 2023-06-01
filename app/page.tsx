'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';



export default function Home() {
  const [isLoggedIn, setLogin] = useState(false)
  const login = () =>{
    setLogin(true)
  }
  const logout = ()=>{
    setLogin(false)
  }
  return (
    <div className='flex flex-col px-10 py-5'>
      
      <nav className='flex flex-row justify-between'>
      <Link href='/' className=' text-4xl font-semibold'>ETHER</Link>
      {isLoggedIn ?
      <button onClick={logout} className='bg-black outline outline-1 outline-white hover:bg-red-500 rounded-md transition-all'>
      <p className='p-3 transition-all text-white'>Logout</p>
      </button> 
        :  
      <button onClick={login} className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
      <p className='p-3 transition-all text-white hover:text-black'>Connect Wallet</p>
      </button>}

      
     
      </nav>
     
      
      <div className='flex flex-col justify-center mt-1'>
        <div className='flex flex-col justify-center mt-52'>
        <h1 className='text-5xl font-bold self-center mb-32'>NFT Is all you need </h1>
      
      {isLoggedIn  ?  
        <div className="flex flex-row justify-around">
        <Link href='/wallet' className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
        <p className='p-2 transition-all text-white hover:text-black'>My Wallet</p>
        
        </Link>
        <Link href='/minting' className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
        <p className='p-2 transition-all text-white hover:text-black'>Mint NFT</p>

        </Link>
        </div>
        :
        <div className="flex flex-row justify-center">
        <button onClick={login} className='bg-black outline outline-1 outline-white hover:bg-white rounded-md transition-all'>
      <p className='p-3 transition-all text-white hover:text-black'>Connect Wallet</p>
      </button>
        </div>}
        
        

     
        </div>
        
        
      
      </div>
      <div>

      </div>
      
    </div>
  )
}
