import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faGamepad } from '@fortawesome/free-solid-svg-icons'
import {Skeleton} from "@nextui-org/skeleton";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

export default function Home() {
    return(
      
   <main>
   <Image alt="test"  src="https://cdn.discordapp.com/attachments/957469174001721414/1136949409133895720/Group_7.png
" width="1600" height="1600" className='absolute  right-0 -z-20 top-[700px]  '></Image>
   <Image alt="test"  src="https://cdn.discordapp.com/attachments/1135044532564672553/1137166646134439996/Rectangle_11.png

" width="500" height="500" className='absolute  left-0 -z-20 top-[1700px]  '></Image>
            <Image alt="test"  src="https://cdn.discordapp.com/attachments/957469174001721414/1136937867264921671/Vector.png" width="1600" height="1000" className='absolute opacity-75 -z-10 left-0 top-0'></Image>
            <Image alt="test"  src="https://cdn.discordapp.com/attachments/1133830185708429433/1136931394640166953/Rectangle_10.png" width="300" height="300" className='-z-10 opacity-25 lg:opacity-100 md:opacity-100 absolute right-5'></Image>

        <Image alt="test"  src="https://cdn.discordapp.com/attachments/957469174001721414/1136948973706424340/Rectangle_10_1.png" width="300" height="300" className='absolute -z-10 lg:opacity-100 md:opacity-100 opacity-25 left-5 top-96'></Image>
    <section className='lg:py-32 md:py-32 py-16'>
    <div className='text-center flex items-center justify-center'>
      <div>
      <div className='max-w-xl'>
      <h1 className='text-6xl font-[650]'>zephal is more than
just a <span className='bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent'>serverside.</span></h1>
<p className='text-white/[60%] mt-6 '>Experience the freedom and fun of roblox like never before with Zephal, the best roblox serverside on the market.</p>
    
    </div>
    <div className='mt-16 space-x-5'>
      <Link href="" className='bg-[#1655F6] lg:px-12 md:px-12 font-semibold px-5 py-4 rounded-full'>As low as $10</Link>
      <Link href="" className='bg-white lg:px-12 md:px-12 px-5 font-semibold py-4 rounded-full text-black'>Learn more</Link>
    </div>
    </div>
    </div>
    </section>
    <section className='py-32'>
      <div className='lg:grid-cols-3 bg-black border rounded-lg border-[#4F4F4F] md:grid-cols-2 sm:grid-cols-1 grid gap-5'>
        <div className='flex p-5 flex-row rounded-lg items-center justify-center  gap-3'>
          <div>
            <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137163770087620690/Vector_2.png" width="32" height="32"></Image>
          </div>
          <div>
            <h1 className='text-3xl font-medium'>123,123</h1>
            <p>Scripts executed</p>
          </div>
        </div>
        <div className='flex p-5 flex-row rounded-lg items-center justify-center  gap-3'>
          <div>
            <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137163770087620690/Vector_2.png" width="32" height="32"></Image>
          </div>
          <div>
            <h1 className='text-3xl font-medium'>123,123</h1>
            <p>Games</p>
          </div>
        </div>
        <div className='flex p-5 flex-row rounded-lg items-center justify-center 
         gap-3'>
          <div>
            <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137163770087620690/Vector_2.png" width="32" height="32"></Image>
          </div>
          <div>
            <h1 className='text-3xl font-medium'>123,123</h1>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
    <section className='py-16'>
      <div className='lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-20 grid'>
        <div className='bg-black border border-[#4F4F4F] p-5 rounded-lg'>
          <h1 className='text-4xl font-semibold'>Purchase</h1>
          <p className='mt-5'>Purchase your desired plan.</p>
          <div className='flex items-center justify-center'>
          <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137165538703966258/Group_8.png" width="500" height="160"></Image>
          </div>
        </div>
        <div className='bg-black border border-[#4F4F4F] p-5 rounded-lg'>
          <h1 className='text-4xl font-semibold'>Login</h1>
          <p className='mt-5'>Login to your Zephal dedicated account.</p>
          <div className='flex items-center justify-center pt-48'>
          <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137552952429654136/Group_11.png" width="200" height="200"></Image>
          </div>
        </div>
        <div className='bg-black border border-[#4F4F4F] p-5 rounded-lg'>
          <h1 className='text-4xl font-semibold'>Execute</h1>
          <p className='mt-5'>Execute your desired scripts in our supported games.</p>
          <div className='flex items-center justify-center'>
          <Image alt="test" src="https://cdn.discordapp.com/attachments/957469174001721414/1137552450681847888/Group_10.png" width="400" height="400"></Image>
          </div>
        </div>
      </div>
    </section>
<section>

</section>
   </main>
  )
}