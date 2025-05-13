'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { ThemeSwitcher } from './theme-switcher';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container py-8 md:py-12'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link href='/' className='flex items-center space-x-2'>
              <span className='font-bold text-lg'>Pankaj Kumar</span>
            </Link>
            <p className='text-sm text-muted-foreground mt-1'>
              Frontend Developer based in New Delhi, India
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className='flex space-x-6 mt-4 md:mt-0'
          >
            <Link
              href='mailto:raipankaj150@gmail.com'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Email'
            >
              <Mail className='h-5 w-5' />
            </Link>
            <Link
              href='https://github.com/iampankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='GitHub'
            >
              <Github className='h-5 w-5' />
            </Link>
            <Link
              href='https://linkedin.com/in/iampankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='LinkedIn'
            >
              <Linkedin className='h-5 w-5' />
            </Link>
            <Link
              href='https://twitter.com/realpankajk'
              target='_blank'
              rel='noopener noreferrer'
              className='text-muted-foreground hover:text-primary transition-colors'
              aria-label='Twitter'
            >
              <Twitter className='h-5 w-5' />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='mt-8 text-center text-sm text-muted-foreground'
        >
          <p>&copy; {currentYear} Pankaj Kumar. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
