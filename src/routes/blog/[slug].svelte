<script context="module">
  import { getPosts } from '$lib/get-posts'

  /**
   * @type {import('@sveltejs/kit').Load}
   */
  export async function load({ page: { params } }) {
    const { slug } = params

    const post = getPosts().find((post) => slug === post.metadata.slug)

    if (!post) {
      return {
        status: 404,
        error: 'Post not found'
      }
    }

    return {
      props: {
        ...post.metadata,
        next: post.next?.metadata,
        previous: post.previous?.metadata,
        component: post.component
      }
    }
  }
</script>

<script>
  import Head from '$lib/components/Head.svelte'
  import { format } from 'date-fns'
  import ButtonLink from '$lib/components/ButtonLink.svelte'
  import { name, website } from '$lib/info'

  export let component

  // metadata
  export let title
  export let date
  // export let preview
  export let readingTime
  export let slug
  export let next
  export let previous

  // generated open-graph image for sharing on social media. Visit https://og-image.vercel.app/ to see more options.
  const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
    title
  )}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`

  const url = `${website}/${slug}`
</script>

<Head {title} />

<article class="prose prose-sm sm:prose lg:prose-lg dark:prose-dark">
  <h1 class="!mt-0 !mb-1">{title}</h1>
  <div>
    <time datetime={new Date(date).toISOString()}>{format(new Date(date), 'MMMM d, yyyy')}</time>
    •
    <span>{readingTime.text}</span>
  </div>
  <svelte:component this={component} />
</article>

<div class="pt-12 flex justify-between">
  {#if previous}
    <ButtonLink isBack href={`/blog/${previous.slug}`}>{previous.title}</ButtonLink>
  {:else}
    <div />
  {/if}
  {#if next}
    <ButtonLink href={`/blog/${next.slug}`}>{next.title}</ButtonLink>
  {/if}
</div>
