"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Frontend Developer",
    company: "EZ Works",
    location: "Gurugram, Haryana",
    period: "Aug 2023 - Present",
    description: [
      "Led and mentored junior engineers, improving code efficiency by 30% through best practices and code reviews",
      "Worked with backend teams to drive seamless API integrations and optimize system performance",
      "Owned end-to-end development of key features, collaborated with design team to ensure timely delivery and seamless user experiences",
      "Built culture of code quality, testing, and continuous improvement, ensuring a robust and scalable codebase"
    ]
  },
  {
    title: "Software Engineer",
    company: "Redbasil",
    location: "Gurugram, Haryana",
    period: "March 2023 - Aug 2023",
    description: [
      "Worked in a small team of 4-5 engineers, collaborating directly with the CTO at Redbasil",
      "Contributed to product development decisions, shaping feature prioritization and technical strategy",
      "Led API integrations by working closely with backend engineers, optimizing data flow and performance"
    ]
  },
  {
    title: "Junior Developer",
    company: "Youblock",
    location: "Bengaluru, Karnataka",
    period: "July 2022 - March 2023",
    description: [
      "Worked at an early-stage startup, gaining hands-on experience and collaborating directly with the founder of Youblock to shape product development and technical decisions",
      "Developed UI using ReactJs and frontend design patterns and architecture",
      "Creating APIs using Nodejs and ExpressJs, Testing, Web3 wallet, and Storing data using Firebase datastore"
    ]
  },
  {
    title: "Instructional Associate",
    company: "Masai School",
    location: "Bengaluru, Karnataka",
    period: "Dec 2021 - July 2022",
    description: [
      "Helped more than 100 students to solve their technical doubts",
      "Delivering one-to-one and one-to-many sessions to students"
    ]
  }
];

export function ExperienceSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey working with various teams and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 max-w-3xl mx-auto"
        >
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-primary/30 before:content-['']"
            >
              <div className="absolute -left-1.5 top-0 h-3 w-3 rounded-full bg-primary" />

              <Card className="border-primary/20">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl font-bold flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {job.title}
                    </CardTitle>
                    <Badge variant="outline" className="bg-primary/10">
                      <Calendar className="h-3 w-3 mr-1" /> {job.period}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center text-muted-foreground">
                    <Building className="h-4 w-4 mr-1" />
                    {job.company}, {job.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    {job.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
