import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { HeartIcon, MenuAlt2Icon, MenuAlt3Icon, MenuIcon, SearchIcon, ShoppingBagIcon, UserIcon} from '@heroicons/react/outline'
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';



export default function Navigation() {

  const [clientWindowHeight, setClientWindowHeight] = useState("");
  const [screenHeight, setScreenHeight]= useState("");
  const [progressScrollbar, setProgressScrollbar] = useState(0.2);
  const [backgroundTransparacy, setBackgroundTransparacy] = useState(0);
  const [padding, setPadding] = useState(30);
  const [boxShadow, setBoxShadow] = useState(0);
  const [pageHeight , setPageHeight] = useState(0);
  const [leftSidebar, setLeftSidebar] = useState(false);
  const [rightSidebar, setRightSidebar] = useState(false);
  const [topNavbar, setTopNavbar] = useState(false);

  const handleScroll = ()=>{
    setClientWindowHeight(window.scrollY)
  }

  const handleProgressScrollBar = () => {
    setProgressScrollbar((clientWindowHeight / (pageHeight - screenHeight))*100)
  }

  useEffect(()=>{
    setPageHeight(document.body.offsetHeight)
    setScreenHeight(window.innerHeight)
  }, [])

  useEffect(()=>{
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)

  })

  useEffect(()=>{
    window.addEventListener('scroll', handleProgressScrollBar);
    return ()=> window.removeEventListener('scroll', handleProgressScrollBar)
  })

  useEffect(() => {
    let backgroundTransparacyVar = clientWindowHeight / 300;
  
    if (backgroundTransparacyVar < 1) {
        let paddingVar = 30 - backgroundTransparacyVar * 20;
        let boxShadowVar = backgroundTransparacyVar * 0.1;
        setBackgroundTransparacy(backgroundTransparacyVar);
        setPadding(paddingVar);
        setBoxShadow(boxShadowVar);
    }
  }, [clientWindowHeight]);

  return (
    <div className='w-screen fixed z-40'>
      <div className='bg-black'>
      <div style={{
        borderRadius : '40px',
        backgroundColor : 'rgb(184, 184, 184)',
        color :'black', 
        width : `${progressScrollbar}%`, 
        height:'4px'}}></div>
        <div className='flex justify-between '>
          <div className='flex lg:hover:cursor-pointer active:scale-95 transition transition-duration-3000 ease-out'>
            <Image src="/BrandLogo.png" alt='brand logo' width="80" height="80" layout='fixed'/>
            <h1 className='text-white self-center'>GANGSTER LEGACY</h1>
          </div>
          <div className='self-center mr-6 px-2 py-2 active:bg-gray-800 rounded-full sm:hidden'>
            <MenuIcon className='text-white h-6 w-6 lg:hover:cursor-pointer'></MenuIcon>
          </div>
          <div className='hidden sm:flex sm:space-x-3 md:space-x-5  self-center mr-8 '>
            <SearchIcon className='text-white h-6 w-6 lg:hover:cursor-pointer'/>
            <UserIcon className='text-white h-6 w-6 lg:hover:cursor-pointer'/>
            <HeartIcon className='text-white h-6 w-6 lg:hover:cursor-pointer'/>
            <ShoppingBagIcon className='text-white h-6 w-6 lg:hover:cursor-pointer'/>
          </div>
        </div>
      </div>
        <div className={`${leftSidebar || rightSidebar || topNavbar ? 'hidden' : 'flex'} w-screen py-3 px-8 justify-between absolute`} style={{
          background: `rgba(255, 255, 255, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(0 0 0 / ${boxShadow}) 0px 0px 20px 6px`,
        }}>
          <div 
          onClick={()=> setLeftSidebar(true)}
          className='md:hidden mx-6 active:bg-gray-800 px-2 py-2 rounded-full transition transition-duration-800 ease-out'>
            <MenuAlt2Icon className={`
            ${clientWindowHeight<135 ? 'text-white' : `rgba(0,0,0, ${backgroundTransparacy})`}
            h-6 w-6 lg:hover:cursor-pointer ${leftSidebar && 'hidden'}`}/>
          </div>
          <div className='hidden md:flex md:space-x-5 ml-8'>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>All</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>New Arrivals</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Collections</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Trending</p>     
          </div>     
          <div 
          onClick={()=>setRightSidebar(true)}
          className='md:hidden mx-6 active:bg-gray-800 px-2 py-2 rounded-full transition transition-duration-800 ease-out'>
            <MenuAlt3Icon className={`${clientWindowHeight<135 ? 'text-white' : `rgba(0,0,0, ${backgroundTransparacy})`} h-6 w-6 lg:hover:cursor-pointer`  } />
          </div>
          <div className='hidden md:flex md:space-x-3 lg:space-x-8 mr-8'>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Clothing</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Shoes</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Hats</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Coats</p>
            <p className='text-sm cursor-pointer' style={{color:`${clientWindowHeight<135 ? 'rgba(255,255,255)' : `rgba(0,0,0, ${backgroundTransparacy})`}`}}>Accessories</p>    
          </div>
        </div>
        <LeftSidebar isOpen={leftSidebar} setLeftSidebar={setLeftSidebar} />
        <RightSidebar isOpen={rightSidebar} setRightSidebar={setRightSidebar}/>
    </div>
  )
}

