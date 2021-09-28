<script>
	import PCard from '$lib/components/PCard.svelte';
	import projects from '../projects.js';
	let searchTerm = '';
	let filteredList = [];
	$: {
		if (searchTerm) {
			filteredList = projects.filter((project) =>
				project.title.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredList = [...projects];
		}
	}
</script>

<hr />

<div class="flex flex-row justify-between items-center">
	<div>
		<h1 class="py-4">Portfolio</h1>
	</div>

	<div>
		<input
			class="focus:outline-none border-none transition-colors duration-100 text-black dark:text-gray-300 placeholder-black  dark:placeholder-gray-300 bg-white dark:bg-black rounded-md text-md p-2 border-2"
			bind:value={searchTerm}
			placeholder="Search Projects..."
		/>
	</div>
</div>

<hr />

{#each filteredList as project}
	<PCard
		src={project.src}
		alt={project.alt}
		title={project.title}
		description={project.description}
		siteLink={project.siteLink}
		sourceLink={project.sourceLink}
	/>
{/each}
