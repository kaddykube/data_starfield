<script>
	import { page } from '$app/stores';
</script>

<header>
	<nav>
		<ul class='flex m-2'>
			<li class='px-8' aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/form' ? 'page' : undefined}>
				<a href="/form">Form</a>
			</li>
		</ul>
	</nav>
</header>

