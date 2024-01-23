<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import "$lib/styles/app.css";
</script>

<div class="app">
	<Header />
	<main class="bg-black">
		<slot />
	</main>

	<Footer />
</div>

