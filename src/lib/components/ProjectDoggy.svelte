<script lang="ts">
    import { Canvas, T } from "@threlte/core"
  import TestComponent from './TestComponent.svelte';
  import DoggyModel from './DoggyModel.svelte';
</script>

<div class="flex flex-row w-full h-full space-x-10">
  <div class="section flex-col justify-center space-y-10
          mr-[250px] w-2/3 h-full flex items-center
          fade-in
          transition ease-in-out duration-300">
  <div class="backdrop-blur-sm  
          px-8 pb-8 pt-10 
          shadow-[inset_0_-10px_-10px_-10px_rgba(0,0,0,0.5)] shadow-green-600 
          border-[1px] border-green-500
          text-gray-300 
          rounded-lg                
          fade-in
          space-y-4">
  <div class="flex flex-row items-center justify-between"> 
      <p class="text-2xl font-extrabold underline">
          DoggyApp
      </p>   
      <div class="flex items-center justify-center">
      </div>
  </div>

  <p class="text-1xl">
      This is a simple exercise with the Dogs Breeds API. The main purpose is develop a simple app to show the dogs breeds and their sub breeds without using external frameworks. Allows the users to navigate through the breeds and sub breeds and see random images of the dogs.
  </p>
  <p class="italic">		
      Image cache strategy with advanced Encode/Decode capabilites to improve the app performance.
  </p>
  <div class="flex justify-center items-center space-x-2">
    <a href="https://github.com/ccxdnb/DoggyApp" target="_blank" rel="noopener noreferrer" class="bg-white hover:rounded-xl p-2 rounded-full transition-all duration-300">
        <img src="/static/icons/github-white.svg" alt="GitHub" class="w-12 h-12 transform transition-transform duration-300 filter invert">
    </a>
</div>
  </div>
</div>

  <div class="fade-in duration-6000 fade-out w-1/3 animation-bounce ">
      <Canvas>
          <DoggyModel />
      </Canvas>
  </div>
</div>
<style lang="postcss">
</style>