import React, { useState } from 'react'

const Login = ({ hendleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHendler = (e) => {
        e.preventDefault();
        hendleLogin(email, password)
        setEmail("");
        setPassword("");
    }

    return (
        <>
            <div className='flex justify-center items-center h-screen w-full'>
                <div className='flex flex-col justify-center items-center gap-6 !p-6 w-sm h-[400px] border border-white rounded-lg'>
                    <h2 className="text-3xl font-semibold text-white text-center mb-6">Login</h2>
                    <form onSubmit={(e) => {
                        submitHendler(e)
                    }} className='flex flex-col gap-8 w-full'>
                        <div>
                            <label className="block text-white !mb-2">Email</label>
                            <input
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                type="email"
                                required
                                placeholder="Enter your email"
                                className="w-full !px-4 !py-2 bg-transparent border border-white rounded-lg text-white !outline-none"
                            />
                        </div>
                        <div>
                            <label className="block text-white !mb-2">Password</label>
                            <input
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                type="password"
                                required
                                placeholder="Enter your password"
                                className="w-full !px-4 !py-2 bg-transparent border border-white rounded-lg text-white !outline-none "
                            />
                        </div>
                        <button
                            type="submit"
                            className="!px-8 !py-2 cursor-pointer bg-white rounded-lg font-semibold hover:bg-gray-200 transition"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login