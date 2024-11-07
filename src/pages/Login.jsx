import React from 'react'
import AuthLayouts from '../layouts/AuthLayouts'
import InputForm from '../components/InputForm'
import { Link } from 'react-router-dom'
import Button from "../components/Button"

const Login = () => {
  return (
    <div>
        <AuthLayouts>

<div className="mt-6 min-w-[450px] flex flex-col gap-4">
<div className="w-full">
            <h1 className="text-3xl font-bold">Login</h1>
            <h1 className="text-2xl font-bold text-zinc-800 pt-8">Welcome back!</h1>
            <p className="text-sm text-zinc-800">Please log in to continue where you left off.</p>
            </div>
    <InputForm id="emailInput" type="email" placeholder="@example.com" label="Email Address" icon="mage:email"/>
    <InputForm id="passwordInput" type="password" placeholder="Password must be at least 8 characters long." label="Password" icon="solar:lock-linear"/>
    <div className="flex justify-end w-full">
    <Link href="/auth/forgot-password" className="text-blue-500 hover:underline text-end text-sm">Forgot Password?</Link>
    </div>
    <Button label="Login"/>
    <div className="flex justify-center items-center gap-1 text-zinc-800 text-sm">
        <p>Don't have an account?</p>
        <Link href="/auth/signup" className="text-blue-500 hover:underline text-end text-sm">Sign Up now</Link>
    </div>
</div>
        </AuthLayouts>
    </div>
  )
}

export default Login