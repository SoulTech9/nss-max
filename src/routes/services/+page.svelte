<script>
    import ContactForm from "$lib/ContactForm.svelte";
    import About from "$lib/About.svelte"
    import Service from "$lib/Service.svelte";
</script>
<div class ='spacer2'></div>
<div class= container2>
<div class= 'service2'>
    <h1> SERVICES</h1>

    <h2>CATORING</h2>
    <p>We provide a 5 star cuisine experience for you and your guests.
    Our exotic menu is prepared with love.</p>
    

    <h2>EVENT HOSTING</h2>
    <p>Speak with our event planner to create an experience that you will cherish.
    We got you covered from DJ's to Food to Event Space and theme. Restaurants and Clubs, can ask 
    about our enterprise packages designed to boost your presence and add an enigmatic 
    flare to your business.</p>

    <h2>DELIVERY</h2>
    <p>We bring menu items to your doorsteps on demand (in select areas only).</p>

</div>
</div>

<ContactForm />

<style>
    h1{
        text-align: center;
        font-family:'Josefin Sans';
    }
    .spacer2{
        height: 9em;
    }

    .container2{
        display: flex;
        justify-content: center;
    }
    .service2{
        background-color: white;
        width: 60%;
        
    }
</style>