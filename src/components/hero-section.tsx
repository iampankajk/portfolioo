'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { DevSVG } from './dev-svg';

export function HeroSection() {
  return (
    <section className='relative pb-16 pt-24 md:pb-24 md:pt-36 overflow-hidden'>
      <div className='absolute inset-0 -z-10 opacity-30 dark:opacity-20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='100%'
          height='100%'
          className='stroke-primary/10'
        >
          <defs>
            <pattern
              id='grid'
              width='40'
              height='40'
              patternUnits='userSpaceOnUse'
            >
              <path d='M 40 0 L 0 0 0 40' fill='none' strokeWidth='1' />
            </pattern>
          </defs>
          <rect width='100%' height='100%' fill='url(#grid)' />
        </svg>
      </div>

      {/* Add the developer SVG illustration */}
      <DevSVG />

      <div className='container relative'>
        <div className='md:max-w-[60%] md:ml-0 mx-auto text-center md:text-left'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='mb-6'
          >
            <h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
              <span className='text-primary'>Frontend</span> Developer
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='mb-10'
          >
            <p className='text-xl text-muted-foreground'>
              Hi, I'm{' '}
              <span className='font-semibold text-foreground'>
                Pankaj Kumar
              </span>
              . A passionate Frontend Developer specializing in React.js,
              Next.js, and modern web technologies. Currently based in New
              Delhi, India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='flex flex-col sm:flex-row items-center md:items-start md:justify-start justify-center gap-4'
          >
            <Button asChild size='lg' className='gap-2 px-6'>
              <Link href='/#contact'>
                Contact Me <ArrowRight className='h-4 w-4' />
              </Link>
            </Button>
            <Button variant='outline' size='lg' asChild className='gap-2 px-6'>
              <Link href='/#projects'>View Projects</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='mt-10 flex items-center md:justify-start justify-center gap-6'
          >
            <Link
              href='mailto:raipankaj150@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Email'
            >
              <Mail className='h-6 w-6' />
            </Link>
            <Link
              href='https://github.com/iampankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='GitHub'
            >
              <Github className='h-6 w-6' />
            </Link>
            <Link
              href='https://linkedin.com/in/iampankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-6 w-6' />
            </Link>
            <Link
              href='https://twitter.com/iampankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Twitter'
            >
              <Twitter className='h-6 w-6' />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
