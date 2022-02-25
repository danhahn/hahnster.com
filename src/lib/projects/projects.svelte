<script lang="ts">
	export let projects = [];
</script>

<div class="flex gap-2 overflow-x-auto">
	{#each projects as project}
		<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
			<img
				class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
				src=""
				alt=""
				width="384"
				height="512"
			/>
			<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
				<blockquote>
					<p class="text-lg font-medium">
						“Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to
						customize, adapts to any design, and the build size is tiny.”
					</p>
				</blockquote>
				<div class="font-medium">
					<div class="text-sky-500 dark:text-sky-400">{project}</div>
					<div class="text-slate-700 dark:text-slate-500">Staff Engineer, Algolia</div>
				</div>
			</div>
		</figure>
	{/each}
</div>
