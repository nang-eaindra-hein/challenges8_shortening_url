<script lang="ts">
  import AboutCards from "$lib/components/AboutCards.svelte";
  import Foot from "$lib/components/Foot.svelte";
  import Nav from "$lib/components/Nav.svelte";

  let linkResult = $state(true);
  let copyText = $state(false);
</script>

<div class="w-full min-h-screen">
  <Nav />

  <div class="text-center px-6 pb-10">
    <img
      src="/images/illustration-working.png"
      alt="illustration-working"
      class="w-200 h-70"
    />

    <h1 class="font-bold text-center text-4xl text-slate-800 pt-10 pb-5">
      More than just shorter links
    </h1>
    <h2 class="font-semibold text-md text-stone-400">
      Build your brand's regonition and get detailed insights on how your links
      are performing.
    </h2>
    <button
      class="mt-8 text-white text-center font-bold text-md py-3 px-8 bg-teal-400 rounded-full"
      >Get Started</button
    >
    <!--link paste-->
    <div
      class="my-20 bg-indigo-950 relative rounded-lg min-w-80 max-w-80 min-h-35 max-h-35"
    >
      <img
        src="/images/bg-shorten-mobile.png"
        alt="shorten-mobile"
        class="w-60 h-30 rounded-t-lg absolute left-20"
      />
      <div class="absolute z-10 space-y-4 left-5 right-5 bottom-5 top-5">
        <input
          type="text"
          placeholder="Shorten a link here..."
          class="p-3 font-semibold text-sm text-stone-400 w-full bg-white rounded-sm"
        />
        <button
          class="rounded-sm bg-teal-300 py-3 w-full text-center text-white font-bold text-sm"
          >Shorten It!</button
        >
      </div>
    </div>
    {#if linkResult}
      <div class="bg-white rounded-lg py-3">
        <div class=" text-start p-3">link</div>
        <hr class="text-stone-300" />
        <div class="px-3">
          <div class="text-teal-300 p-3 text-start">link</div>
          {#if !copyText}
            <button
              class="py-2 rounded-sm hover:bg-indigo-950 bg-teal-300 w-full text-center text-white font-bold text-sm"
              onclick={() => (copyText = true)}>Copy</button
            >{:else}
            <button
              class="py-2 rounded-sm bg-indigo-950 w-full text-center text-white font-bold text-sm"
              >Copied!</button
            >
          {/if}
        </div>
      </div>
    {/if}
    <!--advanced statistics-->
    <h1 class="text-xl font-bold text-center">Advanced Statistics</h1>
    <p class="py-10 text-sm font-semibold text-stone-400">
      Track how your links are performing across the web with our advanced
      statistics dashboard.
    </p>
    <!--about card-->
    <div class="space-y-20">
      <AboutCards
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        icon="/images/icon-brand-recognition.png"
        alt="brand-regonition icon"
        line
      />

      <AboutCards
        title="Detailed Records"
        text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better desicions."
        icon="/images/icon-detailed-records.png"
        alt="detailed-records icon"
        line
      />
      <AboutCards
        title="Fully Customizable"
        text="Improved brand awareness and content discoverability through customizable links. supercharging audienve engaagement."
        icon="/images/icon-fully-customizable.png"
        alt="fully-customizable icon"
      />
    </div>
  </div>
  <!--foot-->
  <Foot />
</div>
