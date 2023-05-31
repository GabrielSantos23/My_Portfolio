'use client';

import config from '@/sanity.config';

import { NextStudio } from 'next-sanity/studio';

export default function AdminPage() {
  return (
    <div className='absolute left-0 top-0 w-full h-full'>
      <NextStudio config={config} />;
    </div>
  );
}
