'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

function ContactForm() {
	const [showThanks, setShowThanks] = useState<boolean>(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm()
	const formRef = useRef<HTMLFormElement>(null)

	const sendEmail = () => {
		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
				process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
				formRef.current!,
				'3Kfp25amvpJXfbaFZ'
			)
			.then(
				result => {
					setShowThanks(true)
				},
				error => {
					console.log(error.text)
				}
			)
		reset()
	}

	return (
		<>
			{showThanks ? (
				<div className='text-left'>
					<h1 className='mt-3 text-sm text-brand-textSecondary'>
						Thank you for contacting me, I will get back to you as soon as
						possible.
					</h1>
				</div>
			) : (
				<form
					className='w-full pt-3'
					ref={formRef}
					onSubmit={handleSubmit(sendEmail)}
				>
					<label htmlFor='user_name'>Name</label>
					<input
						className='w-full h-8 px-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500 bg-[#2b2b2b] mb-2'
						{...register('user_name', { required: true, minLength: 3 })}
						type='text'
						name='user_name'
					/>
					{errors.user_name?.type === 'required' && (
						<p className='text-sm text-brand-textSecondary' role='alert'>
							Name is required
						</p>
					)}
					<label htmlFor='user_email'>Email</label>
					<input
						className='w-full h-8 px-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500  bg-[#2b2b2b] mb-2'
						{...register('user_email', {
							required: true,
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'invalid email address'
							}
						})}
						type='email'
						name='user_email'
					/>
					{errors.user_email?.type === 'required' && (
						<p className='text-sm text-brand-textSecondary' role='alert'>
							Email is required
						</p>
					)}
					<label htmlFor='message'>Message</label>
					<textarea
						className='w-full h-20 p-2 outline-none rounded-md transition-all duration-100 ease-in-out focus:border-2 focus:border-teal-500 bg-[#2b2b2b]'
						{...register('message', { required: true, minLength: 3 })}
						name='message'
					/>
					{errors.message?.type === 'required' && (
						<p className='mb-2 text-sm text-brand-textSecondary' role='alert'>
							Message is required
						</p>
					)}
					<button
						className='px-4 py-2 mt-1 text-sm font-medium text-white transition-all border rounded-md hover:text-white hover:bg-neutral-700 hover:border-transparent focus:outline-none focus:ring-1 focus:ring-white focus:ring-offset-1'
						type='submit'
						value='Send'
					>
						Send
					</button>
				</form>
			)}
		</>
	)
}
export default ContactForm
