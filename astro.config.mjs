// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserSite = repository && owner && repository === `${owner}.github.io`;
const base = process.env.GITHUB_ACTIONS && repository && !isUserSite ? `/${repository}` : '/';

// https://astro.build/config
export default defineConfig({
	site: process.env.GITHUB_REPOSITORY_OWNER
		? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
		: 'https://example.com',
	base,
	vite: {
		plugins: [tailwindcss()],
	},
});
