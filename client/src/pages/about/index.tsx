import { Link } from '@nextui-org/react'
import React from 'react'

export const About = () => {
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start gap-5 w-[45%]">
            <h1 className='text-5xl font-bold flex items-end gap-5'>
              Genealogical Tree
              <img src="/images/tree1.png" alt="" className='w-16'/>
            </h1>
            <p className='text-2xl'>The <Link className='text-2xl' href='https://github.com/SAMAKAKI/GenealogicalTree' target='_blank'>open source</Link> project which can help you with create family tree and find out something about your family. This website was created with ease of use in mind, but you won't find automatically generation or generation random information here because you should enter information and search it manually. This is done specifically to make you interested in seeking information.</p>
          </div>
          <img src="/images/type_of_family.png" alt="type of family"/>
        </div>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start gap-5 w-[45%]">
            <h1 className='text-5xl font-bold'>Our Team</h1>
            <p className='text-2xl'>We are a group of three passionate programmers who decided to combine our skills to create an innovative website for building family trees. Our team consists of <Link className='text-2xl' href='https://github.com/jasiaczek1' target='_blank'>jasiaczek1</Link>, <Link className='text-2xl' href='https://github.com/SAMAKAKI' target='_blank'>SAMAKAKI</Link>, and <Link className='text-2xl' href='https://github.com/UjemnyGH' target='_blank'>UjemnyGH</Link>, each bringing unique experience and expertise to the project.</p>
            <p className='text-2xl'><Link className='text-2xl' href='https://github.com/jasiaczek1' target='_blank'>jasiaczek1</Link>, our frontend wizard, specializes in creating intuitive and attractive user interfaces. His expertise has enabled us to develop a responsive and user-friendly interface, making it easy to create and manage family trees.</p>
            <p className='text-2xl'><Link className='text-2xl' href='https://github.com/SAMAKAKI' target='_blank'>SAMAKAKI</Link>, our backend expert, is responsible for the robust and scalable backend of our application. With his skills, our website is not only fast but also secure and reliable. SAMAKAKI ensured that all data is stored safely and is easily accessible to users.</p>
            <p className='text-2xl'><Link className='text-2xl' href='https://github.com/UjemnyGH' target='_blank'>UjemnyGH</Link>, our tester, makes sure that our website is not only functional but also enjoyable to use. Through her thorough testing and feedback, we have managed to create a tool that is intuitive and easy to learn, even for those who are not technically advanced.</p>
            <p className='text-2xl'>Together, we have created a family tree website that allows users to track and document their family history in a simple and enjoyable way. Our goal is to help people discover their family roots and encourage them to preserve their history for future generations.</p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-20 items-center">
              <img src="/images/jasiaczek1.jpg" alt="jasiaczek1" className='rounded-full w-[150px]'/>
              <h2 className='text-4xl font-bold'>jasiaczek1</h2>
            </div>
            <div className="flex gap-20 items-center">
              <h2 className='text-4xl font-bold'>SAMAKAKI</h2>
              <img src="/images/samakaki.png" alt="samakaki" className='rounded-full w-[230px]'/>
            </div>
            <div className="flex gap-20 items-center">
              <img src="/images/ujemnyGh.jpg" alt="ujemnyGH" className='rounded-full w-[150px]'/>
              <h2 className='text-4xl font-bold'>UjemnyGH</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start gap-5 w-[45%]">
            <h1 className='text-5xl font-bold'>Main information</h1>
            <p className='text-2xl'>Our website provides free access to tools and resources for creating and managing family trees. We're proud that our platform is fully open source, meaning anyone can contribute to its development and use it without any charges.</p>
            <p className='text-2xl'>Using our website is incredibly simple and intuitive. You don't need to worry about any hidden fees or subscriptions – all features are available for free. Our goal is to create a friendly space where users can freely share their ideas, tools, and resources.</p>
            <p className='text-2xl'>If you have any questions, suggestions, or need assistance, we're here to help. Our project is available on <Link className='text-2xl' href='https://github.com/SAMAKAKI/GenealogicalTree' target='_blank'>GitHub</Link>, where you can leave comments and rate our work by giving stars. Additionally, you can find a <Link className='text-2xl' href='/contact-us'>contact form</Link> on our website, making it quick and easy to send us a message. Our support team is always ready to assist and answer your questions.</p>
            <p className='text-2xl'>Feel free to use our website, explore the available resources, and join our community. Together, we can create better, more accessible solutions for everyone. Thank you for being with us, and we look forward to hearing your feedback and ideas!</p>
          </div>
          <img src="/images/support.png" alt="support" />
        </div>
      </div>
      <div className="w-2/3 mx-auto h-[2px] bg-zinc-300 my-10"></div>
      <div className="h-screen flex justify-center items-center">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-start gap-5 w-1/2">
            <h1 className='text-5xl font-bold'>Main technologies</h1>
            <p className='text-2xl font-semibold'>Frontend: </p>
            <ul className='list-disc text-xl ml-7 mt-3 font-normal'>
              <li>React + TypeScript + Vite</li>
              <li>Tailwindcss</li>
              <li>NextUi</li>
              <li>JointJs</li>
              <li>Redux + Redux Query</li>
              <li>Redux + Redux Query</li>
              <li>React Icons</li>
              <li>Frame motion</li>
              <li>React Hook Form</li>
              <li>Freepik</li>
            </ul>
            <p className='text-2xl font-semibold'>Backend:</p>
            <ul className='list-disc text-xl ml-7 mt-3 font-normal'>
              <li>NestJs</li>
              <li>Firebase</li>
              <li>Passport JWT</li>
            </ul>
          </div>
          <img src="/images/technologies.png" alt="support" className='w-1/2'/>
        </div>
      </div>
    </div>
  )
}
