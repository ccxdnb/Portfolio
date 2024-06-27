<script lang="ts">
    import { T } from '@threlte/core'
    import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras'
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion'
    import IPhoneCCXTest from '$lib/components/models/iPhoneCCXTest.svelte';

  const t = tweened(0, { duration: 0.1 })
  
  function repeatTimeout() {
    setTimeout(() => {
      t.set($t += 10)
      repeatTimeout()  // Recursively call to create an infinite loop
    }, 1)
  }
  repeatTimeout() 
  
    let trigger: HTMLElement;
    let endTrigger: HTMLElement;
    let progress = 0;
    // go from -3 to 3
    const start = -3;
    const final = 6;
    const lerp = (a: number, b: number) => (t: number) => a + b * t;
    const l = lerp(start, final);
    $: x = l(progress) * 4;
  
    // would probably turn this into a svelte action somehow
    onMount(() => {
      ScrollTrigger.create({
        trigger,
        endTrigger,
        start: "top top",
        onUpdate(self: ScrollTrigger) {
          progress = self.progress;
        }
      });
    });
  
  
    // track screen size
      let innerWidth = 0
      let innerHeight = 0
      
      $: condition = innerWidth*1.33 <= innerHeight
  
  </script>
  <svelte:window bind:innerWidth bind:innerHeight />
  
  <!-- <T.PerspectiveCamera
    makeDefault
    position={[0.6, 3.4, 6]}
    rotation={[-0.3, 0, 0]}
    lookAt={[0, 0, 0]}
    fov={45}
  > -->
  <T.PerspectiveCamera
    makeDefault
    position={[0.6, 4, 4].map(n => n * 1.3)}
    rotation={[-0.3, 0, 0]}
    lookAt={[0, 0, 0]}
    fov={45}
  >
  </T.PerspectiveCamera>
  
  <T.DirectionalLight
    intensity={3}
    color="#ffffff"
    position.x={0}
    position.y={5}
    position.z={5}
    rotation.y={1}
    lookAt={[0, 0, 0]}
  />
  
  <ContactShadows
    scale={10}
    blur={2}
    far={2.5}
    opacity={5}
  />
  <!-- <T.AmbientLight intensity={5} /> -->
  
  <!-- <Iphone15 
    position.x={0.5}
    position.y={0.2}
    position.z={1}
    rotation.y={ x*0.5}
    scale.x={0.9}
    scale.y={0.9}
    scale.z={0.9}
  /> -->
  <IPhoneCCXTest
  position.x={0.5}
  position.y={3}
  position.z={-3}
  rotation.y={ -1.3 -x*0.5 }
  scale.x={3}
  scale.y={3}
  scale.z={3}
  />
  <!-- <Tesseract /> -->