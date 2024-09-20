'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

const webinars =[
  {
    title: 'Mastering JavaScript for Web Development',
    description: 'Explore advanced JavaScript concepts to level up your web development skills.',
    slug: 'mastering-javascript-web-development',
    isFeatured: true,
  },
  {
    title: 'Building Scalable Web Apps with Next.js',
    description: 'Learn how to build and scale web applications using Next.js.',
    slug: 'scalable-web-apps-nextjs',
    isFeatured: true,
  },
  {
    title: 'CSS Grid and Flexbox for Responsive Design',
    description: 'Master the art of responsive web design using CSS Grid and Flexbox.',
    slug: 'css-grid-flexbox-responsive-design',
    isFeatured: false,
  },
  {
    title: 'Becoming a Full-Stack App Developer',
    description: 'Gain expertise in building full-stack applications for web and mobile platforms.',
    slug: 'full-stack-app-developer',
    isFeatured: true,
  },
  {
    title: 'Deploying Full-Stack Applications with Docker',
    description: 'Learn how to containerize and deploy full-stack applications using Docker.',
    slug: 'fullstack-applications-docker',
    isFeatured: false,
  },
  {
    title: 'Unlocking the Power of Tailwind CSS',
    description: 'Discover how to efficiently style your websites using Tailwind CSS.',
    slug: 'power-tailwind-css',
    isFeatured: true,
  },
  {
    title: 'Generative AI for Frontend Development',
    description: 'Leverage generative AI tools to automate frontend UI/UX design.',
    slug: 'generative-ai-frontend',
    isFeatured: true,
  },
  {
    title: 'Generative AI in Backend Automation',
    description: 'Learn how AI can automate backend processes and enhance scalability.',
    slug: 'ai-backend-automation',
    isFeatured: false,
  },
  {
    title: 'AI-Driven Full-Stack Development',
    description: 'Integrate AI across both frontend and backend to build intelligent full-stack apps.',
    slug: 'ai-full-stack-development',
    isFeatured: true,
  }
  
]

function UpComingWebinars() {
  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
        <h1 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h1>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Enhance Your Coding Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect 
        items={webinars.map(webinar =>(
          {
            title: webinar.title,
            description: webinar.description,
            link: '/'
          }
        ))} 
        />
        </div>
        <div className="mt-10 text-center">
        <Link
          href="/"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-teal-700 text-white font-semibold hover:from-teal-600 hover:to-teal-800 transition duration-300"
        >
          View All Webinars
        </Link>
        </div>
      </div>
    </div>
  )
}

export default UpComingWebinars      