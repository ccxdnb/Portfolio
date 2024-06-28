<script lang="ts">
    import dondoImage from '../assets/logos/Dondo-logo.jpeg';
    import coderioImage from '../assets/logos/Coderio-logo.jpeg';
    import etermaxImage from '../assets/logos/etermax-logo.webp';
    import globantImage from '../assets/logos/Globant-logo.jpeg';
    import moovaImage from '../assets/logos/moova-logo.png';
    import nisumImage from '../assets/logos/Nisum-logo.jpeg';
    import solsticeImage from '../assets/logos/solstice-logo.jpg';
    import watchworthyImage from '../assets/logos/watchworthy-logo.png';
    import simplexImage from '../assets/logos/Simplex-logo.jpeg';
    import CompanySlider from './CompanySlider.svelte';

    let companies = [
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

<div class="flex flex-col items-center mb-10">
    <h1 class="justify-center text-center text-3xl md:text-4xl font-extrabold overflow-hidden text-orange bg-gradient-to-r from-green-600 to-slate-100 bg-clip-text text-transparent">
        Companies I've worked with
    </h1>
</div>

<div class="h-full p-10 flex flex-col items-center ml-24">

    <div class="resizable" 
     data-translate="items"
     data-direction="horizontal" 
     data-blurring="true" 
     data-outline="false" 
     data-play-state="running" 
     data-spill="false" 
     style="--speed: 20; --count: {companies.length}; --scale: 1; --blur: 1; --blurs: 8;">
        <div class="container">
          <div class="blur blur--left">
            {#each companies as company, index}
                <div style="--index: {index};"></div>
            {/each}
          </div>
          <ul>
            {#each companies as company, index}
                <li style="--index: {index};">
                    <div class="box h-16 w-16 md:h-24 md:w-24 pb-1 ">
                        <div class="h-full w-full rounded-lg overflow-hidden bg-white">
                            <img src="{company}" alt="Company logo" class="h-full w-full object-cover">
                        </div>
                    </div>
                 </li>
            {/each}
          </ul>
          <div class="blur blur--right">
            {#each companies as company, index}
                <div style="--index: {index};"></div>
            {/each}
          </div>
        </div>
      </div>

</div>




<style lang="postcss">
.resizable {
	overflow: hidden;
	container-type: size;
  scale: var(--scale);
  width: 100%;
  height: 100px;
}


ul {
	display: flex;
	gap: 1rem;
	padding: 0;
	margin: 0;
	list-style-type: none;
}

.container ul {
	height: 100%;
	width: fit-content;
	padding: 0;
	align-items: center;
	pointer-events: none;
}

li {
	height: 80%;
	aspect-ratio: 16 / 9;
	font-size: clamp(2rem, 4vw + 1rem, 8rem);
	display: grid;
	place-items: center;
}

li svg {
	fill: black;
	height: 65%;
}

[data-play-state=running] :is(ul, li) {
	animation-play-state: running !important;
}
[data-play-state=paused] :is(ul, li) {
	animation-play-state: paused !important;
}

.container {
	mask: linear-gradient(90deg, transparent, black 15% 85%, transparent);
	width: 100%;
	display: grid;
	min-height: 100px;
	min-width: 300px;
}

/* Blur component */
.blur {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 25%;
	z-index: 2;
	pointer-events: none;
}

.blur--right {
	right: 0;
}

.blur--left {
	left: 0;
	rotate: 180deg;
}

.blur div {
	position: absolute;
	inset: 0;
	z-index: var(--index);
  mask: linear-gradient(
  	90deg,
  	transparent calc(var(--index) * calc((100 / var(--blurs)) * 1%)),
  	black calc((var(--index) + 1) * calc((100 / var(--blurs)) * 1%)),
  	black calc((var(--index) + 2) * calc((100 / var(--blurs)) * 1%)),
  	transparent calc((var(--index) + 3) * calc((100 / var(--blurs)) * 1%))
  );
	backdrop-filter: blur(calc((var(--index, 0) * var(--blur, 0)) * 2px));
}

.blur {
	opacity: 0;
}

[data-outline=true] .blur {
  border: 4px dashed hotpink;
  background: hsl(320 100% 50% / 0.1);
}

[data-blurring=true] .blur {
	opacity: 1;
}

/* The animation stuff */
@media(prefers-reduced-motion: no-preference) {
	[data-translate=items] ul {
		gap: 0;
	}
	[data-translate=items][data-direction=horizontal].container {
		padding-inline: 0;
	}
	
	[data-translate=items] li {
		--duration: calc(var(--speed) * 1s);
		--delay: calc((var(--duration) / var(--count)) * (var(--index, 0) * -1));
		animation: slide var(--duration) var(--delay) infinite linear paused;
		translate: var(--origin-x) var(--origin-y);
	}
	[data-translate=items][data-direction=horizontal] li {
		--origin-x: calc(((var(--count) - var(--index)) + var(--inset, 0)) * 100%);
		--origin-y: 0;
		--destination-x: calc(calc((var(--index) + 1 + var(--outset, 0)) * -100%));
		--destination-y: 0;
	}
	
	@keyframes slide {
		100% {
			translate: var(--destination-x) var(--destination-y);
		}
	}
}


</style>