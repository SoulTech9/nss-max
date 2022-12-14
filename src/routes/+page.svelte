<script>
    import Jumbotron from "$lib/Jumbotron.svelte";
	import About from "$lib/About.svelte";
	import Service from '$lib/Service.svelte';
	import Food from "$lib/Food.svelte";
	import ContactForm from "$lib/ContactForm.svelte";
</script>

<svelte:head>
	<title>Never Stay Starving</title>
	<meta name="description" content="Everybody Eats" />
</svelte:head>

<Jumbotron />
<About />
<Service />
<Food /> 
<ContactForm />

<style>
	
</style>
