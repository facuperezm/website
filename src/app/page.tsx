'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Newsreader } from 'next/font/google'

import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5'
import { countryCodeEmoji } from 'country-code-emoji'
import { cn } from '@/lib/utils'

import personalImg from '../../public/images/facundo.jpg'

import Section from '@/components/section-animate'
import Layout from '@/components/article-animate'
import Project from '@/components/project-component'
import ContactForm from '@/components/contact-form'
import Button from '@/components/ui/action-button'

import { PROJECTS } from '@/config/projects'
import { siteConfig } from '@/config/site'

const newsreader = Newsreader({
	subsets: ['latin'],
	style: ['italic']
})

export default function HomePage() {
	return (
		<main className='flex flex-col justify-center max-w-3xl px-4 m-auto align-center'>
			<section className='flex flex-col-reverse justify-center mt-16 md:flex-row md:justify-right'>
				<div className='flex-grow md:self-center'>
					<h1 className='mb-1 text-2xl font-extrabold md:text-4xl text-brand-textTerciary scroll-m-20 tracking-tight'>
						Facundo Perez Montalvo
					</h1>
					<span className={cn(newsreader.className, 'italic tracking-wide')}>
						Frontend developer based in Argentina {'  '}
					</span>
					{countryCodeEmoji('AR')}
				</div>
				<div className='relative max-w-sm mb-2 text-left rounded-lg flex-shrink-1 md:max-w-sm'>
					<Image
						alt='profile picture'
						src={personalImg}
						className='rounded-2xl w-28 md:w-56'
						width={500}
						height={500}
						priority
					/>
				</div>
			</section>
			<Section delay={0.2}>
				<h2 className='text-xl mt-6 mb-2 font-semibold text-brand-textTerciary'>
					About me
				</h2>
				<div className='mb-2'>
					<p className='leading-7 [&:not(:first-child)]:mt-6'>
						Hey! I&apos;m Facundo, a frontend developer with a self-taught
						background in the React stack. I specialize in creating
						user-friendly, visually appealing interfaces.
					</p>
					<p className='leading-7'>
						If you&apos;re looking for a dedicated frontend developer to join
						your team, I would love to hear from you. Let&apos;s work together
						to create something amazing!
					</p>
				</div>
				<div className='pt-1 align-center'>
					<div className='flex gap-2 justify-left'>
						<Link href={siteConfig.links.linkedin}>
							<Button variant='linkedin'>
								<IoLogoLinkedin /> View Linkedin
							</Button>
						</Link>
						<Link href={siteConfig.links.github}>
							<Button variant='github'>
								<IoLogoGithub /> View GitHub
							</Button>
						</Link>
					</div>
				</div>
			</Section>
			<Section delay={0.2}>
				<Layout>
					<h2 className='text-xl mt-6 mb-2 font-semibold text-brand-textTerciary'>
						Projects
					</h2>
					<p className='mb-4'>
						Some of the projects that I am currently working on:
					</p>
					<div className='grid grid-cols-1 gap-2'>
						{PROJECTS.map((project, index) => {
							return (
								<Section key={index}>
									<Project
										title={project.title}
										link={project.link}
										tech={project.tech}
									>
										{project.description}
									</Project>
								</Section>
							)
						})}
					</div>
				</Layout>
			</Section>
			<Section delay={0.3}>
				<h2 className='text-xl mt-6 mb-2 font-semibold text-brand-textTerciary'>
					Contact me
				</h2>
				<p className='leading-7'>
					Do you have a job opportunity or idea you&apos;d like to discuss? Feel
					free to send me an email:
				</p>
				<ContactForm />
			</Section>
		</main>
	)
}
