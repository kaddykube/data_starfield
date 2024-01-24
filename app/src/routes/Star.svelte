<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let isActive: boolean = true;
	export let name: string;
	export let top: string;
	export let left: string;

	$: star = isActive ? 'star' : '';


	const toColor = tweened([255, 255, 255], {
		duration: 1000,
		easing: cubicOut
	});

	let loop: any = () =>
		toColor
			.set([0, 0, 0])
			.then(() => toColor.set([90, 0, 10]))
			.then(() => toColor.set([100, 0, 205]))
			.then(() => loop());
	loop();
</script>

<div
	class={star}
	id={name}
	style="--left:{left}; --top:{top}; {'background-color:rgb(' + $toColor.join(',') + ')'}"
></div>
<p class={`text-white absolute`} style="--left:{left}; --top:{top};">{name}</p>


<style lang="text/css">
	:root {
		--left: 45%;
		--top: 49%;
	}
	p {
		left: var(--left);
		top: var(--top);
	}
	.star {
		display: block;
		position: absolute;
		left: var(--left);
		top: var(--top);
		width: 10px;
		height: 10px;
		border: 1px dashed rgb(255, 255, 255);
		background-color: rgb(255, 255, 255);
		border-radius: 50%;
		animation: scaleStar 1.2s infinite linear;
		margin-top: 22px;
		margin-left: -2px;
	}
	@keyframes scaleStar {
		0% {
			transform: scale(0.9) rotate(40deg);
		}
		100% {
			transform: scale(1.5) rotate(-40deg);
		}
	}
</style>
