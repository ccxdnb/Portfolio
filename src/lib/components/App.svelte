
<script lang="ts">
  // external dependencies
  import { onMount } from 'svelte';
  import gsap from 'gsap/dist/gsap';
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
  import { Canvas, T } from "@threlte/core"
  import { tweened } from 'svelte/motion'
  import { writable } from 'svelte/store';

  // local components
  import IndexTitle from './IndexTitle.svelte'
  import ProjectVescan from './ProjectVescan.svelte'
  import ProjectDoggy from './ProjectDoggy.svelte'
  import PersonalInfo from './PersonalInfo.svelte';
  import OtherInterests from './OtherInterests.svelte';
  import Contact from './Contact.svelte';
  import CompanySlider from './CompanySlider.svelte';
  //--------------------------------------------

  const isLoading = writable(true);

  if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
  }

  let trigger: HTMLElement;
  let endTrigger: HTMLElement;
  let progress = 0;
  // go from -3 to 3
  const start = -3;
  const final = 6;
  const lerp = (a: number, b: number) => (t: number) => a + b * t;
  const l = lerp(start, final);
  $: x = l(progress);

  // $: console.log(x);

  onMount(() => {
    ScrollTrigger.create({
      trigger,
      endTrigger,
      start: "top top",
      onUpdate(self: ScrollTrigger) {
        progress = self.progress;
      }
    });

    // Simulate loading
    setTimeout(() => {
      isLoading.set(false);
    }, 3000); // 3 seconds loading time
  });

  const t = tweened(0, { duration: 0.1 })

function repeatTimeout() {
  setTimeout(() => {
	if ($t < 30000) {

	}

    t.set($t += 10)
    repeatTimeout()  // Recursively call to create an infinite loop
  }, 1)
}
repeatTimeout() 

</script>
{#if $isLoading}
  <div class="fade-in fade-out fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
  <div class="flex space-x-2 animate-pulse">
    <div class="dot bg-white w-2 h-2 rounded-full animate-bounce"></div>
    <div class="dot bg-white w-2 h-2 rounded-full animate-bounce delay-200"></div>
    <div class="dot bg-white w-2 h-2 rounded-full animate-bounce delay-400"></div>
  </div>
  </div>
{:else}
  <div bind:this={trigger}>
    <div style="height: 200vh" bind:this={endTrigger} class="relative ">
      <IndexTitle />
      <!-- <StarsBg /> -->
      <Canvas >
        <T.PerspectiveCamera
          makeDefault
          position={[0.6, 3.4, 6]}
          rotation={[-0.3, 0, 0]}
          lookAt={[0, 0, 0]}
          fov={45}
        >
        </T.PerspectiveCamera>
        <T.AmbientLight />
        <T.Mesh
          position={[0.1, 0.1, x]}
          rotation={[0,  ($t/10000), 0]}
        >
          <T.LatheGeometry args={[10, 10, 10]} />
          <T.MeshBasicMaterial color="transparent" wireframe={true} />
          {#each Array(1000).fill(0) as _, i}
            <T.Mesh position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]} 
                    scale={[0.1, 0.1, 0.1]} >
              <T.SphereGeometry args={[0.05, 6, 6]} />
              <T.MeshBasicMaterial color="#ffffff" />
            </T.Mesh>
          {/each}
        </T.Mesh>
      </Canvas>
      <div class="absolute top-[100vh] w-full items-center">
        <PersonalInfo />
      </div>
    </div>
    <div class="w-full flex flex-col justify-center gap-20 sm:gap-20 md:gap-5 sm:mx-5 md:mx-20 mb-20">
      <ProjectVescan />
      <ProjectDoggy />
    </div>
    <div class="w-full flex flex-col justify-start sm:mx-5 md:mx-20">
      <!-- <Experience /> -->

<CompanySlider />
      <OtherInterests />
      <Contact />
    </div>

    <section class="section" />
  </div>
{/if}

<style lang="postcss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .section {
    width: 100%;
    height: 20vh;
  }

  .dot {
      animation: bounce 1.5s infinite;
    }
    .delay-200 {
      animation-delay: 0.2s;
    }
    .delay-400 {
      animation-delay: 0.4s;
    }
    @keyframes bounce {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }
</style>