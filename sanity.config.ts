import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';

import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'h6ev58li',

  dataset: 'production',

  title: 'My Portfolio',

  apiVersion: '2023-05-30',

  basePath: '/admin',

  plugins: [deskTool()],

  schema: { types: schemas },
});

export default config;
