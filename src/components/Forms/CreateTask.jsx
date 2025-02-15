import React from 'react'

const CreateTask = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-100px)]'>
            <div className='flex justify-center w-full'>
                <div className='flex flex-col gap-6 !p-3 w-1/3 h-full rounded-lg border border-gray-400 '>
                    <div className='flex justify-center'>
                        <h2 className='text-white text-2xl font-medium'>Create Task</h2>
                    </div>
                    <form className='flex flex-col gap-3'>
                        <div className='flex justify-start items-center'>
                            <label className='w-1/4 text-white text-base font-medium'>Task Title :</label>
                            <input className='w-full !px-2 !py-1.5 rounded-lg border border-gray-400 text-white placeholder:text-gray-400' type="text" placeholder='Enter Task Title' />
                        </div>
                        <div className='flex justify-start items-center'>
                            <label className='w-1/4 text-white text-base font-medium'>Date :</label>
                            <input className='w-full !px-2 !py-1.5 rounded-lg border border-gray-400 text-white z-10 placeholder:!text-gray-400 input-date' type="date" />
                        </div>
                        <div className='flex justify-start items-center'>
                            <label className='w-1/4 text-white text-base font-medium'>Asign To :</label>
                            <input className='w-full !px-2 !py-1.5 rounded-lg border border-gray-400 text-white placeholder:text-gray-400' type="text" placeholder='Enter Asign Name' />
                        </div>
                        <div className='flex justify-start items-center'>
                            <label className='w-1/4 text-white text-base font-medium'>Category :</label>
                            <input className='w-full !px-2 !py-1.5 rounded-lg border border-gray-400 text-white placeholder:text-gray-400' type="text" placeholder='Enter Category' />
                        </div>
                        <div className='flex justify-start items-start'>
                            <label className='w-1/4 text-white text-base font-medium'>Discription :</label>
                            <textarea rows={4} className='w-full !px-2 !py-1.5 rounded-lg border border-gray-400 text-white placeholder:text-gray-400' type="text" placeholder='Enter Category' />
                        </div>
                        <div className='flex justify-end !mt-3 '>
                            <button className='cursor-pointer font-medium !px-4 !py-1.5 rounded-lg text-white border border-white transition ease-in-out duration-300 hover:bg-white hover:text-black'>
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateTask