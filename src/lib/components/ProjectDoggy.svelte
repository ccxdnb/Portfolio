<script lang="ts">
    import { Canvas, T } from "@threlte/core"
    import DoggyModel from './DoggyModel.svelte';
    import githubIcon from '../assets/icons/github-white.svg';
</script>

<div class="flex justify-center flex-col items-center md:flex-row sm:h-full md:h-[70vh] mx-5 md:mx-0 my-5">
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
          DoggyApp
        </p>   
        <div class="flex items-center justify-center">
        </div>
      </div>

      <p class="text-2xl">
        This is a simple exercise with the Dogs Breeds API. The main purpose is develop a simple app to show the dogs breeds and their sub breeds without using external frameworks. Allows the users to navigate through the breeds and sub breeds and see random images of the dogs. <br>
        Implemented MVVM Architecture with Combine framework to keep the code decoupled and easy to maintain.
      </p>
      <p class="italic">		
        Also implemented Image cache strategy with advanced Encode/Decode capabilites to improve the app performance and prevent frame drops when the user scrolls through the images and providing a seamless experience.
      </p>

      <div class="flex items-center justify-center space-x-2">
        <a href="https://github.com/ccxdnb/DoggyApp" target="_blank" rel="noopener noreferrer" class="bg-white hover:rounded-xl p-2 rounded-full transition-all duration-300">
          <img src={githubIcon} alt="GitHub" class="w-12 h-12 transform transition-transform duration-300 filter invert">
        </a>
      </div>
    </div>
  </div>
  <div class="fade-in duration-6000 fade-out w-full md:w-1/3 my-10 h-[70vh] ">
    <Canvas>
      <DoggyModel />
    </Canvas>
  </div>
</div>
<style lang="postcss">
</style>
