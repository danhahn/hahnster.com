import type { Project } from './projectTypes';

export const projects: Project[] = [
	{
		projectId: 'morgan-math',
		url: { uri: 'https://www.morgan-math.com' },
		desc: 'A math app that I built for my daughter to help her learn simple math problems.',
		tech: ['svelte', 'css3'],
		title: 'Morgan Math'
	},
	{
		projectId: 'menu-planner-dev',
		url: { uri: 'https://www.menuplanner.dev' },
		desc: 'A tool for orginzign your menus one month at at time.',
		tech: ['svelte', 'css3', 'typescript', 'firebase'],
		title: 'Menu Planner'
	},
	{
		projectId: 'gallery',
		url: { uri: 'https://github.com/danhahn/gallery-svelte', label: 'https://www.github.com' },
		desc: 'A simple we gallery to look at photos',
		tech: ['svelte', 'css3'],
		title: 'Svelte Gallery'
	}
];
