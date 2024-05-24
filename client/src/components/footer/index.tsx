import React from 'react'
import { FaDiscord, FaGithub } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className='w-full border-t-2 border-zinc-300 mt-10 pt-10'>
      <div className="flex flex-col justify-center container mx-auto">
        <Link to={'/'} className="font-bold text-inherit text-2xl flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" className="w-[60px]"/>
          Genealogical Tree
        </Link>
        <div className="flex justify-between items-start mt-5">
          <div className="flex flex-col justify-start gap-1 text-lg">
            <h2 className='text-xl font-bold'>Pages</h2>
            <Link to={'/'} className='hover:text-[#006FEE]'>Home</Link>
            <Link to={'/about'} className='hover:text-[#006FEE]'>About</Link>
            <Link to={'/tree'} className='hover:text-[#006FEE]'>My Tree</Link>
            <Link to={'/auth'} className='hover:text-[#006FEE]'>Auth</Link>
            <Link to={'/settings'} className='hover:text-[#006FEE]'>Settings</Link>
            <Link to={'/contact-us'} className='hover:text-[#006FEE]'>Contact Us</Link>
          </div>
          <div className="flex flex-col justify-start gap-1 text-lg">
            <h2 className='text-xl font-bold'>Our Team</h2>
            <Link to={'https://github.com/SAMAKAKI'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaGithub />SAMAKAKI</Link>
            <Link to={'https://github.com/UjemnyGH'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaGithub />UjemnyGH</Link>
            <Link to={'https://github.com/jasiaczek1'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaGithub />jasiaczek1</Link>
          </div>
          <div className="flex flex-col justify-start gap-1 text-lg">
            <h2 className='text-xl font-bold'>Get Help</h2>
            <Link to={'/contact-us'} className='hover:text-[#006FEE]'>Contact Us</Link>
            <Link to={'https://github.com/SAMAKAKI/GenealogicalTree'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaGithub />Genealogical Tree</Link>
            <Link to={'https://discord.gg/Fw8pWAAW'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaDiscord />Discord Server</Link>
          </div>
          <div className="flex flex-col justify-start gap-1 text-lg">
            <h2 className='text-xl font-bold'>About Web / Open Source</h2>
            <Link to={'/about'} className='hover:text-[#006FEE]'>About</Link>
            <Link to={'https://github.com/SAMAKAKI/GenealogicalTree'} className='flex items-center gap-2 hover:text-[#006FEE]' target='_blank'><FaGithub />Genealogical Tree</Link>
          </div>
        </div>
        <p className='mt-10'>&copy;Genealogical Tree, 2024, jasiaczek1, UjemnyGH, SAMAKAKI</p>
      </div>
    </div>
  )
}
