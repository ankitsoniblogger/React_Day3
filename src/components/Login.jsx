import React from 'react'

const Login = () => {
    return (
        <div className="justify-center items-center w-2/4 border-2 m-auto rounded shadow-lg mt-10 p-10 py-20 bg-slate-100">
            <h1 className='text-center mb-5 text-2xl ' >Login</h1>
            <form method="post" className='flex flex-col w-2/4 m-auto gap-4'>
                <input className='border-2 shadow-inner outline-none rounded p-2 border-gray-900' type="text" name="u" placeholder="Enter Mobile Number" required="required" />
                <input className='border-2 rounded  shadow-inner outline-none p-2 border-gray-900' type="password" name="p" placeholder="OTP" required="required" />
                <button type="submit" className="border-2 bg-blue-600 text-white px-4 rounded shadow-lg py-2">Let me in</button>
            </form>
        </div>
    )
}

export default Login