<script lang="ts">
	import Blackhole from './Blackhole.svelte';
	import Explotion from './Explotion.svelte';
	import Star from './Star.svelte';
	let dot = '';
	let count = 0;
	let isDraw = false;
	function drawDot() {
		{
			isDraw ? (dot = '') : (dot = '.');
		}
		if (!isDraw) {
			count += 1;
		}
		isDraw = !isDraw;
	}

	function handleStarName(event: { detail: { text: string; }; }) {
		console.log(event.detail.text);
	}

	$: if (count >= 11) {
		count = 0;
	}

	$: coord1 = {
		top: isDraw ? Math.floor(Math.random() * 90) + '%' : '',
		left: isDraw ? Math.floor(Math.random() * 80) + '%' : ''
	};
	$: coord2 = {
		top: isDraw ? Math.floor(Math.random() * 90) + '%' : '',
		left: isDraw ? Math.floor(Math.random() * 80) + '%' : ''
	};
	$: coord3 = {
		top: isDraw ? Math.floor(Math.random() * 50) + '%' : '',
		left: isDraw ? Math.floor(Math.random() * 60) + '%' : ''
	};
	$: coord4 = {
		top: isDraw ? Math.floor(Math.random() * 80) + '%' : '',
		left: isDraw ? Math.floor(Math.random() * 70) + '%' : ''
	};

	$: stars = [coord1, coord2, coord3, coord4];
</script>

<div class="starfield">
	<span>{count}</span>
	<button on:click={drawDot}>{isDraw ? 'clean' : 'draw'} Starfield</button>

	{#if isDraw}
		{#each stars as star, i}
			{#if i < stars.length - 1}
				<Star  isActive={isDraw} {...star}></Star>
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
	{#if count < 10}
		<Blackhole isActive={!isDraw}></Blackhole>
	{:else}
		<Explotion isActive={!isDraw}></Explotion>
	{/if}
</div>

<style lang="text/css">
	.starfield {
		width: 800px;
		height: 600px;
		color: white;
		background-color: black;
		position: relative;
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
