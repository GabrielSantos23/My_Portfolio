import { createClient, groq } from 'next-sanity';

export const client = createClient({
  projectId: 'h6ev58li',

  dataset: 'production',

  apiVersion: '2023-05-30',
});

export async function getProject() {
  return client.fetch(
    groq`*[_type == 'project']{
        _id,
        _createdAt,
        title,
        subtitle,
        about,
        technologies,
        website,
        open,
        "slug": slug.current,
        "imageUrl": imageUrl.asset->url,
      } | order(_createdAt desc)`
  );
}

export async function getDesigns() {
  return client.fetch(
    groq`*[_type == 'design']{
              _id,
              _createdAt,
              title,
              subtitle,
              about,
              technologies,
              website,
              "slug": slug.current,
              "imageUrl": imageUrl.asset->url,
  
          }`
  );
}
