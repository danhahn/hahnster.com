<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="layout">
	<Header />

	<main class="lg:p-10 sm:p-20 lg:w-4/5">
		<slot />
	</main>

	<footer>
		<p>&copy;{new Date().getFullYear()} Dan Hahn</p>
	</footer>
</div>

<style lang="postcss">
	:global(body) {
		@apply bg-gradient-to-b from-storm-gray-200 to-transparent bg-fixed;
	}
	.layout {
		@apply container mx-auto grid h-screen;
		grid-template-rows: auto 1fr auto;
	}

	main {
		@apply mx-auto;
	}

	footer {
		@apply p-10 text-center border-t-2 border-t-storm-gray-600 mt-40;
	}
</style>
