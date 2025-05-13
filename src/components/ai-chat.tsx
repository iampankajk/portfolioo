"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "./ui/card";
import { MessageCircle, ChevronRight, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

// For a real application, this would come from a database or API
const PORTFOLIO_DATA = {
  name: "Pankaj Kumar",
  title: "Frontend Developer",
  location: "New Delhi, India",
  email: "raipankaj150@gmail.com",
  phone: "+91 8448669636",
  skills: {
    technical: [
      "JavaScript", "React.js", "Next.js", "TypeScript", "Redux",
      "Node.js", "Express.js", "MongoDB", "IndexedDB", "CSS",
      "SCSS", "Tailwind CSS", "Shadcn/UI", "Bootstrap", "Storybook"
    ],
    tools: [
      "Git", "GitHub", "Vercel", "Google Cloud Platform", "VS Code", "Google PageSpeed"
    ],
    soft: [
      "Ownership", "Team Collaboration", "Punctuality"
    ]
  },
  experience: [
    {
      role: "Frontend Developer",
      company: "EZ Works",
      location: "Gurugram, Haryana",
      period: "Aug 2023 - Present",
      achievements: [
        "Led and mentored junior engineers, improving code efficiency by 30% through best practices and code reviews",
        "Worked with backend teams to drive seamless API integrations and optimize system performance",
        "Owned end-to-end development of key features, collaborated with design team to ensure timely delivery and seamless user experiences",
        "Built culture of code quality, testing, and continuous improvement, ensuring a robust and scalable codebase"
      ]
    },
    {
      role: "Software Engineer",
      company: "Redbasil",
      location: "Gurugram, Haryana",
      period: "March 2023 - Aug 2023",
      achievements: [
        "Worked in a small team of 4-5 engineers, collaborating directly with the CTO at Redbasil",
        "Contributed to product development decisions, shaping feature prioritization and technical strategy",
        "Led API integrations by working closely with backend engineers, optimizing data flow and performance"
      ]
    },
    {
      role: "Junior Developer",
      company: "Youblock",
      location: "Bengaluru, Karnataka",
      period: "July 2022 - March 2023",
      achievements: [
        "Worked at an early-stage startup, gaining hands-on experience and collaborating directly with the founder of Youblock to shape product development and technical decisions",
        "Developed UI using ReactJs and frontend design patterns and architecture",
        "Creating APIs using Nodejs and ExpressJs, Testing, Web3 wallet, and Storing data using Firebase datastore"
      ]
    }
  ],
  projects: [
    {
      name: "TR42",
      description: "An editing product to facilitate seamless translation of documents across multiple languages, enhancing efficiency and accuracy for translation projects",
      features: [
        "Added Undo/Redo functionality, improving user workflow and error recovery",
        "Added user accessibility between translator and proofreader, as well as quality assurance to maintain data consistency and seamless translation of documents",
        "Implemented a \"Find and Replace\" feature, improving text-editing efficiency and speed by 40%",
        "Developed virtualization techniques, reducing JSON data rendering time for Excel by 60%",
        "Developed chat and notification system using web socket and real-time data sync between users",
        "Built an intuitive File Preview system for Word, Pptx, and PDF files, enhancing user experience"
      ],
      tech: "React.js, TypeScript, JavaScript, Redux"
    },
    {
      name: "EZ Works",
      description: "Official website of EZ Works",
      features: [
        "Contributed to many landing pages and the home page of EZ Works",
        "Optimized Next.js SSR performance, reducing page load time by 50%, leading to improved SEO rankings"
      ],
      tech: "Next.js, TypeScript, JavaScript, Redux"
    },
    {
      name: "Redbasil",
      description: "Official website of Redbasil",
      features: [
        "Led the development of the Redbasil B2B e-commerce platform from scratch, leveraging Next.js, a React-based framework",
        "Designed and maintained a robust Redux store architecture, and implemented it as the state management solution",
        "Configured and integrated Firebase Authentication as the authentication solution, ensuring smooth end-to-end API integration",
        "Efficiently integrated Next.js's server-side rendering capabilities, which enhanced load time by 50%",
        "Worked on OCR using PyTesseract to extract information from invoice receipts"
      ],
      tech: "Next.js, TypeScript, JavaScript, Redux"
    }
  ],
  education: {
    degree: "B.Tech Computer Science & Engineering",
    university: "Lovely Professional University, Punjab (Jalandhar)",
    period: "Aug 2017 - June 2021"
  }
};

interface Message {
  id: string;
  text: string;
  type: "user" | "bot";
  timestamp: Date;
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi there! I'm Pankaj's AI assistant. I can answer questions about his skills, experience, projects, and more. How can I help you today?",
      type: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      type: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const response = generateResponse(input.toLowerCase());
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        type: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    // Basic response logic based on keywords
    if (query.includes("skill") || query.includes("tech") || query.includes("know")) {
      return `Pankaj is skilled in ${PORTFOLIO_DATA.skills.technical.join(", ")}. He also works with tools like ${PORTFOLIO_DATA.skills.tools.join(", ")}.`;
    } else if (query.includes("experience") || query.includes("work") || query.includes("job")) {
      return `Pankaj currently works as a ${PORTFOLIO_DATA.experience[0].role} at ${PORTFOLIO_DATA.experience[0].company} since ${PORTFOLIO_DATA.experience[0].period}. Previously, he worked at ${PORTFOLIO_DATA.experience[1].company} and ${PORTFOLIO_DATA.experience[2].company}.`;
    } else if (query.includes("education") || query.includes("degree") || query.includes("university") || query.includes("college")) {
      return `Pankaj has a ${PORTFOLIO_DATA.education.degree} from ${PORTFOLIO_DATA.education.university}, completed in ${PORTFOLIO_DATA.education.period}.`;
    } else if (query.includes("project") || query.includes("portfolio")) {
      return `Pankaj has worked on several projects including: 1) ${PORTFOLIO_DATA.projects[0].name} - ${PORTFOLIO_DATA.projects[0].description} 2) ${PORTFOLIO_DATA.projects[1].name} and 3) ${PORTFOLIO_DATA.projects[2].name}. Would you like to know more about any specific project?`;
    } else if (query.includes("tr42") || query.includes("translation")) {
      return `TR42 is ${PORTFOLIO_DATA.projects[0].description}. Key features include: ${PORTFOLIO_DATA.projects[0].features.join(", ")}. It was built using ${PORTFOLIO_DATA.projects[0].tech}.`;
    } else if (query.includes("ezworks") || query.includes("ez works")) {
      return `EZ Works is ${PORTFOLIO_DATA.projects[1].description}. Key contributions include: ${PORTFOLIO_DATA.projects[1].features.join(", ")}. It was built using ${PORTFOLIO_DATA.projects[1].tech}.`;
    } else if (query.includes("redbasil")) {
      return `Redbasil is ${PORTFOLIO_DATA.projects[2].description}. Key contributions include: ${PORTFOLIO_DATA.projects[2].features.join(", ")}. It was built using ${PORTFOLIO_DATA.projects[2].tech}.`;
    } else if (query.includes("contact") || query.includes("email") || query.includes("phone") || query.includes("reach")) {
      return `You can contact Pankaj at ${PORTFOLIO_DATA.email} or via phone at ${PORTFOLIO_DATA.phone}. He's based in ${PORTFOLIO_DATA.location}.`;
    } else if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
      return `Hello there! I'm Pankaj's AI assistant. How can I help you today?`;
    } else if (query.includes("thanks") || query.includes("thank you")) {
      return `You're welcome! Feel free to ask if you have any other questions about Pankaj's experience or skills.`;
    } else {
      return `I'm not sure I understand. You can ask me about Pankaj's skills, experience, projects, education, or contact information.`;
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-20 right-4 md:right-8 z-50 w-full max-w-md shadow-lg"
          >
            <Card className="border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg">Portfolio Assistant</CardTitle>
                <Button variant="ghost" size="icon" onClick={toggleChat}>
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-[350px] overflow-y-auto pr-2">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`mb-4 flex ${
                        message.type === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[75%] rounded-lg p-3 ${
                          message.type === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted"
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="mb-4 flex justify-start">
                      <div className="max-w-[75%] rounded-lg p-3 bg-muted">
                        <Loader2 className="h-5 w-5 animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <div className="flex w-full items-center gap-2">
                  <input
                    type="text"
                    placeholder="Ask something about Pankaj..."
                    className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSendMessage();
                    }}
                  />
                  <Button size="icon" disabled={isLoading} onClick={handleSendMessage}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="fixed bottom-4 right-4 md:right-8 z-50"
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full shadow-lg"
          onClick={toggleChat}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </motion.div>
    </>
  );
}
