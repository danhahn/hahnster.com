export type TechIcons =
	| 'css3'
	| 'firebase'
	| 'github'
	| 'html5'
	| 'react'
	| 'svelte'
	| 'typescript';

export type Project = {
	projectId: string;
	url: { uri: string; label?: string };
	desc: string;
	tech: TechIcons[];
	title: string;
};
