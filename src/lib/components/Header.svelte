<script>
  import { MoonIcon, SunIcon } from 'heroicons-svelte/solid'
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
  // import * as animateScroll from 'svelte-scrollto'
</script>

<div class="flex h-16 px-4 pt-4 mb-2 justify-between items-center">
  <div class=" w-12 h-12">
    <a rel="prefetch" href="/"
      ><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
    >
    <!-- <a on:click={() => animateScroll.scrollToBottom()} rel="prefetch" href="/#"
				><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
			> -->
  </div>

  <div>
    <ul class="flex flex-row">
      <li class:active={$page.path === '/about'} class="mx-4">
        <a rel="prefetch" href="/about">About</a>
      </li>
      <li class:active={$page.path === '/portfolio'} class="mx-4">
        <a rel="prefetch" href="/portfolio">Portfolio</a>
      </li>
      <li class:active={$page.path === '/blog'} class="mx-4">
        <a rel="prefetch" href="/blog">Blog</a>
      </li>
    </ul>
  </div>
  {#if browser}
    <button
      type="button"
      role="switch"
      aria-label="Toggle Dark Mode"
      aria-checked={!prefersLight}
      class="h-8 w-8 p-1"
      on:click={() => {
        prefersLight = !prefersLight
        localStorage.setItem('prefersLight', prefersLight.toString())

        if (prefersLight) {
          document.querySelector('html').classList.remove('dark')
        } else {
          document.querySelector('html').classList.add('dark')
        }
      }}
    >
      {#if prefersLight}
        <MoonIcon />
      {:else}
        <SunIcon />
      {/if}
    </button>
  {/if}
</div>

<style>
  .active {
    /* fix this */
    /* color: #34abfb !important; */
    border-bottom: 1px solid #34abfb;
  }
</style>
