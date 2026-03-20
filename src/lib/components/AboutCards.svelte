<script lang="ts">
  let {
    icon = "",
    title = "",
    text = "",
    alt = "",
    line = false,
  }: {
    title: string;
    text: string;
    icon: string;
    alt: string;
    line?: boolean;
  } = $props();
</script>

<div class="relative bg-white rounded-lg text-center p-6">
  <div
    class="absolute z-10 rounded-full bg-indigo-950 p-5 -top-8 translate-x-1/2 left-25"
  >
    <img src={icon} {alt} class="w-8 h-8" />
  </div>
  <h1 class="text-lg font-bold pt-8 pb-5">{title}</h1>
  <p class="text-center text-sm font-semibold text-stone-400">{text}</p>
  {#if line}
    <div
      class="bg-teal-300 py-6 px-1 absolute -bottom-12 z-10 translate-x-1/2 left-40"
    ></div>{/if}
</div>
