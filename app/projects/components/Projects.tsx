'use client';

import React, { useState } from 'react';
import { Project } from './body';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../sanity/sanity-utils';
import Image from 'next/image';
import ImageModal from '@/app/components/Modal/Modal';
interface ProjectProps {
  project: Project;
  key: string;
}

const Projects: React.FC<ProjectProps> = ({ project }) => {
  const builder = imageUrlBuilder(client);
  const [selectedPost, setSelectedPost] = useState<Project | null>(null);
  const handlePostClick = (project: Project) => {
    setSelectedPost(project);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedPost(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Image
        src={project.imageUrl}
        onClick={() => handlePostClick(project)}
        width={450}
        height={150}
        alt={project.title}
        className='rounded-md hover:opacity-50 transition cursor-pointer '
      />
      {selectedPost && (
        <ImageModal post={selectedPost} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;
