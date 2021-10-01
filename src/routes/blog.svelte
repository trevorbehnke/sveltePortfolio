<script context="module">
  import { getPosts } from '$lib/get-posts'

  export const prerender = true

  export const load = async () => {
    return {
      props: {
        posts: getPosts().map((post) => post.metadata)
      }
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  import TitleBar from '$lib/components/TitleBar.svelte'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { name } from '$lib/info.js'
  import { format } from 'date-fns'
  export let posts

  let searchTerm = ''
  let filteredList = []
  $: {
    if (searchTerm) {
      filteredList = posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    } else {
      filteredList = [...posts]
    }
  }
</script>

<!-- <svelte:head>
  <title>{name}</title>
</svelte:head> -->

<Head title={`Blog`} />

<div class="mb-4">
  <hr />
  <div class="flex flex-row justify-between items-center">
    <div>
      <h1 class="py-4">Blog</h1>
    </div>
    <div>
      <input
        class="border-black dark:border-gray-300 focus:placeholder-transparent dark:focus:placeholder-transparent focus:outline-none focus:border-primary dark:focus:border-primary text-black dark:text-gray-300 placeholder-black  dark:placeholder-gray-300 bg-white dark:bg-black rounded-md text-md p-2 border-2"
        bind:value={searchTerm}
        placeholder="Search..."
      />
    </div>
  </div>
  <hr />
</div>

<div class="flex flex-col flex-grow prose prose-sm sm:prose lg:prose-lg dark:prose-dark">
  <div class="flex-grow divide-y divide-gray-300 dark:divide-gray-700">
    {#each filteredList as post}
      <!-- <div class="py-8 first:pt-0"> -->
      <div class="py-8">
        <div>
          <h1 class="!mt-0 !mb-1">
            <a href={`/blog/${post.slug}`}>{post.title}</a>
          </h1>
          <time>{format(new Date(post.date), 'MMMM d, yyyy')}</time>
          •
          <span>{post.readingTime.text}</span>
        </div>
        <div>{@html post.previewHtml}</div>
        <div class="flex justify-end w-full">
          <ButtonLink href={`/blog/${post.slug}`}>Read More</ButtonLink>
        </div>
      </div>
    {/each}
  </div>
</div>
