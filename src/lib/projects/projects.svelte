<script lang="ts">
	type Project = {
		projectId: string;
		url: { uri: string; label?: string };
		desc: string;
		tech: string[];
		title: string;
	};
	export let projects: Project[] = [];
</script>

<hr class="clear-both lg:translate-y-10" />

<div class="grid lg:grid-cols-3 gap-2 lg:clear-both lg:translate-y-20">
	{#each projects as project (project.projectId)}
		<div
			class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 bg-gradient-to-br from-slate-800 to-slate-900"
		>
			<div class="grid grid-rows-column pt-6 md:p-8 text-center md:text-left space-y-4">
				<h2 class="text-slate-300">{project.title}</h2>
				<blockquote class="grid-">
					<p class="text-lg font-medium text-slate-200">
						{project.desc}
					</p>
				</blockquote>
				<div class="font-medium">
					<div class="text-slate-700 dark:text-slate-500">
						<a href={project.url.uri} target="_blank">{project.url.label || project.url.uri}</a>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
