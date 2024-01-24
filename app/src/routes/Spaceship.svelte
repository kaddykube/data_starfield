<script lang="ts">
	export let isActive: boolean = true;
</script>

{#key isActive}
	{#if isActive}
		<div
			class={`absolute bottom-2 left-[40%] w-[20px] h-[40px] bg-gradient-to-b from-indigo-500 transform duration-150`}></div>
	{/if}
{/key}

