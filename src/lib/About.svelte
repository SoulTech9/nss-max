<script>
    import { fly } from "svelte/transition";
    let x;
</script>

<svelte:window bind:scrollY={x} />
<div class="about-box">
    {#if x > 105}
        <img
            id="ing1"
            alt="ingredient"
            in:fly|local={{ x: -400, duration: 800 }}
            out:fly|local={{ x: -400, duration: 2000 }}
            src="/images/Jumbotron/a1.png"
        />
        <img
            id="ing2"
            alt="ingredient"
            in:fly|local={{ x: 400, duration: 800 }}
            out:fly|local={{ x: 400, duration: 2000 }}
            src="/images/Jumbotron/a8.png"
        />
    {/if}

    <p id="aboutp">
        When you combine Carribean, Southern Comfort, Latin and other exotic
        soul dishes, you begin your journey to Never Stay Starving. Its all
        about satisfying your crave for a unique and delicious 5 star
        experience. This is why we bring you the Creme de la Creme , presenting
        you with an elite selection that can gratify the appetite of any sized
        event, gathering, or celebration. Bon Apetite!
    </p>
    <div class="avideo">
        <iframe
            class="ytvid"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0512ZlE95pU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        />
    </div>
</div>

<style>
    #ing1 {
        position: absolute;
        width: 25%;
        top: 30%;
        transform: rotate(-5deg);
        flex-shrink: 3;
    }

    #ing2 {
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

        font-family: "Roboto", sans-serif;

        background-image: url(/images/foodbg2.jpg);
        background-attachment: fixed;
        background-position: center;
    }
    .avideo {
        position: relative;
        padding-left: 5em;
        margin-bottom: -3.8px;
        /* width: 60%; */
    }

    #aboutp {
        position: relative;
        left: 1rem;
        width: 90%;
    }

    @media (max-width: 1196px) {
        #ing1 {
            width: 20%;
            top: 49%;
        }
        
        #ing2{
            width: 17%;
            top:45%;
            left:33%

        }
    }
    
    @media (max-width: 1109px) {
        #ing1 {
            width: 19%;
            top: 63%;
        }
        
        #ing2{
            width: 17%;
            top:62%;
            left:28%

        }
    }
    @media (max-width: 936px) {
        #ing1 {
            width: 19%;
            top: 73%;
        }
        
        #ing2{
            width: 17%;
            top:62%;
            left:24%

        }
    }
    @media (max-width: 914px) {
        .about-box{
            flex-direction: column;
        }
        #aboutp{
            width:80%;
            align-self: center;
            margin-top: 2em;
        }
        .avideo{
            align-self: center;
            margin-bottom: 2em;
            margin-top: 1em;
        }
        
        #ing1 {
            width: 29%;
            top: 63%;
        }
        
        #ing2{
            width: 27%;
            top:62%;
            left:74%

        }
    }
</style>
