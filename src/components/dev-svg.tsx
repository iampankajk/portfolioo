'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function DevSVG() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className='absolute inset-0 -z-10 opacity-20 dark:opacity-10 overflow-hidden pointer-events-none'
      style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
    >
      {/* SVG for larger screens positioned to the right */}
      <div className='hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 w-2/5 h-full'>
        <svg
          width='100%'
          height='100%'
          viewBox='0 0 600 400'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='xMidYMid meet'
        >
          {/* Developer */}
          <motion.g
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            {/* Body */}
            <rect
              x='270'
              y='220'
              width='60'
              height='100'
              rx='5'
              fill='currentColor'
              className='text-primary/70'
            />

            {/* Head */}
            <circle
              cx='300'
              cy='190'
              r='30'
              fill='currentColor'
              className='text-primary/70'
            />

            {/* Left arm */}
            <motion.path
              d='M270 240 L230 280'
              stroke='currentColor'
              strokeWidth='10'
              strokeLinecap='round'
              initial={{ rotate: 0 }}
              animate={{ rotate: -5 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
              }}
              className='text-primary/70 origin-[270px_240px]'
            />

            {/* Right arm typing */}
            <motion.path
              d='M330 240 L370 280'
              stroke='currentColor'
              strokeWidth='10'
              strokeLinecap='round'
              initial={{ rotate: 0 }}
              animate={{ rotate: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.2,
              }}
              className='text-primary/70 origin-[330px_240px]'
            />

            {/* Desk */}
            <rect
              x='170'
              y='320'
              width='260'
              height='10'
              rx='2'
              fill='currentColor'
              className='text-primary/50'
            />

            {/* Computer */}
            <rect
              x='250'
              y='280'
              width='100'
              height='60'
              rx='5'
              fill='currentColor'
              className='text-primary/60'
            />
            <rect x='255' y='285' width='90' height='50' rx='3' fill='#111' />

            {/* Computer screen code */}
            <motion.g
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
              }}
            >
              <rect
                x='260'
                y='290'
                width='40'
                height='3'
                rx='1'
                fill='currentColor'
                className='text-primary'
              />
              <rect x='270' y='295' width='60' height='3' rx='1' fill='#666' />
              <rect x='280' y='300' width='40' height='3' rx='1' fill='#666' />
              <rect
                x='265'
                y='305'
                width='35'
                height='3'
                rx='1'
                fill='currentColor'
                className='text-primary'
              />
              <rect x='275' y='310' width='55' height='3' rx='1' fill='#666' />
              <rect x='260' y='315' width='25' height='3' rx='1' fill='#666' />
              <rect
                x='265'
                y='320'
                width='45'
                height='3'
                rx='1'
                fill='currentColor'
                className='text-primary'
              />
              <rect x='280' y='325' width='30' height='3' rx='1' fill='#666' />
            </motion.g>
          </motion.g>

          {/* Floating elements */}
          <motion.g
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {/* React logo */}
            <motion.g
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: 'linear',
              }}
              style={{ transformOrigin: '120px 120px' }}
            >
              <circle
                cx='120'
                cy='120'
                r='10'
                fill='currentColor'
                className='text-primary'
              />
              <ellipse
                cx='120'
                cy='120'
                rx='30'
                ry='10'
                stroke='currentColor'
                strokeWidth='2'
                className='text-primary/70'
              />
              <ellipse
                cx='120'
                cy='120'
                rx='30'
                ry='10'
                stroke='currentColor'
                strokeWidth='2'
                className='text-primary/70'
                transform='rotate(60 120 120)'
              />
              <ellipse
                cx='120'
                cy='120'
                rx='30'
                ry='10'
                stroke='currentColor'
                strokeWidth='2'
                className='text-primary/70'
                transform='rotate(120 120 120)'
              />
            </motion.g>

            {/* JavaScript logo */}
            <motion.g
              initial={{ y: 0 }}
              animate={{ y: -10 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                delay: 0.5,
              }}
            >
              <rect
                x='450'
                y='100'
                width='40'
                height='40'
                fill='currentColor'
                className='text-primary'
              />
              <text
                x='470'
                y='130'
                fill='black'
                textAnchor='middle'
                fontSize='25'
                fontWeight='bold'
              >
                JS
              </text>
            </motion.g>

            {/* Code brackets */}
            <motion.g
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2.5,
              }}
            >
              <text
                x='390'
                y='200'
                fill='currentColor'
                textAnchor='middle'
                fontSize='30'
                className='text-primary/70'
              >
                {'{ }'}
              </text>
            </motion.g>

            <motion.g
              initial={{ x: 0 }}
              animate={{ x: -5 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
              }}
            >
              <text
                x='180'
                y='230'
                fill='currentColor'
                textAnchor='middle'
                fontSize='25'
                className='text-primary/70'
              >
                {'</>'}
              </text>
            </motion.g>
          </motion.g>
        </svg>
      </div>

      {/* Subtle background elements for mobile */}
      <div className='md:hidden absolute inset-0 opacity-15'>
        <motion.svg
          width='100%'
          height='100%'
          viewBox='0 0 100 100'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <motion.circle
            cx='20'
            cy='20'
            r='5'
            fill='currentColor'
            className='text-primary'
            initial={{ y: 0 }}
            animate={{ y: -5 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2.5,
            }}
          />
          <motion.circle
            cx='80'
            cy='30'
            r='3'
            fill='currentColor'
            className='text-primary'
            initial={{ y: 0 }}
            animate={{ y: -3 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 1.8,
              delay: 0.5,
            }}
          />
          <motion.circle
            cx='50'
            cy='70'
            r='4'
            fill='currentColor'
            className='text-primary'
            initial={{ y: 0 }}
            animate={{ y: -4 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2.2,
              delay: 1,
            }}
          />
          <motion.text
            x='70'
            y='60'
            fill='currentColor'
            className='text-primary/70'
            fontSize='10'
            initial={{ x: 0 }}
            animate={{ x: 3 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2,
            }}
          >
            {'</>'}
          </motion.text>
          <motion.text
            x='30'
            y='40'
            fill='currentColor'
            className='text-primary/70'
            fontSize='12'
            initial={{ x: 0 }}
            animate={{ x: -3 }}
            transition={{
              repeat: Infinity,
              repeatType: 'reverse',
              duration: 2.3,
            }}
          >
            {'{ }'}
          </motion.text>
        </motion.svg>
      </div>
    </motion.div>
  );
}
