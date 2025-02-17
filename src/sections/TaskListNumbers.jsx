import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <>
            <section className='w-full !my-5 text-white'>
                <div className='grid grid-cols-12 gap-4 !p-3'>
                    <div className='col-span-3 flex justify-between items-center gap-2 !p-4 rounded-lg bg-transparent border border-gray-300'>
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-xl font-semibold'>New Task</h3>
                            <h2 className='text-2xl font-semibold'>100</h2>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer !p-2.5 border border-gray-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-white hover:text-black '>
                           View  
                        </div>
                    </div>
                    <div className='col-span-3 flex justify-between items-center gap-2 !p-4 rounded-lg bg-transparent border border-gray-300'>
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-xl font-semibold'>New Task</h3>
                            <h2 className='text-2xl font-semibold'>100</h2>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer !p-2.5 border border-gray-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-white hover:text-black '>
                           View  
                        </div>
                    </div>
                    <div className='col-span-3 flex justify-between items-center gap-2 !p-4 rounded-lg bg-transparent border border-gray-300'>
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-xl font-semibold'>New Task</h3>
                            <h2 className='text-2xl font-semibold'>100</h2>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer !p-2.5 border border-gray-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-white hover:text-black '>
                           View  
                        </div>
                    </div>
                    <div className='col-span-3 flex justify-between items-center gap-2 !p-4 rounded-lg bg-transparent border border-gray-300'>
                        <div className='flex flex-col gap-1.5'>
                            <h3 className='text-xl font-semibold'>New Task</h3>
                            <h2 className='text-2xl font-semibold'>100</h2>
                        </div>
                        <div className='flex justify-center items-center cursor-pointer !p-2.5 border border-gray-400 rounded-lg transition-all ease-in-out duration-300 hover:bg-white hover:text-black '>
                           View  
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default TaskListNumbers