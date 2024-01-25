<script>
    import Flavour from './Flavour.svelte';
	import Address from './AddressBlock.svelte';

	const options = [
		{ object: 'address', component: Address },
		{ object: 'flavour', component: Flavour },
	];

	let selected = options[0];
</script>
<div class="absolute top-0 left-0 w-full flex flex-col m-20">
<select class="inline w-[10%] m-2 ml-0" bind:value={selected}>
	{#each options as option}
		<option value={option}>{option.object}</option>
	{/each}
</select>

<svelte:component this={selected.component} />
</div>