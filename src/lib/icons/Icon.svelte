<script lang="ts">
	import Css from './svgs/css3.svelte';
	import Firebase from './svgs/firebase.svelte';
	import Github from './svgs/github.svelte';
	import Html5 from './svgs/html5.svelte';
	import React from './svgs/react.svelte';
	import Svelte from './svgs/svelte.svelte';
	import Typescript from './svgs/typescript.svelte';

	const iconTable = {
		css3: Css,
		firebase: Firebase,
		github: Github,
		html5: Html5,
		react: React,
		svelte: Svelte,
		typescript: Typescript
	} as const;

	export let icon;

	$: IconName = iconTable[icon];
</script>

<div class="icon-set">
	<svelte:component this={IconName} />
</div>

<style lang="postcss">
	.icon-set :global(svg) {
		@apply fill-storm-gray-100 w-4 h-4;
	}
</style>
