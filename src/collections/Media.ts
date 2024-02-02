import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		staticURL: '/media',
		staticDir: '../public/media',
		adminThumbnail: 'thumbnail',
		mimeTypes: ['image/*'],
	},
	timestamps: false,
	fields: [],
};

export default Media;
