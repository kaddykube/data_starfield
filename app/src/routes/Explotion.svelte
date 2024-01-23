<script lang="ts">
    export let isActive: boolean = true;
    $: blackhole = isActive ? 'blackhole' : '';
 
</script>

<div class={blackhole}></div>

<style lang="postcss">
	.blackhole {
        opacity: 0;
		display: block;
		position: absolute;
		left: 45%;
		top: 45%;
		width: 120px;
		height: 120px;
		border: 1px solid orange;
		background-color: black;
		border-radius: 50%;
		animation: border-explotion 0.5s 1 linear;
        animation-iteration-count: 1;
	}
	@keyframes border-explotion  {
		0% {
            opacity: 1;
			transform: rotate(80deg) scale(0.9);
			border-left: 3px solid orange;
			border-top: 5px solid orange;
		}
		50% {

            opacity: 1;
			transform: rotate(-20deg) scale(2.5);
			border-left: 0px solid transparent;
			border-top: 1px solid rgb(93, 71, 29);
		}
		99% {

            opacity: 1;
			transform: rotate(-80deg) scale(5.9);
			border-top: 1px solid rgb(197, 148, 56);
			border-bottom: 4px solid rgb(255, 55, 0);
		}
        100% {
			opacity: 0;
		}
	}
</style>
