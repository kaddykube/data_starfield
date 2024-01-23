<script lang="ts">
	import Blackhole from './Blackhole.svelte';
	import Star from './Star.svelte';
	let dot = '';
	let count = 0;
	let isDraw = false;
	function drawDot() {
		{
			isDraw ? (dot = '') : (dot = '.');
		}
		if(!isDraw){
			count += 1;
		}
		isDraw = !isDraw;
		
	}

	$: if (count >= 10) {
		count = 0;
	}


	$: top = isDraw ? Math.floor(Math.random() * 100) + '%' : '';
	$: left = isDraw  ? Math.floor(Math.random() * 90) + '%' : '';

	$: coord = {
		top: top ,
		left: left,
	}


</script>

<div class="starfield">
	<span>Counter: {count}</span>
	<button on:click={drawDot}>{isDraw ? 'clean' : 'draw'} Star</button>

	<Star isActive={isDraw} {...coord}></Star>

	<Blackhole isActive={!isDraw}></Blackhole>
</div>

<style lang="postcss">
	.starfield {
		width: 800px;
		height: 600px;
		color: white;
		background-color: black;
		position: relative;
	}
	button {
		border: 1px dashed rgb(131, 131, 131);
		background-color: blue;
	}


</style>
