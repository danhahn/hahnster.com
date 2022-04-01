<script lang="ts">
	import Icon from '$lib/icons/Icon.svelte';

	export let icons: string[];
</script>

<ul class="m-auto lg:m-0">
	{#each icons as icon}
		<li><Icon {icon} /></li>
	{/each}
</ul>

<style lang="postcss">
	ul {
		@apply flex gap-2;
	}
</style>
