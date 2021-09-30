<script context="module">
  export const prerender = true
</script>

<script>
  import { name } from '$lib/info.js'
</script>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="flex flex-col flex-grow">
  <div class="flex-grow bg-hero-image bg-center bg-no-repeat bg-cover relative" />
</div>
