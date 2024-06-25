<script lang="ts">
    import localizable from '../constants/Localizable.json';

let brandsImages = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/768px-BMW.svg.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvWZhCGdJbOYLhagkI7UO_1-MmEq1RQ5FKMQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6TvOxu0S0PvFLB-g8jP5Kvj1QwlVVf4B-A&s",
        "/static/logos/Coderio-logo.jpeg",
        "/static/logos/Dondo-logo.jpeg",
        "/static/logos/ShapeGames-logo.jpeg",
        "/static/logos/etermax-logo.webp",
        "/static/logos/Globant-logo.jpeg",
        "/static/logos/moova-logo.png",
        "/static/logos/Nisum-logo.jpeg",
        "/static/logos/solstice-logo.jpg",
        "/static/logos/watchworthy-logo.png",
        "/static/logos/Simplex-logo.jpeg",
    ]

</script>

<div class="section flex-col justify-center space-x-4">
    <div class="h-[1px] opacity-30 bg-black">    </div>

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

    <div class="fade-in
                px-3 pt-10
                sm:px-20
                flex flex-col space-y-10">
        <div class="justify-center text-center text-3xl font-extrabold
                     whitespace-nowrap overflow-hidden text-orange bg-gradient-to-r from-purple-600 to-slate-100 bg-clip-text text-transparent
        ">
            Companies I've worked with
        </div>
        <div class="flex justify-center space-x-4 w-auto">
            {#each brandsImages as image}
                <div class="box roll-in h-24 w-24">
                    <div class="h-full w-full rounded-lg overflow-hidden bg-white">
                        <img src="{image}" class="h-full w-full object-cover">
                    </div>
                </div>
            {/each}
        </div>
    </div>


    <div class="section h-screen flex flex-col items-center justify-top mx-[250px]
                pt-10
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
                <p class="text-1xl">
                    {localizable.experience.description}
                </p>
    </div>
</div>
</div>

<style>
    

</style>