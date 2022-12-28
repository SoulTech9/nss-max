<script>
    import {fly} from 'svelte/transition';
    let x;
</script>
<svelte:window bind:scrollY={x}/>
<div class="about-box">
    {#if x > 120 }         
    <img id=ing1 alt='ingredient' in:fly|local={{ x: -400,duration: 800 }} out:fly|local={{x:-400, duration: 2000}}  src="/images/Jumbotron/a1.png"/>
    <img id=ing2 alt='ingredient' in:fly|local={{ x: 400, duration: 800}} out:fly|local={{x:400, duration: 2000}} src="/images/Jumbotron/a8.png"/>
    {/if}

    <p id="aboutp">When you combine Carribean, Southern Comfort, Latin and other exotic soul dishes, you begin
        your journey to Never Stay Starving. Its all about satisfying your crave for a unique and delicious 5
        star experience. This is why we bring you the Creme de la Creme , presenting you with an elite selection
        that can gratify the appetite of any sized event, gathering, or celebration. Bon Apetite! </p> 
        <div class='avideo'><iframe
        class= 'ytvid' width="560" height="315" src="https://www.youtube.com/embed/_D-CziFpt9E"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe></div>

    </div>

    <style>

/* @media only screen and (max-width: 1199px) and (min-width:800px){
    .about-box{
        display: grid;
        height: 20em;
        overflow: hidden;
    }
} */
#ing1{
        position: absolute;
        width: 25%;
        top: 30%;
        transform: rotate(-5deg);
        flex-shrink: 3;
       
    }

    #ing2{
        position: absolute;
        width: 20%;
        top: 25%;
        left: 35%;
        transform: rotate(4deg);
    }

    
 .about-box {
    position: relative;
    display: flex;
    justify-content: space-between;

    font-family: 'Roboto', sans-serif;
 
    background-image: url(/images/foodbg2.jpg);
    background-attachment: fixed;
    background-position: center;
   
} 
.avideo {
    position: relative;
    padding-left: 5em;
    /* width: 60%; */
}


#aboutp {
    position: relative;
    left: 1rem;
    width: 90%;

}
    </style>