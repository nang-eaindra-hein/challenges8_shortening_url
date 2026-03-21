<script lang="ts">
  import FeFacebook from "~icons/fe/facebook";
  import MingcuteInstagramFill from "~icons/mingcute/instagram-fill";
  import RiTwitterFill from "~icons/ri/twitter-fill";
  import MynauiPinterestSolid from "~icons/mynaui/pinterest-solid";
</script>

<div class="w-full min-h-60 max-h-60 relative bg-indigo-950">
  <img
    src="/images/bg-boost-mobile.png"
    alt="boost-mobile"
    class=" absolute left-0 w-full h-60 lg:hidden"
  />
  <img
    src="/images/bg-boost-desktop.png"
    alt="boost-desktop"
    class=" lg:absolute lg:inline-block hidden lg:w-full lg:h-60"
  />
  <div
    class="absolute z-10 space-y-4 lg:space-y-6 items-center text-center left-5 right-5 bottom-20 top-20"
  >
    <h1 class="text-white font-bold text-2xl lg:text-4xl">
      Boost your links today
    </h1>
    <button
      class="cursor-pointer rounded-full bg-teal-300 py-3 px-8 text-center text-white font-bold text-md lg:text-lg hover:bg-teal-200"
      >Get Started</button
    >
  </div>
</div>
<!--footer-->
<div
  class="bg-mauve-900 text-center py-8 space-y-8 lg:flex lg:gap-10 lg:px-20 lg:justify-evenly"
>
  <h1 class="text-white font-bold text-3xl lg:pr-20 hover:text-teal-300">
    Shortly
  </h1>
  <div class="space-y-3 text-stone-400 text-sm">
    <h2
      class="pb-2 text-white font-bold text-md hover:text-teal-300 cursor-pointer"
    >
      Features
    </h2>
    <p class="hover:text-teal-300 cursor-pointer">Link Shortening</p>
    <p class="hover:text-teal-300 cursor-pointer">Branded Links</p>
    <p class="hover:text-teal-300 cursor-pointer">Analytics</p>
  </div>
  <div class="space-y-3 text-stone-400 text-sm">
    <h2
      class="pb-2 text-white font-bold text-md hover:text-teal-300 cursor-pointer"
    >
      Resources
    </h2>
    <p class="hover:text-teal-300 cursor-pointer">Blog</p>
    <p class="hover:text-teal-300 cursor-pointer">Developers</p>
    <p class="hover:text-teal-300 cursor-pointer">Support</p>
  </div>
  <div class="space-y-3 text-stone-400 text-sm">
    <h2
      class="pb-2 text-white font-bold text-md hover:text-teal-300 cursor-pointer"
    >
      Company
    </h2>
    <p class="hover:text-teal-300 cursor-pointer">About</p>
    <p class="hover:text-teal-300 cursor-pointer">Our Team</p>
    <p class="hover:text-teal-300 cursor-pointer">Careers</p>
    <p class="hover:text-teal-300 cursor-pointer">Contact</p>
  </div>
  <div class="flex gap-4 text-white justify-center lg:justify-end">
    <FeFacebook
      class="w-5 h-5 cursor-pointer hover:text-teal-300"
    /><RiTwitterFill
      class="w-5 h-5 cursor-pointer hover:text-teal-300"
    /><MynauiPinterestSolid
      class="w-5 h-5 cursor-pointer hover:text-teal-300"
    /><MingcuteInstagramFill
      class="w-5 h-5 cursor-pointer hover:text-teal-300"
    />
  </div>
</div>
