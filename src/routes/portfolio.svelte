<script>
	import PCard from '$lib/components/PCard.svelte';
	import projects from '../projects.js';
</script>

<hr />
<h1 class="py-4">Portfolio</h1>
<hr />

{#each projects as project}
	<PCard
		src={project.src}
		alt={project.alt}
		title={project.title}
		description={project.description}
		siteLink={project.siteLink}
		sourceLink={project.sourceLink}
	/>
{/each}
