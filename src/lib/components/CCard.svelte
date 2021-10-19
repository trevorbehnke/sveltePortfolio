<script>
  // import Button from './Button.svelte'
  export let src
  export let alt
</script>

<div class="py-8 flex flex-wrap w-full items-center justify-center">
  <div class=" w-full flex items-center">
    <figure>
      <img class="rounded-xl" {src} {alt} />
    </figure>
  </div>
  <!-- <div class=" w-full sm:w-1/2 flex flex-col justify-center px-0 sm:px-4 py-4 sm:py-0">
    <div class="mb-8">
      <h1 class="text-center">{title}</h1>
    </div>
    <div>
      <p>
        {description}
      </p>
    </div>
    <div class="flex flex-row justify-around mt-8">
      <Button title="Website" href={siteLink} />
      <Button title="Source" href={sourceLink} />
    </div>
  </div> -->
</div>
