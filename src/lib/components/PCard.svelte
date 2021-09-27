<script>
	import Button from './Button.svelte';
	export let title;
	export let description;
	export let siteLink;
	export let siteTitle;
	export let sourceTitle;
	export let sourceLink;
</script>

<div class="my-6 flex flex-wrap w-full items-center justify-center bg-green-500 ">
	<div class="bg-red-500 w-full sm:w-1/2 h-96 flex items-center">
		<figure>
			<img class="rounded-xl" src="./FakerDex.png" alt="FakerDex Landing Page" />
		</figure>
	</div>
	<div class="bg-blue-500 w-full sm:w-1/2 flex flex-col justify-center px-4">
		<div class="mb-10">
			<h1 class="text-center">{title}</h1>
		</div>
		<div>
			<p>
				{description}
			</p>
		</div>
		<div class="flex flex-row justify-around mt-10">
			<Button title={siteTitle} href={siteLink} />
			<Button title={sourceTitle} href={sourceLink} />
		</div>
	</div>
</div>
