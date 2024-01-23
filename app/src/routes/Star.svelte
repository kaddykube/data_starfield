<script lang="ts">

import { createEventDispatcher } from 'svelte';
	export let isActive: boolean = true;
    export let top: string;
    export let left: string;

	$: star = isActive ? 'star' : '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class={star} style="--left:{left}; --top:{top}"></div>

<style lang="text/css">
	:root {
		--left: 45%;
		--top: 49%;
	}
	.star {
		display: block;
		position: absolute;
		left: var(--left);
		top: var(--top);
		width: 6px;
		height: 6px;
		border: 1px solid rgba(255, 255, 255, 0.653);
		background-color: rgb(255, 221, 0);
		border-radius: 50%;
		animation: scaleStar 1.2s infinite linear;
        margin-top: 22px;
        margin-left: -2px;
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
