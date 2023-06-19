import { defineConfig } from 'tinacms';

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main';

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'static',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'show',
        label: 'Shows',
        path: 'shows',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'number',
            name: 'number',
            label: 'Number',
            required: true,
          },
          {
            type: 'number',
            name: 'date',
            label: 'Date',
            required: true,
            ui: {
              component: 'date',
              parse: (value) => value && value.valueOf(),
            },
          },
          {
            type: 'string',
            name: 'url',
            label: 'Url',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        // ui: {
        //   router: ({ document: doc }) => {
        //     const showNumber = doc._sys.filename.split('-')[0].trim();
        //     return `/show/${showNumber}/${slug(doc._sys.title)}`;
        //   },
        // },
      },
    ],
  },
});
