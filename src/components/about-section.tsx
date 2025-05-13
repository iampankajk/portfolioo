'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const technicalSkills = [
  'JavaScript',
  'React.js',
  'Next.js',
  'TypeScript',
  'Redux',
  'Node.js',
  'Express.js',
  'MongoDB',
  'IndexedDB',
  'CSS',
  'SCSS',
  'Tailwind CSS',
  'Shadcn/UI',
  'Bootstrap',
  'Storybook',
];

const developerTools = [
  'Git',
  'GitHub',
  'Vercel',
  'Google Cloud Platform',
  'VS Code',
  'Google PageSpeed',
];

const softSkills = ['Ownership', 'Team Collaboration', 'Punctuality'];

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id='about' className='py-16 md:py-24 bg-muted/30'>
      <div className='container'>
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className='grid grid-cols-1 md:grid-cols-2 gap-10'
        >
          {/* About Me */}
          <motion.div variants={itemVariants}>
            <h2 className='text-3xl font-bold mb-6'>About Me</h2>
            <div className='space-y-4 text-muted-foreground'>
              <p>
                I'm a Frontend Developer with a passion for creating smooth,
                responsive user interfaces and scalable web applications. With
                expertise in modern JavaScript frameworks and libraries, I
                specialize in building exceptional digital experiences.
              </p>
              <p>
                My approach focuses on writing clean, maintainable code that not
                only works well but is also easy to extend and adapt as projects
                evolve. I believe in continuous learning and stay updated with
                the latest web technologies and best practices.
              </p>
              <p>
                Currently based in New Delhi, India, I enjoy collaborating with
                teams to transform complex problems into elegant solutions. When
                I'm not coding, I'm exploring new technologies and contributing
                to open-source projects.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div variants={itemVariants}>
            <h2 className='text-3xl font-bold mb-6'>Skills</h2>

            <div className='space-y-6'>
              <div>
                <h3 className='text-xl font-medium mb-3'>Technical Skills</h3>
                <motion.div
                  className='flex flex-wrap gap-2'
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={badgeVariants}
                      custom={index}
                    >
                      <Badge variant='outline' className='px-3 py-1 text-sm'>
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <h3 className='text-xl font-medium mb-3'>Developer Tools</h3>
                <motion.div
                  className='flex flex-wrap gap-2'
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  {developerTools.map((tool, index) => (
                    <motion.div
                      key={index}
                      variants={badgeVariants}
                      custom={index}
                    >
                      <Badge variant='outline' className='px-3 py-1 text-sm'>
                        {tool}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              <div>
                <h3 className='text-xl font-medium mb-3'>Soft Skills</h3>
                <motion.div
                  className='flex flex-wrap gap-2'
                  variants={containerVariants}
                  initial='hidden'
                  whileInView='visible'
                  viewport={{ once: true }}
                >
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      variants={badgeVariants}
                      custom={index}
                    >
                      <Badge className='px-3 py-1 text-sm'>{skill}</Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
