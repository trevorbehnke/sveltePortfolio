<script context="module">
  import Head from '$lib/components/Head.svelte'

  import PCard from '$lib/components/PCard.svelte'
  import projects from '../projects.js'
</script>

<script>
  let searchTerm = ''
  let filteredList = []
  $: {
    if (searchTerm) {
      filteredList = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      filteredList = [...projects]
    }
  }
</script>

<Head title={`Portfolio`} />

<div class="mb-4">
  <hr />
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1 class="py-4">Portfolio</h1>
    </div>
    <div>
      <input
        class="border-black dark:border-gray-300 focus:placeholder-transparent dark:focus:placeholder-transparent focus:outline-none focus:border-primary dark:focus:border-primary text-black dark:text-gray-300 placeholder-black  dark:placeholder-gray-300 bg-white dark:bg-black rounded-md text-md p-2 border-2"
        bind:value={searchTerm}
        placeholder="Search..."
      />
    </div>
  </div>
  <hr />
</div>

<div class="flex-grow divide-y divide-gray-300 dark:divide-gray-700">
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
</div>
