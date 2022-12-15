<script>
	import Header from '../lib/Header.svelte';
	// import '/src/lib/css/global.css';
</script>

<svelte:head>
	<title>Never Stay Starving</title>

	<meta name="description" content="Everybody Eats" />
	<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Never Stay Starving, Inc. 2022 </p>
	</footer>
</div>

<style>
	

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
