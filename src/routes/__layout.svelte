<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="flex flex-col min-h-screen">
	<div class="mx-auto flex flex-col flex-grow w-full max-w-4xl">
		<Header />
		<main class="flex flex-col w-full flex-grow py-4 px-4">
			<slot />
		</main>
		<Footer />
	</div>
</div>
