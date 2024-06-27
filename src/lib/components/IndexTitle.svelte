<script lang="ts">
    import gsap from 'gsap/dist/gsap';
    import { onMount } from 'svelte';
    import localizable from '../constants/Localizable.json';

    onMount(() => {
        gsap.from('.mainLabel', { opacity: 0, duration: 2, delay: 1, ease: "power1.easeInOut" });
        gsap.from('.mainArrow', { opacity: 0, duration: 2, delay: 2, ease: "power1.easeInOut" });
    });
</script>

<div class="absolute mainLabel top-0 left-0 z-10 w-full">
    <div class="flex items-center justify-center h-screen space-x-3">
        <section class="relative text-white">
            <h1 class="text-5xl font-extrabold overflow-hidden text-orange bg-gradient-to-r from-green-600 to-slate-100 bg-clip-text text-transparent p-10">
                {@html localizable.mainTitle}
            </h1>
            <div class="flex mainArrow items-center justify-center animate-bounce pt-20">
                <svg class="w-10 h-10 text-green-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
        </section>
    </div>
</div>

<style lang="postcss">
</style>
