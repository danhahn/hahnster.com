<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<div class="layout">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>{new Date().getFullYear()} Dan Hahn</p>
	</footer>
</div>

<style lang="postcss">
	.layout {
		@apply container mx-auto;
	}
</style>
