<script>
	export let title;
	export let description;
</script>

<div class="my-6 flex flex-wrap w-full items-center justify-center bg-green-500 ">
	<div class="bg-red-500 w-full sm:w-1/2 h-96 flex items-center">
		<figure>
			<img class="rounded-xl" src="./FakerDex.png" alt="FakerDex Landing Page" />
		</figure>
	</div>
	<div class="bg-blue-500 w-full sm:w-1/2 h-96 flex flex-col justify-center px-4">
		<div class="mb-10">
			<h1>{title}</h1>
		</div>
		<div>
			<p>
				{description}
			</p>
		</div>
		<div class="flex flex-row justify-between mt-10">
			<button>Website</button>
			<button>Source</button>
		</div>
	</div>
</div>
