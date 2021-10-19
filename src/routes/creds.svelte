<script context="module">
  import Head from '$lib/components/Head.svelte'
  import CCard from '$lib/components/CCard.svelte'
  import creds from '../creds'
</script>

<Head title={`Creds`} />

<div class="mb-4">
  <hr />
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1 class="py-4">Creds</h1>
    </div>
  </div>
  <hr />
</div>

<div class="grid sm:grid-cols-2 grid-cols-1 gap-16">
  {#each creds as cred}
    <CCard src={cred.src} alt={cred.alt} />
  {/each}
</div>
<div class="flex-grow divide-y divide-gray-300 dark:divide-gray-700" />
