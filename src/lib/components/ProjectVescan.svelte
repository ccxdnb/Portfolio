<script lang="ts">
  import { Canvas, T } from "@threlte/core";
  import VescanModel from './VescanModel.svelte';
  import githubIcon from '../assets/icons/github-white.svg';
</script>

<div class="flex flex-col md:flex-row items-center sm:h-full md:h-[70vh] mx-5 my-10 md:mx-0">
  <div class="fade-in duration-6000 fade-out w-full md:w-1/3 my-5 h-[70vh]">
    <Canvas>
      <VescanModel />
    </Canvas>
  </div>
  <div class="section flex-col justify-center space-y-10 
              w-full md:max-w-4xl h-[50vh] flex items-center
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
        <p class="text-3xl font-extrabold underline">
          VeScan
        </p>   
        <div class="flex items-center justify-center">
        </div>
      </div>

      <p class="text-2xl">
        This is a simple exercise with VisionKit and Natural Language and the main purpose is to determinate wether a product is vegan or not based on their ingredients. Always wanted one for myself.
      </p>
      <p class="italic">		
        Place a product ingredients within the camera frame to extract them and analyze them.
      </p>

      <div class="flex items-center justify-center space-x-2">
        <a href="https://github.com/ccxdnb/VeScan" target="_blank" rel="noopener noreferrer" class="bg-white hover:rounded-xl p-2 rounded-full transition-all duration-300">
          <img src={githubIcon} alt="GitHub" class="w-12 h-12 transform transition-transform duration-300 filter invert">
        </a>
      </div>
    </div>
  </div>
</div>
<style lang="postcss">
</style>
