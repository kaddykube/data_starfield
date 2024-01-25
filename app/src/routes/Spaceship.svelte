<script>
	import { spring } from 'svelte/motion';

	const coords = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.2,
			damping: 0.4
		}
	);

	function move() {
		coords.update(($coords) => ({
			x: $coords.x + 1,
			y: $coords.y - 20
		}));
		let nIntervId = setInterval(() => {
			if($coords.y < -370){
				// @ts-ignore
				return;
			}
			move();
		}, 200);
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	on:click={move}
	class="w-[20px] h-[55px] absolute top-[90%] left-[50%] cursor-move bg-cyan-500"
	style="transform:
translate({$coords.x}px,{$coords.y}px)" 
></div>
