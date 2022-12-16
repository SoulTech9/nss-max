<script>
	import Header from '../lib/Header.svelte';
	import '/src/lib/css/global.css';
</script>

<svelte:head>
	<title>Never Stay Starving</title>

	<meta name="description" content="Everybody Eats" />
	<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@700&family=Mr+Dafoe&family=Roboto&display=swap" rel="stylesheet">
	
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Josefin+Sans:wght@700&display=swap" rel="stylesheet">
	<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"> -->
</svelte:head>

<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<footer>
		<p>Never Stay Starving, Inc.   All Rights Reserved 2023. </p>
	</footer>
</div>

<style>
	html,
body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
    overflow-x: hidden;
    background-color: #171717;
    
    
    
}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
		color:rgb(234, 234, 234);
		background-color: #000000;
		background-image: url(/images/);
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
