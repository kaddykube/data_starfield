<script lang="ts">
    export let isActive: boolean = true;
    $: blackhole = isActive ? 'blackhole' : '';
 
</script>

<div class={blackhole}></div>

<style lang="postcss">
	.blackhole {
		display: block;
		position: absolute;
		left: 45%;
		top: 45%;
		width: 120px;
		height: 120px;
		border: 1px solid orange;
		background-color: black;
		border-radius: 50%;
		animation: border-dance 0.9s infinite linear;
	}
	@keyframes border-dance {
		0% {
			transform: rotate(80deg);
			border-left: 3px solid orange;
			border-top: 5px solid orange;
		}
		50% {
			transform: rotate(-20deg);
			border-left: 0px solid transparent;
			border-top: 1px solid rgb(93, 71, 29);
		}
		100% {
			transform: rotate(-80deg);
			border-top: 1px solid rgb(93, 71, 29);
			border-bottom: 4px solid orange;
		}
	}
</style>
