<script>
  import { MoonIcon, SunIcon } from 'heroicons-svelte/solid'
  import { browser } from '$app/env'
  import { page } from '$app/stores'
  let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false
  // import * as animateScroll from 'svelte-scrollto'
</script>

<div class="flex h-16 px-4 py-2 justify-between items-center">
  <h1 class="text-lg sm:text-2xl font-bold">
    <div class="mb-4 sm:mb-0 w-12 h-12">
      <a rel="prefetch" href="/"
        ><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
      >
      <!-- <a on:click={() => animateScroll.scrollToBottom()} rel="prefetch" href="/#"
				><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
			> -->
    </div>
  </h1>
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
      class="h-4 w-4 sm:h-8 sm:w-8 sm:p-1"
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
    border-bottom: 1px solid #10b981;
  }
</style>
