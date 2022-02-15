<script lang="ts">
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<ul>
		<li>
			<a href="/">Home</a>
		</li>
		<li>
			<a href="/about">About</a>
		</li>
		<li>
			<a href="/resume">Resume</a>
		</li>
	</ul>
</header>

<style lang="postcss">
	header {
		@apply border-b-2;
	}

	ul {
		@apply flex gap-2 justify-center;
	}

	li {
		@apply p-2;
	}
</style>
