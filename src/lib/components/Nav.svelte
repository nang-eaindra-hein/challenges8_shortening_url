<script lang="ts">
  import FontistoNavIconA from "~icons/fontisto/nav-icon-a";
  let navigateCard = $state(false);
</script>

<div class=" flex justify-between px-4 py-6 relative">
  <button class="text-2xl font-bold text-slate-800">Shortly</button>
  <FontistoNavIconA
    class="text-slate-500"
    onclick={() => (navigateCard = !navigateCard)}
  />
</div>
{#if navigateCard}
  <div
    class="absolute z-20 bg-indigo-950 py-8 px-6 text-center rounded-lg left-10 right-10"
  >
    <div class="border-b border-amber-50 pb-4">
      <button
        class="font-bold text-white text-lg w-full hover:rounded-2xl hover:bg-indigo-900 py-2 cursor-pointer"
        >Features</button
      >
      <button
        class="font-bold text-white text-lg w-full hover:rounded-2xl hover:bg-indigo-900 py-2 cursor-pointer"
        >Pricing</button
      >
      <button
        class=" font-bold text-white text-lg w-full hover:rounded-2xl hover:bg-indigo-900 py-2 cursor-pointer"
        >Resources</button
      >
    </div>
    <div class="pt-4">
      <button
        class="font-bold text-white text-lg w-full hover:rounded-2xl hover:bg-teal-400 py-2 cursor-pointer"
        >Login</button
      >
      <button
        class="font-bold text-white text-lg w-full hover:rounded-2xl hover:bg-teal-400 py-2 cursor-pointer"
        >Sign Up</button
      >
    </div>
  </div>
{/if}
