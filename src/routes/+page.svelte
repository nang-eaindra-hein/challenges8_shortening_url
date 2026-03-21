<script lang="ts">
  import { convertLinkApi } from "$lib/api/linkApi";
  import AboutCards from "$lib/components/AboutCards.svelte";
  import Foot from "$lib/components/Foot.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import type { LinkResponse } from "$lib/type/link";
  import { createMutation, createQuery } from "@tanstack/svelte-query";

  let copied = $state(false);
  let toastMessage = $state("");
  let showToast = $state(false);
  let shortResult = $state("");

  let linkStore = $state("");
  type ShortLinkItem = {
    id: number;
    origin: string;
    short: string;
    copied: boolean;
  };

  let shortLinks: ShortLinkItem[] = [];

  function triggerToast(message: string) {
    toastMessage = message;
    showToast = true;

    setTimeout(() => {
      showToast = false;
    }, 2000);
  }

  async function copyElementText(item: ShortLinkItem) {
    try {
      await navigator.clipboard.writeText(item.short);
      shortLinks = shortLinks.map((link) =>
        link.id === item.id
          ? { ...link, copied: true }
          : { ...link, copied: false }
      );

      triggerToast("Copied!");
      setTimeout(() => {
        copied = false;
      }, 2000);
    } catch (error) {
      triggerToast("Copy Failed!");
    }
  }
  const shortenMutation = createMutation(() => ({
    mutationFn: async (url: string) => convertLinkApi(url),
    onSuccess: (data) => {
      shortLinks = [
        {
          id: Date.now(),
          origin,
          short: data.result_url,
          copied: false,
        },
        ...shortLinks,
      ];
      triggerToast("Short link created!");
      linkStore = "";
    },
    onError: (error) => {
      console.error("mutation error:", error);
    },
  }));

  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    const trimmedLink = linkStore.trim();

    if (!trimmedLink) {
      triggerToast("Please enter a link");
      return;
    }

    origin = trimmedLink;
    shortenMutation.mutate(trimmedLink);
  }
</script>

<div class="lg:pl-20 w-full min-h-screen">
  <Nav />

  <div class="text-center px-6 lg:px-1 pb-10">
    <div class="lg:grid lg:grid-cols-2 lg:gap-x-20 lg:pt-15">
      <div class="lg:col-span-1 hidden lg:grid lg:pl-16">
        <h1
          class="font-bold text-center text-4xl lg:text-7xl lg:text-start text-slate-800 pt-10 pb-5"
        >
          More than just shorter links
        </h1>
        <h2 class="font-semibold text-lg text-stone-400 lg:text-start">
          Build your brand's regonition and get detailed insights on how your
          links are performing.
        </h2>
        <button
          class=" text-white text-center font-bold text-md px-6 cursor-pointer bg-teal-400 rounded-full hover:bg-teal-300 w-fit"
          >Get Started</button
        >
      </div>
      <div class="lg:col-span-1">
        <img
          src="/images/illustration-working.png"
          alt="illustration-working"
          class="w-80 h-70 md:w-150 md:h-100 lg:w-170 lg:h-100 object-cover"
        />
      </div>
      <div class="lg:col-span-1 lg:hidden">
        <h1 class="font-bold text-center text-4xl text-slate-800 pt-10 pb-5">
          More than just shorter links
        </h1>
        <h2 class="font-semibold text-md text-stone-400">
          Build your brand's regonition and get detailed insights on how your
          links are performing.
        </h2>
        <button
          class="mb-20 mt-8 text-white text-center font-bold text-md py-3 px-8 bg-teal-400 rounded-full"
          >Get Started</button
        >
      </div>
    </div>
    <!--link paste-->
    <div class="w-full lg:px-15">
      <div
        class="mb-6 bg-indigo-950 relative rounded-lg min-h-35 max-h-35 lg:inline-block lg:mt-20 w-full"
      >
        <img
          src="/images/bg-shorten-mobile.png"
          alt="shorten-mobile"
          class="lg:hidden w-full pr-20 h-30 rounded-lg absolute left-20"
        />
        <img
          src="/images/bg-shorten-desktop.png"
          alt="shorten-desktop"
          class="lg:w-full lg:absolute lg:rounded-lg hidden lg:flex lg:h-35"
        />
        <form
          onsubmit={handleSubmit}
          class="absolute z-10 space-y-4 left-5 lg:left-20 lg:right-20 lg:top-10 lg:bottom-10 right-5 bottom-5 top-5 lg:justify-center lg:grid lg:space-x-6 lg:grid-cols-6 lg:items-center"
        >
          <div class="lg:col-span-5">
            <input
              bind:value={linkStore}
              type="text"
              placeholder="Shorten a link here..."
              class="p-3 font-semibold text-sm text-stone-400 w-full bg-white rounded-sm lg:p-4 lg:rounded-lg"
            />
          </div>
          <button
            type="submit"
            class="lg:col-span-1 rounded-sm bg-teal-300 py-4 w-full text-center text-white font-bold text-sm lg:p-4 lg:hover:bg-teal-200 cursor-pointer lg:mb-5 lg:rounded-2xl"
            >Shorten It!</button
          >
        </form>
      </div>
    </div>

    {#if shortenMutation.data}
      <div class="space-y-6 lg:px-16">
        {#each shortLinks as item}
          <div
            class="bg-white rounded-lg py-3 lg:flex lg:justify-between lg:px-6 lg:gap-10"
          >
            <div class=" text-start p-3">{item.origin}</div>
            <hr class="text-stone-300 lg:hidden" />
            <div class="px-3 lg:flex lg:space-x-6 lg:items-center">
              <div class="text-teal-300 py-3 text-start lg:text-lg">
                {item.short}
              </div>
              {#if !item.copied}
                <button
                  class="py-2 rounded-sm hover:bg-indigo-950 bg-teal-300 w-full text-center text-white font-bold text-sm lg:px-6 lg:w-fit"
                  onclick={() => copyElementText(item)}>Copy</button
                >{:else}
                <button
                  class="py-2 rounded-sm bg-indigo-950 w-full text-center text-white font-bold text-sm lg:px-6 lg:w-fit"
                  >Copied!</button
                >
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {/if}
    {#if showToast}
      <div
        class="fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-lg shadow-lg z-50"
      >
        {toastMessage}
      </div>
    {/if}
    <!--advanced statistics-->
    <div class="pt-14 pb-20">
      <h1 class="text-xl font-bold text-center pb-6 lg:text-4xl">
        Advanced Statistics
      </h1>
      <p class=" text-sm font-semibold text-stone-400 lg:text-md">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </div>
    <!--about card-->
    <div class="space-y-20 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-15">
      <AboutCards
        title="Brand Recognition"
        text="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        icon="/images/icon-brand-recognition.png"
        alt="brand-regonition icon"
        line
        lineSide
      />
      <div class="lg:mt-10">
        <AboutCards
          title="Detailed Records"
          text="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better desicions."
          icon="/images/icon-detailed-records.png"
          alt="detailed-records icon"
          line
          lineSide
        />
      </div>
      <div class="mt-20">
        <AboutCards
          title="Fully Customizable"
          text="Improved brand awareness and content discoverability through customizable links. supercharging audienve engaagement."
          icon="/images/icon-fully-customizable.png"
          alt="fully-customizable icon"
        />
      </div>
    </div>
  </div>
</div>
<!--foot-->
<Foot />
