"use client";

import React from 'react';
import { WavyBackground } from './ui/wavy-background';
import faiImage from '@/components/images/fai.png';
import aliImage from '@/components/images/ali.jpg';
import asifImage from '@/components/images/asif.jpg';
import { AnimatedTooltip } from './ui/animated-tooltip';

const Instructors = [
  {
    id: 1,
    name: 'M Faizan Akram',
    designation: 'Web & App Development Mentor',
    image: faiImage, 
  },
  {
    id: 2,
    name: 'M Ali Raza',
    designation: 'Game Development Mentor',
    image: aliImage, 
  },
  {
    id: 3,
    name: 'Asif Langrah',
    designation: 'AI Generative Mentor',
    image: asifImage, 
  },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground
        className='w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full'
        backgroundFill="#000000"
        blur={10}
        speed="medium"
        waveOpacity={0.5}
        colors={["#87CEEB", "#FFB6C1", "#3CB371"]} 
        waveWidth={75}
      >
        <h2 className='text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8'>
          Meet Our Instructors
        </h2>
        <p className='text-base md:text-lg text-center mb-4 text-white'>
          Discover the talented professionals who will guide your coding journey
        </p>
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={Instructors} />
        </div>
      </WavyBackground>   
    </div>
  );
}

export default Instructor;
