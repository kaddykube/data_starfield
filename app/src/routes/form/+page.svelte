<script>
// @ts-nocheck
	import FormComponent from '$lib/components/forms/FormComponent.svelte';
	export let data;
</script>

<svelte:head>
	<title>Input</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="absolute top-10 left-10">
		<FormComponent></FormComponent>
	</div>
	<ul>
	{#each data as post}
	<li>
		{post.name}
	</li>
{/each}
	</ul>
</section>

<style>
</style>
