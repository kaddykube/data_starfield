<script>
	let w = 0;
</script>
<svelte:window bind:innerWidth={w} />
<div class='w-[400px] h-[100px] relative bg-gradient-to-r from-cyan-500 to-white'>
<p>{w}</p>

</div>