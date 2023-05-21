import { CollectionConfig } from 'payload/types';

const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    defaultColumns: ['client', 'projectDate', 'service', 'portfolioImage', 'status'],
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'client',
      type: 'text',
    },
    {
      name: 'portfolioImage',
      type: 'upload',
      relationTo: 'media',
    },
   
    {
      name: 'projectDate',
      type: 'date',
    },
    {
      name: 'service',
      type: 'relationship',
      relationTo: 'services'
    },
   
    {
      name: 'content',
      type: 'richText'
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          value: 'draft',
          label: 'Draft',
        },
        {
          value: 'published',
          label: 'Published',
        },
      ],
      defaultValue: 'draft',
      admin: {
        position: 'sidebar',
      }
    }
  ],
}

export default Projects;