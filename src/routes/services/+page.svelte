<script>
    import{fly} from 'svelte/transition';
    import ContactForm from "$lib/ContactForm.svelte";
    import About from "$lib/About.svelte"
    import Service from "$lib/Service.svelte";
    let xs;
</script>
<div class ='spacer2'></div>
<svelte:window bind:scrollY={xs}/>
{#if xs > -1}

<div class= container2>
<div class= 'service2'>
    <div class='avideo'><iframe
        class= 'ytvid' width="560" height="315" src="https://www.youtube.com/embed/ckUcSvy4PBI"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe></div>
    <h1> SERVICES</h1>

    <img alt='chef icon' class= 'iconb' id="service-img11" in:fly|local= {{x:400}} src="/images/service-icon1b.png" />
    <h2>CATORING</h2>
    <p class='par2'>We provide a 5 star cuisine experience for you and your guests.
    Our exotic menu is prepared with love.</p>
    
    <img alt='chef icon' class='iconb' id="service-img12" in:fly|local= {{x:400}} src="/images/service-icon2b.png" />
    <h2>EVENT HOSTING</h2>
    <p class='par2'>Speak with our event planner to create an experience that you will cherish.
    We got you covered from DJ's to Food to Event Space and theme. Restaurants and Clubs, can ask 
    about our enterprise packages designed to boost your presence and add an enigmatic 
    flare to your business.</p>

    <img alt='chef icon' class="iconb" id="service-img13" in:fly|local= {{x:400}} src="/images/service-icon3b.png" />
    <h2>DELIVERY</h2>
    <p class='par2'>We bring menu items to your doorsteps on demand (coming soon).</p>

</div>
</div>
{/if}
<ContactForm />

<style>
    .par2{
        max-width: 50%;
        margin-top: -10px;
        padding-bottom: 10px;
       
    }
    h1{
        text-align: center;
        font-family:'Josefin Sans';
        
        
    }
    .spacer2{
        height: 7em;
    }

    .container2{
        display: flex;
        justify-content: center;
        background-image: url(/images/Jumbotron/blacktexture1.jpg);
      
      
    }
    .service2{
        
        display: flex;
        flex-direction: column;
        background-color: white;
        align-items: center;
       
        width: 60%;
        
    }

    .iconb{
        
        width: 5em;

        }
</style>