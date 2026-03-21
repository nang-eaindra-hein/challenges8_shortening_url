<script lang="ts">
  import FontistoNavIconA from "~icons/fontisto/nav-icon-a";
  let navigateCard = $state(false);
</script>

<div class="md:px-20 lg:px-20 flex justify-between px-4 py-6 relative">
  <div class="flex justify-start">
    <button class="text-2xl font-bold text-slate-800">Shortly</button>

    <div
      class="hidden lg:flex space-x-4 text-stone-400 font-semibold text-sm pl-6"
    >
      <button class="cursor-pointer hover:text-black">Features</button>
      <button class="cursor-pointer hover:text-black">Pricing</button>
      <button class="cursor-pointer hover:text-black">Resources</button>
    </div>
  </div>
  <div
    class="hidden justify-end lg:flex space-x-4 text-stone-400 font-semibold text-sm"
  >
    <button
      class="hover:bg-teal-300 hover:rounded-full px-4 py-1 hover:text-white"
      >Login</button
    >
    <button
      class="hover:bg-teal-300 hover:rounded-full px-4 py-1 hover:text-white"
      >Sign Up</button
    >
  </div>

  <FontistoNavIconA
    class="text-slate-500 lg:hidden"
    onclick={() => (navigateCard = !navigateCard)}
  />
</div>

{#if navigateCard}
  <div
    class="lg:hidden absolute z-20 bg-indigo-950 py-8 px-6 text-center rounded-lg left-10 right-10"
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
