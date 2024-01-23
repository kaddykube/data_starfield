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
</script>

<div class="starfield">
	<span>{count}</span>
	<button on:click={drawDot}>{isDraw ? 'clean' : 'draw'} Starfield</button>

	{#if isDraw}
		<Star isActive={isDraw} {...coord1}></Star>
		<svg width="100%" height="100%">
			<line x1={coord1.left} y1={coord1.top} x2={coord2.left} y2={coord2.top} stroke="white" />
		</svg>
		<Star isActive={isDraw} {...coord2}></Star>
		<svg width="100%" height="100%">
			<line x1={coord2.left} y1={coord2.top} x2={coord3.left} y2={coord3.top} stroke="white" />
		</svg>
		<Star isActive={isDraw} {...coord3}></Star>
		<svg width="100%" height="100%">
			<line x1={coord3.left} y1={coord3.top} x2={coord4.left} y2={coord4.top} stroke="white" />
		</svg>
		<Star isActive={isDraw} {...coord4}></Star>
	{/if}
	{#if count < 10}
	<Blackhole isActive={!isDraw}></Blackhole>
	{:else}
	<Explotion isActive={!isDraw}></Explotion>
	{/if}
</div>

<style lang="postcss">
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
