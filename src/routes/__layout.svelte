<script>
	import '../app.css';
	import { MoonIcon, SunIcon } from 'heroicons-svelte/solid';
	import { browser } from '$app/env';

	let prefersLight = browser ? Boolean(JSON.parse(localStorage.getItem('prefersLight'))) : false;
</script>

<div class="flex flex-col min-h-screen">
	<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
		<div class="flex h-16 px-4 py-2 justify-between items-center">
			<h1 class="text-lg sm:text-2xl font-bold">
				<div class="mb-4 sm:mb-0 w-12 h-12">
					<a rel="prefetch" href="/#"
						><img class="object-contain" src="./t-block-light.png" alt="trevor-logo" /></a
					>
				</div>
			</h1>
			<div>
				<ul class="flex flex-row">
					<li class="mx-4"><a rel="prefetch" href="/#">About</a></li>
					<li class="mx-4"><a rel="prefetch" href="/#">Portfolio</a></li>
					<li class="mx-4"><a rel="prefetch" href="/#">Contact</a></li>
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
						prefersLight = !prefersLight;
						localStorage.setItem('prefersLight', prefersLight.toString());

						if (prefersLight) {
							document.querySelector('html').classList.remove('dark');
						} else {
							document.querySelector('html').classList.add('dark');
						}
					}}
				>
					{#if prefersLight}
						<MoonIcon class="text-black" />
					{:else}
						<SunIcon class="text-green-300" />
					{/if}
				</button>
			{/if}
		</div>
		<main class="flex flex-col w-full flex-grow py-4 px-4">
			<slot />
		</main>
	</div>
</div>
