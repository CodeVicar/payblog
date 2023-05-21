import { CollectionConfig } from 'payload/types';

const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'serviceName',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'serviceName',
      type: 'text',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    }
  ],
  timestamps: false,
}

export default Services;
