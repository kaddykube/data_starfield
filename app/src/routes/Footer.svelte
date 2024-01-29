<script>
	import { page } from '$app/stores';
</script>

<footer>
	<nav class="ml-10 mt-10">
		<div aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About</a>
		</div>
	</nav>
</footer>

