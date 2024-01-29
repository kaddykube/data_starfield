<script>
// @ts-nocheck
	import TitleComponent from '$lib/components/forms/TitleComponent.svelte';
	import FormComponent from '$lib/components/forms/FormComponent.svelte';
	import { fly, slide } from 'svelte/transition';
	export let data;
</script>

<svelte:head>
	<title>Input</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="absolute top-10 left-10">
		<h4 class="font-bold">Input</h4>
		<TitleComponent></TitleComponent>
		<h4 class="font-bold mt-12">Posts</h4>
		<ul class="posts">
			{#each data.posts as post (post.id)}
				<li in:fly={{ y: 60 }} out:slide>
					<form method="POST" action="?/deletetitle">
						<input type="hidden" name="id" value={post.id} />
						<span>{post.title}:</span>
						<button class='ml-10 p-1 border-4' type="submit">delete</button>
					</form>
				</li>
			{/each}
		</ul>
		<h4 class="font-bold mt-10">Form</h4>
		<FormComponent></FormComponent>
		<h4 class="font-bold mt-12">Users</h4>
	</div>
</section>

<style>
</style>
