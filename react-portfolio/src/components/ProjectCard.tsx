'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  tag: string;
  image: string;
  title: string;
  description: string;
  tech: string;
  category?: string;
}

export default function ProjectCard({ tag, image, title, description, tech }: ProjectCardProps) {
  const techStack = tech.split(', ');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="card group cursor-pointer h-full w-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative mb-4 overflow-hidden rounded-lg flex-shrink-0">
        <Image 
          src={image} 
          alt={title} 
          width={400} 
          height={250} 
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Tag */}
        <div className="absolute top-3 left-3">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {tag}
          </span>
        </div>
      </div>

      {/* Content - Flex grow to fill remaining space */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        
        {/* Tech Stack - Always at bottom */}
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <h4 className="text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-1">
            {techStack.slice(0, 3).map((technology, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
              >
                {technology.trim()}
              </span>
            ))}
            {techStack.length > 3 && (
              <span className="text-xs text-gray-500 dark:text-gray-400 px-2 py-1">
                +{techStack.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
