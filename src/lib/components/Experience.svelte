<script lang="ts">
    import localizable from '../constants/Localizable.json';
    import dondoImage from '../assets/logos/Dondo-logo.jpeg';
    import coderioImage from '../assets/logos/Coderio-logo.jpeg';
    import etermaxImage from '../assets/logos/etermax-logo.webp';
    import globantImage from '../assets/logos/Globant-logo.jpeg';
    import moovaImage from '../assets/logos/moova-logo.png';
    import nisumImage from '../assets/logos/Nisum-logo.jpeg';
    import solsticeImage from '../assets/logos/solstice-logo.jpg';
    import watchworthyImage from '../assets/logos/watchworthy-logo.png';
    import simplexImage from '../assets/logos/Simplex-logo.jpeg';

    let brandsImages = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/768px-BMW.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWZhCGdJbOYLhagkI7UO_1-MmEq1RQ5FKMQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6TvOxu0S0PvFLB-g8jP5Kvj1QwlVVf4B-A&s",
        dondoImage,
        coderioImage,
        etermaxImage,
        globantImage,
        moovaImage,
        nisumImage,
        solsticeImage,
        watchworthyImage,
        simplexImage,
    ];
</script>

<div class="section flex-col items-start w-full justify-start mt-40">
    <!-- <div class="backdrop-blur-sm  
                px-3 pb-8 pt-10 shadow-xl border-t-2 border-green-500
                bg-white/5 shadow-inner
                text-blue-200 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.5)]">
        {localizable.techs.title}
        {localizable.techs.description}
    </div>
    <div class="backdrop-blur-sm  
                px-3 pb-8 pt-10 shadow-xl border-t-2 border-green-500
                sm:mx-auto sm:max-w-lg sm:px-10 bg-white/5 shadow-inner
                text-blue-200 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.5)]">
        {localizable.experience.title}
        {localizable.experience.description}
    </div> -->

    <!-- <div class="backdrop-blur-sm  
                px-3 pb-8 pt-10 shadow-xl border-t-2 border-green-500
                sm:mx-auto sm:max-w-lg sm-lg sm:px-10 bg-white/5 shadow-inner
                text-blue-200 shadow-[inset_0_10px_10px_-10px_rgba(0,0,0,0.5)]">
        {localizable.contact.title}
        {localizable.contact.description}
    </div> -->
    <div class="flex flex-col items-center justify-center w-full max-w-6xl mx-auto gap-5 md:gap-10">
        <div class="fade-in px-3 pt-10 sm:px-20 flex flex-col space-y-10 mt-10">
            <h1 class="justify-center text-center text-2xl md:text-4xl font-extrabold whitespace-nowrap overflow-hidden text-orange bg-gradient-to-r from-purple-600 to-slate-100 bg-clip-text text-transparent">
                Companies I've worked with
            </h1>
            <div class="flex flex-row flex-wrap gap-2 justify-center w-auto">
                {#each brandsImages as image}
                    <div class="box roll-in h-16 w-16 md:h-24 md:w-24">
                        <div class="h-full w-full rounded-lg overflow-hidden bg-white">
                            <img src="{image}" alt="Company logo" class="h-full w-full object-cover">
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    
        <!-- <div class="section flex flex-col items-start justify-top pt-10 transition ease-in-out delay-1000 duration-300 mx-5">
            <div class="backdrop-blur-sm px-5 md:px-8 pb-8 pt-10 shadow-[inset_0_-10px_-10px_-10px_rgba(0,0,0,0.5)] shadow-green-600 border-[1px] border-green-500 text-gray-300 rounded-lg fade-in space-y-4"> 
                <p class="text-2xl">
                    {localizable.experience.description}
                </p>
            </div>
        </div> -->
    </div>
</div>

<style>
</style>
