'use client';

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  {
    quote: 'This platform has revolutionized my approach to web development. The hands-on tutorials and expert feedback have been invaluable in mastering the latest web technologies.',
    name: 'Jessica Lee',
    title: 'Web Developer',
  },
  {
    quote: 'As an app developer, I’ve found this platform to be a game-changer. The detailed guides and practical exercises have made creating robust and efficient applications much more straightforward.',
    name: 'Michael faraday',
    title: 'Mobile App Developer',
  },
  {
    quote: 'Building games requires a deep understanding of complex concepts. This platform’s interactive projects and comprehensive lessons have been instrumental in enhancing my game development skills.',
    name: 'Samson',
    title: 'Game Developer',
  },
  {
    quote: 'Learning Next.js through this platform has been an incredible experience. The focus on real-world applications and advanced features has accelerated my development process significantly.',
    name: 'David Kim',
    title: 'Full-Stack Developer',
  },
  {
    quote: 'React.js can be daunting at first, but the step-by-step tutorials here have made it much more accessible. I now feel confident building dynamic and responsive UIs.',
    name: 'Harram',
    title: 'Frontend Developer',
  },
  {
    quote: 'Generative AI is a complex field, but this platform breaks it down into manageable parts. The practical examples and cutting-edge projects have deepened my understanding significantly.',
    name: 'Junaid Sakhir',
    title: 'AI Researcher',
  },
  {
    quote: 'The interactive coding exercises and detailed feedback have accelerated my journey from a beginner to an advanced developer in web technologies.',
    name: 'ALI Baba',
    title: 'Web Developer',
  },
  {
    quote: 'The platform’s comprehensive resources on app development have been crucial for my career growth. The project-based learning approach is highly effective.',
    name: 'Farhan Akram',
    title: 'Mobile App Developer',
  },
  {
    quote: 'Thanks to the immersive game development tutorials, I have gained the skills to create engaging and complex games that stand out in the industry.',
    name: 'Sobia Taylor',
    title: 'Game Developer',
  },
  {
    quote: 'Mastering Next.js with this platform has been a transformative experience. The advanced tutorials and real-world projects have taken my skills to the next level.',
    name: 'Arif Naseer',
    title: 'Full-Stack Developer',
  },
  {
    quote: 'The resources for angular.js here are top-notch. The clarity and depth of the tutorials have made building modern web applications much easier and more enjoyable.',
    name: 'Noman',
    title: 'Frontend Developer',
  },
  {
    quote: 'The generative AI modules provided here are exceptionally detailed and practical. I feel much more prepared to work on cutting-edge AI projects now.',
    name: 'M Furqan',
    title: 'AI Researcher',
  },
];

function TestiMonialCard() {
  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] w-full bg-black bg-grid-white/[0.2] overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 text-white relative z-10">Hear Our Voices: Success Stories from the Coding Community</h2>
        <div className="flex relative overflow-hidden px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex justify-center items-center w-full max-w-6xl">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>
            <div className="absolute inset-0 flex items-center justify-between">
                <div className="w-1/2 h-full bg-gradient-to-r from-transparent to-black opacity-60"></div>
                <div className="w-1/2 h-full bg-gradient-to-l from-transparent to-black opacity-60"></div>
            </div>
        </div>
    </div>
  );
}

export default TestiMonialCard;
