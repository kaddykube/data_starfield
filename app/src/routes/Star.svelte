<script lang="ts">
	export let isActive: boolean = true;
    export let top: string;
    export let left: string;
	$: star = isActive ? 'star' : '';
</script>

<div class={star} style="--left:{left}; --top:{top}"></div>

<style lang="postcss">
	:root {
		--left: 45%;
		--top: 49%;
	}
	.star {
		display: block;
		position: absolute;
		left: var(--left);
		top: var(--top);
		width: 5px;
		height: 5px;
		border: 1px solid rgb(255, 255, 255);
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		animation: scaleStar 1.2s infinite linear;
	}
	@keyframes scaleStar {
		0% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1.2);
		}
	}
</style>
