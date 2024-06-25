<script lang="ts">
    import localizable from '../constants/Localizable.json';
    import { onMount } from 'svelte';
    import gsap from 'gsap/dist/gsap';
    import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

    if (typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }
 
    onMount(() => {
        gsap.utils.toArray('.fade-in').forEach((element) => {
            gsap.fromTo(element as HTMLElement, 
                { opacity: 0 }, 
                { 
                    opacity: 1, 
                    duration: 1, 
                    ease: "power1.easeInOut",
                    scrollTrigger: {
                        trigger: element as HTMLElement,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });

        gsap.utils.toArray('.roll-in').forEach((element) => {
            gsap.fromTo(element as HTMLElement, 
                { x: -200, opacity: 0, rotation: -180 }, 
                { 
                    x: 0, 
                    opacity: 1, 
                    rotation: 0,
                    duration: 1, 
                    ease: "power1.easeInOut",
                    scrollTrigger: {
                        trigger: element as HTMLElement,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
    });
</script>

<div class="section h-screen flex flex-col items-center justify-center space-y-10 mx-[250px]
            transition ease-in-out delay-1000 duration-300">
    <div class="backdrop-blur-sm  
                px-8 pb-8 pt-10 
                shadow-[inset_0_-10px_-10px_-10px_rgba(0,0,0,0.5)] shadow-green-600 
                border-[1px] border-green-500
                text-gray-300 
                rounded-lg                
                fade-in
                space-y-4
                ">
                <div class="flex flex-row items-center justify-between"> 

                    <p class="text-2xl font-extrabold underline">
                        I’m Joaquin Wilson
                    </p>   
                    <div class="flex items-center justify-center">
                        <img src="/static/images/joaquinPicture.png" alt="Centered Image" class="rounded-full w-20 h-20" />
                    </div>
                </div>
 
                <p class="text-1xl">
                    iOS developer based in Copenhagen, Denmark.<br>
                    My journey began when I was a kid by breaking my toys just to see what was inside, which later fueled my passion for technology and led me to software development...
                </p>
                <p class="italic">I just wanted to see what's inside</p>
                <p class="text-center text-1xl font-bold"> 
                    Below are some of my latest personal playgrounds.
                </p>
    </div>
</div>

<style lang="postcss">

</style>
