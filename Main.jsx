import React from 'react'
import Chart from '../chart/Chart';
import { CiCalendar } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoMailUnreadOutline } from "react-icons/io5";
import profile from "../../assets/img/profile.jpg"
import { IoWalletSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { IoPieChartOutline } from "react-icons/io5";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { FaRegIdCard } from "react-icons/fa6";
import { CiTimer } from "react-icons/ci";





const Main = () => {
  return (
    <div className='flex flex-col md:flex-row bg-slate-950'>
      <section className='w-auto md:w-[70%] h-full'>
        <div className='w-full flex justify-between items-center'>
          <div className='m-4 font-bold text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-tl from-indigo-800 to-pink-800'>
            Good Morning IT Skills Academy
          </div>
          <div className='flex md:hidden gap-4 items-center justify-end px-4 text-slate-400'>
            <CiCalendar />
            <IoIosNotificationsOutline />
            <IoMailUnreadOutline />
            <img src={profile} alt="" className='rounded-full w-8 h-8' />


          </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-col-2 lg:grid-cols-4 gap-4 m-4'>
          <div className='flex flex-col justify-between w-full md:w-auto h-48  bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-400'>
                <IoWalletSharp />
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-400 bg-slate-900/50 rounded-full'>
                <CiMenuKebab />
              </div>

            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-3xl text-slate-400'>
              $500.4985.00
            </div>
            <div>
              <div className='text-slate-400 text-lg font-semibold'>
                Your Bank Balance
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between w-full md:w-auto h-48  bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-400'>
                <IoPieChartOutline />
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-400 bg-slate-900/50 rounded-full'>
                <CiMenuKebab />
              </div>

            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-3xl text-slate-400'>
              $500.4985.00
            </div>
            <div>
              <div className='text-slate-400 text-lg font-semibold'>
                Your Bank Balance
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between w-full md:w-auto h-48  bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-400'>
                <FaPeopleCarryBox />
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-400 bg-slate-900/50 rounded-full'>
                <CiMenuKebab />
              </div>

            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-3xl text-slate-400'>
              $500.4985.00
            </div>
            <div>
              <div className='text-slate-400 text-lg font-semibold'>
                Employees working Today
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between w-full md:w-auto h-48  bg-slate-900/50 p-4 rounded-md'>
            <div className='flex w-full items-center justify-between'>
              <div className='text-4xl text-slate-400'>
                <FaRegIdCard />
              </div>
              <div className='flex items-center justify-center w-10 h-10 text-slate-400 bg-slate-900/50 rounded-full'>
                <CiMenuKebab />
              </div>

            </div>
            <div className='font-extrabold text-4xl sm:text-2xl lg:text-3xl text-slate-400'>
              $500.4985.00
            </div>
            <div>
              <div className='text-slate-400 text-lg font-semibold'>
                This week card processing
              </div>
            </div>
          </div>
        </div>
        <div className='grid md:grid-cols-4 gap-4 m-4 w-auto'>
          <div className='col-span-4 md:col-span-1 h-28 bg-slate-900/50 rounded-md'>
            <div className='flex flex-col justify-between p-4 h-full'>
              <div className='font-semibold text-slate-400'>New Clients</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl sm:text-xl lg:text-5xl font-bold text-slate-400'>64</div>
                <div className='flex px-2 py-1 text-sm rounded-full bg-green-500 items center text-green-900'>+69%</div>
              </div>
            </div>
          </div>
          <div className='col-span-4 md:col-span-3 row-span-2 bg-slate-900/50 overflow-x-auto '>
            <Chart />
          </div>
          <div className='col-span-4 md:col-span-1 h-28 bg-slate-900/50 rounded-md'>
            <div className='flex flex-col justify-between p-4 h-full'>
              <div className='font-semibold text-slate-400'>New Clients</div>
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl sm:text-xl lg:text-5xl font-bold text-slate-400'>9</div>
                <div className='flex px-2 py-1 text-sm rounded-full bg-green-500 items center text-green-900'>+19%</div>
              </div>
            </div>
          </div>
        </div>
        <div className='m-4'>
          <div className='text-slate-400 font-bold text-2xl my-4'>
            Recent Transactions
          </div>
          <table className='w-full text-sm text-indigo-500'>
            <thead className='text-xs text-slate-400 uppercase bg-slate-900/50'>
              <tr>
                <th scope='col' className='py-3 px-6'>Person</th>
                <th scope='col' className='py-3 px-6'>Bank Account</th>
                <th scope='col' className='py-3 px-6'>Amount</th>
              </tr>
            </thead>
            <tbody className='text-slate-400'>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
              <tr className='bg-slate-900/50 border-b'>
                <td className='py-4 px-6'>Asawir</td>
                <td className='py-4 px-6'>4124124124</td>
                <td className='py-4 px-6'>$30000</td>

              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <section className='w-full md:w-[30%] bg-slate-900'>
        <div className='flex flex-cols m-4  '>
          {/* child ml-auto parent me jutify-end */}
          <div className='hidden md:flex gap-4 items-center  px-4 text-slate-400  ml-auto'>
            <CiCalendar />
            <IoIosNotificationsOutline />
            <IoMailUnreadOutline />
            <img src={profile} alt="" className='rounded-full w-8 h-8' />


          </div>

        </div>
        <div className='flex flex-col bg-slate-900/50 gap-6 m-4 rounded-md h-auto shadow-lg'>
          <div>
            <div className='font-bold text-slate-400'>Information Status</div>
            <div className='text-xs font-bold text-slate-400'>In Progress</div>

          </div>
          <div className='h-4 w-full bg-gray-200 rounded-lg'>
            <div className='h-4 bg-indigo-900 rounded-lg w-[30%]'></div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='font-bold text-slate-400'>
              Estimated Procession
            </div>
            <div className='font-semibold text-slate-400'>
              4-5 Business Days
            </div>
            <div className='w-full mt-3'>
              <button className='bg-gradient-to-tr from-pink-900 to-indigo-900 text-slate-400 rounded-xl w-full p-4'>View Status</button>
            </div>
          </div>
          <div className='flex flex-col gap-5 m-4 text-slate-400'>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>
            <div className='flex gap-4 items-center bg-slate-900/50 p-2 rounded-md w-full'>
              <div className='flex items-center justify-center rounded-full w-8 h-8 bg-indigo-950'>
                <CiTimer />

              </div>
              <div>
                <div className='font-semibold text-sm text-slate-400'>
                  Run Payroll
                </div>
                <div className='font-semibold text-indigo-500 text-xs'>
                  March 7th at 4:50 pm
                </div>
              </div>


            </div>

          </div>
          <div className='flex flex-col bg-slate-900/50 gap-6 my-10 mx-4 p-4 rounded-lg h-auto '>
            <div>
              <div className='font-bold text-slate-400'>
                Board Meeting

              </div>
              <div className='text-xs font-bold text-indigo-500'>
                March 5th 2024

              </div>
            </div>
            <div className='font-semibold text-slate-400'>
              you have been invited to attend a meeting of board of directors
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
export default Main;