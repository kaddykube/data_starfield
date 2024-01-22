<script>
	import { page } from '$app/stores';
</script>

<footer>
	<nav class='border-4 bg-black'>
		<div aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About</a>
		</div>
	</nav>
</footer>

<style>
</style>
