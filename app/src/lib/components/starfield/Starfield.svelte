<script lang="ts">
	import Blackhole from './Blackhole.svelte';
	import Explotion from './Explotion.svelte';
	import Spaceship from './Spaceship.svelte';
	import Star from './Star.svelte';
	import { starCount } from './starStore.js';
	let isDraw = false;
	let showShip = false;
	$: isDrawAgain = false;

	function drawDot() {
		if (isDraw) {
			starCount.update((n) => n + 1);
		}
		isDrawAgain = !isDrawAgain;
		isDraw = true;
	}

	function disableStars() {
		if (isDraw) {
			isDraw = !isDraw;
		}
	}

	function showSpaceship(){
		showShip = !showShip;
	}

	$: if ($starCount > 4) {
		starCount.set(0);
	}

	$: coord1 = {
		name: 'cy1',
		top: isDrawAgain ? Math.floor(Math.random() * 90) + '%' : Math.floor(Math.random() * 40) + '%',
		left: isDrawAgain ? Math.floor(Math.random() * 80) + '%' : Math.floor(Math.random() * 90) + '%'
	};
	$: coord2 = {
		name: 'cy2',
		top: isDrawAgain ? Math.floor(Math.random() * 90) + '%' : Math.floor(Math.random() * 20) + '%',
		left: isDrawAgain ? Math.floor(Math.random() * 80) + '%' : Math.floor(Math.random() * 90) + '%'
	};
	$: coord3 = {
		name: 'vio3',
		top: isDrawAgain ? Math.floor(Math.random() * 50) + '%' : Math.floor(Math.random() * 30) + '%',
		left: isDrawAgain ? Math.floor(Math.random() * 60) + '%' : Math.floor(Math.random() * 90) + '%'
	};
	$: coord4 = {
		name: 'orto7',
		top: isDrawAgain ? Math.floor(Math.random() * 80) + '%' : Math.floor(Math.random() * 30) + '%',
		left: isDrawAgain ? Math.floor(Math.random() * 70) + '%' : Math.floor(Math.random() * 90) + '%'
	};

	$: stars = [coord1, coord2, coord3, coord4];
</script>

<div class="starfield">
	<span>{$starCount}</span>
	<button on:click={drawDot}>Starfield</button>
	<button on:click={disableStars}>clean</button>
	<button on:click={showSpaceship}>Spaceship</button>

	{#key $starCount}
	{#if isDraw}
		{#each stars as star, i}
			{#if i < stars.length - 1}
				<Star isActive={isDraw} {...star}></Star>
				<svg width="100%" height="100%">
					<line
						x1={star.left}
						y1={star.top}
						x2={stars[i + 1].left}
						y2={stars[i + 1].top}
						stroke="white"
					/>
				</svg>
			{:else}
				<Star isActive={isDraw} {...star}></Star>
			{/if}
		{/each}
		{/if}
	{/key}
	{#if $starCount < 4}
		<Blackhole isActive={!isDraw}></Blackhole>
	{:else}
		<Explotion isActive={isDraw}></Explotion>
	{/if}
	{#if showShip}
	<Spaceship></Spaceship>
	{/if}

</div>

<style lang="text/css">
	.starfield {
		width: 800px;
		height: 600px;
		color: white;
		background-color: black;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
		overflow: hidden;
	}
	svg {
		position: absolute;
	}
	button {
		background-color: blue;
		padding: 2px;
	}
</style>
