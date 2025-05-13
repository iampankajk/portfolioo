"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: "tr42",
    title: "TR42",
    description: "An editing product to facilitate seamless translation of documents across multiple languages, enhancing efficiency and accuracy for translation projects.",
    features: [
      "Added Undo/Redo functionality, improving user workflow and error recovery",
      "Added user accessibility between translator and proofreader, as well as quality assurance to maintain data consistency and seamless translation of documents",
      "Implemented a \"Find and Replace\" feature, improving text-editing efficiency and speed by 40%",
      "Developed virtualization techniques, reducing JSON data rendering time for Excel by 60%",
      "Developed chat and notification system using web socket and real-time data sync between users",
      "Built an intuitive File Preview system for Word, Pptx, and PDF files, enhancing user experience"
    ],
    tech: ["React.js", "TypeScript", "JavaScript", "Redux"],
    image: "/projects/tr42.jpg"
  },
  {
    id: "ez-works",
    title: "EZ Works",
    description: "Official website of EZ Works. Contributed to many landing pages and the home page of EZ Works.",
    features: [
      "Built responsive landing pages with modern UI components",
      "Optimized Next.js SSR performance, reducing page load time by 50%, leading to improved SEO rankings"
    ],
    tech: ["Next.js", "TypeScript", "JavaScript", "Redux"],
    image: "/projects/ez-works.jpg"
  },
  {
    id: "redbasil",
    title: "Redbasil",
    description: "Official website of Redbasil. Led the development of the Redbasil B2B e-commerce platform from scratch.",
    features: [
      "Led the development of the Redbasil B2B e-commerce platform from scratch, leveraging Next.js, a React-based framework",
      "Designed and maintained a robust Redux store architecture, and implemented it as the state management solution",
      "Configured and integrated Firebase Authentication as the authentication solution, ensuring smooth end-to-end API integration",
      "Efficiently integrated Next.js's server-side rendering capabilities, which enhanced load time by 50%",
      "Worked on OCR using PyTesseract to extract information from invoice receipts"
    ],
    tech: ["Next.js", "TypeScript", "JavaScript", "Redux", "Firebase"],
    image: "/projects/redbasil.jpg"
  }
];

export function ProjectsSection() {
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
    <section id="projects" className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing some of my professional work and projects
          </p>
        </motion.div>

        <Tabs defaultValue="tr42" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-lg">
              {projects.map((project) => (
                <TabsTrigger key={project.id} value={project.id}>
                  {project.title}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {projects.map((project) => (
            <TabsContent key={project.id} value={project.id} className="space-y-6">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
              >
                <Card className="overflow-hidden border-primary/20">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold flex items-center gap-2">
                          <Rocket className="h-5 w-5 text-primary" />
                          {project.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-base">
                          {project.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pb-1">
                    <div className="mb-4">
                      <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                        <Code className="h-4 w-4 text-primary" />
                        Tech Stack
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, index) => (
                          <Badge key={index} variant="secondary" className="bg-secondary/40">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-2">Key Features</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {project.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            variants={itemVariants}
                            className="text-sm"
                          >
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
