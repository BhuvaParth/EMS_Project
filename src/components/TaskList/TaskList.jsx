import React from 'react'

const TaskList = () => {
    return (
        <section className='!p-3'>
            <div id='tasklist' className='flex justify-start items-center flex-nowrap gap-3 overflow-x-auto w-full !p-4 h-[300px] bg-transparent'>
                <div className='flex flex-col gap-3 shrink-0 h-full w-[20%] !p-3 rounded-lg border border-gray-400'>
                    <div className='flex justify-between items-center '>
                        <div className='text-sm font-medium !px-3 !py-1 rounded-sm border bg-white'>
                            High
                        </div>
                        <div className='text-white'>
                            20 Fab 2024
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-start gap-2 text-white'>
                        <h2 className='text-2xl font-semibold'>
                            Make a YouTube Video
                        </h2>
                        <p className='text-md '>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, cumque ut dignissimos minima voluptatum quae?
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaskList