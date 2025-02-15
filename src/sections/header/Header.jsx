import React from 'react'

const Header = () => {
  return (
    <>
      <header className='h-[100px] bg-[#1C1C1C] text-white'>
        <div className='flex justify-between items-center !p-5'>
          <div className='flex flex-col text-xl '>
            Hello
            <span className='text-2xl'>
              Parth Bhuva 👋
            </span>
          </div>
          <button className='cursor-pointer rounded-lg !px-4 !py-2 bg-transparent border border-red-500 hover:bg-red-500 transition-all duration-300 ease-in-out m-0'>
            Log Out
          </button>
        </div>
      </header>
    </>
  )
}

export default Header