<script context="module">
  export const load = async () => {
    try {
      const copy = await import(`../about.md`)
      return {
        props: {
          copy: copy.default
        }
      }
    } catch (e) {
      return {
        status: 404,
        error: `Uh oh! Sorry, looks like that page doesn't exist`
      }
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  // import TitleBar from '$lib/components/TitleBar.svelte'
  export let copy
</script>

<Head title={`About`} />

<!-- <TitleBar title="About" /> -->

<div class="mb-4">
  <hr />
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1 class="py-4">Portfolio</h1>
    </div>
    <div />
  </div>
  <hr />
</div>

<div class="prose prose-sm sm:prose lg:prose-lg dark:prose-dark">
  <svelte:component this={copy} />
</div>
