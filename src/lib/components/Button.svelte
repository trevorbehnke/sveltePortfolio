<script>
  export let title
  export let href
</script>

<button
  class="border border-black dark:border-gray-700 px-2 transition-colors duration-100 rounded-full bg-transparent"
>
  <a {href} target="_blank">{title} &rarr;</a>
</button>
