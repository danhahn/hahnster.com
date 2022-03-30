<script context="module" lang="ts">
	export const prerender = true;

	import Projects from '$lib/projects/projects.svelte';
</script>

<svelte:head>
	<title>Dan Hahn - hahnster.com</title>
</svelte:head>

<h1 class="mb-10">Hello world! I'm Dan!</h1>

<div
	class="rounded-full shadow-md shadow-storm-gray-700 border-2 border-stone-400 overflow-hidden lg:w-80 sm:w-full aspect-square lg:float-right lg:ml-5"
>
	<img src="./IMG_2115.jpeg" alt="" />
</div>

<p>
	I am a front end engineer who loves to build user interfaces. I have more than 20 years of
	experience working on some of the world's most popular brands. I love to build out user interfaces
	with a focus on accessibility, responsives and brand awareness. While I am not a designer I love
	to take others' designs and bring them to life!
</p>

<p>
	I love to work with Javascript, mainly ReactJs but have started to fall in love with Svelte and
	Svelte Kit. As I like to focus on front end components I must admit I love CSS, Styled Components
	and Sass.
</p>

<Projects
	projects={[
		{
			projectId: 'morgan-math',
			url: { uri: 'https://www.morgan-math.com' },
			desc: 'A math app that I built for my daughter to help her learn simple math problems.',
			tech: ['sevlte', 'css3'],
			title: 'Morgan Math'
		},
		{
			projectId: 'menu-planner-dev',
			url: { uri: 'https://www.menuplanner.dev' },
			desc: 'A tool for orginzign your menus one month at at time.',
			tech: ['sevlte', 'css3', 'typescript', 'firebase'],
			title: 'Menu Planner'
		},
		{
			projectId: 'gallery',
			url: { uri: 'https://github.com/danhahn/gallery-svelte', label: 'https://www.github.com' },
			desc: 'A simple we gallery to look at photos',
			tech: ['sevlte', 'css3'],
			title: 'Svelte Gallery'
		}
	]}
/>

<style lang="postcss">
	p {
		@apply my-5;
	}
</style>
