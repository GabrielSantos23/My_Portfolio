const project = {
  name: 'project',

  title: 'Project',

  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
    },
    {
      name: 'imageUrl',
      title: 'ImageUrl',
      type: 'image',

      options: { hotspot: true },

      fields: [
        {
          name: 'alt',

          title: 'Alt',

          type: 'string',
        },
      ],
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'open',
      title: 'Open Project',
      type: 'url',
    },
  ],
};

export default project;
