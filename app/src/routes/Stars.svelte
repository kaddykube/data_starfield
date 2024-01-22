<script lang="ts">
	let dot = ''
	let isDraw = false;
	function drawDot(){
		{isDraw ? (dot = '') : (dot = '.')} 
		isDraw = !isDraw;
	}
		
	// declare reactive blackhole
	// https://learn.svelte.dev/tutorial/reactive-declarations
	
</script>

<div class="starfield">
	<button on:click={drawDot}>{isDraw ? 'clean' : 'draw'} Dot</button>
<p>{dot}</p>
<div>
</div>
</div>

<style lang="postcss">
	button {
		border: 1px dashed black;
	}
</style>
