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
  export let copy
</script>

<hr />
<h1 class="py-4">About</h1>
<hr />

<div class="prose prose-sm sm:prose lg:prose-lg dark:prose-dark">
  <svelte:component this={copy} />
</div>
