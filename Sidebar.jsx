import React from 'react'
import { SiWebmoney } from "react-icons/si";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCardSharp } from "react-icons/io5";
import { MdOutlinePayments } from "react-icons/md";
import { MdAccountBalance } from "react-icons/md";
import { HiOutlineBanknotes } from "react-icons/hi2";
import { FaPeopleArrows } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


const Sidebar = () => {
  return (
    //bg-indigo-600
    <div className='h-screen bg-slate-950 dark:bg-slate-950/90'>
      <div className='flex flex-col gap-3 w-full text-slate-300 h-full justify-between'>
        <div className='flex flex-col gap-10 px-4 mt-4'>
          <div className='flex items-center justify-center gap-2'>

            <div className='text--white text-xl md:text-4xl'>
              <SiWebmoney />
            </div>

            <div className='hidden md:flex font-bold'>
                AppFin
            </div>



          </div>
          <div className='flex flex-col gap-5 text-md sm:text-sm lg:text-lg xl:text-2xl'>
            <div className='flex items-center gap-2'>
              <div>
                <AiOutlineDashboard />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Dashboard
              </div>

            </div>
            <div className='flex items-center gap-2'>
              <div>
                <IoCardSharp />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Cards
              </div>

            </div>
            <div className='flex items-center gap-2'>
              <div>
                <MdOutlinePayments />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Payments
              </div>

            </div>
            <div className='flex items-center gap-2'>
              <div>
                <MdAccountBalance />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Accounts
              </div>

            </div>
            <div className='flex items-center gap-2'>
              <div>
                <HiOutlineBanknotes />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Loans
              </div>

            </div>
            <div className='flex items-center gap-2'>
              <div>
                <FaPeopleArrows />
              </div>
              <div className='hidden sm:flex hover:text-slate-100 cursor-pointer'>
                Beneficiary
              </div>

            </div>
          </div>

        </div>
        <div className='flex item-center text-md sm:text-xs md:text-sm lg:text-lg px-4 mb-4 gap-2'>
            
            <div className='lg:text-2xl hidden sm:flex mb-2 gap-3'>
                
                <IoSettingsOutline />
                <p className='mb-2'>Settings</p>
            </div>
        </div>
      </div>
    </div>
  )
}
export default Sidebar;