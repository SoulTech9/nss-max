<script>
import{fly} from 'svelte/transition';
    let y = 0 ;
    let lastY = 0;
    let isScrollingDown = false;
    function onScroll(val){
        isScrollingDown = (lastY < val)
        lastY = val;
    }
    $: console.log(y)
    $ : onScroll(y)

</script>

<svelte:window bind:scrollY={y}/>


{#if !isScrollingDown }
<header class = 'page-header' in:fly={{ x: -400, duration: 1000}} out:fly={{x:400, duration: 1000}}>
	<div class='logo'>
        
		<img src='/images/logo.png' alt="logo" />
	</div>
	<div class='square'></div>
  
	<ul class="nav">
		<li class="nav-list"><a href="/">MAIN</a></li>
		<li class="nav-list"><a href="/services">SERVICES</a></li>
		<li class="nav-list"><a href="/menu">MENU</a></li>
		<li class="nav-list"><a href="/contact">CONTACT</a></li>

	</ul>
  </header>
{/if}
<!-- <div id="spacer1"></div> -->




<style>

    #spacer1{height:7em ;}

	header {
    width: 100%;
	height: 7em;
    position: fixed;
    display: flex;
    background-color: #ffffff;
    box-shadow: 0 3px 10px 1px rgb(0 0 0 / 0.8);
    justify-content:space-between;
    background-image: url(/images/Jumbotron/texture1.jpg);
    background-size: cover;
    background-position: center;
    z-index: 2;
}


.logo {
    display: flex;
    width: 5.5em;
    height: 5.5em;
    object-fit: cover;
    justify-self: flex-start;
    position: relative;
    left: 2.4em;
    top: .5em;
	z-index: 4;
}
.square {
position: absolute;
  height: 7em;
  width: 11.1em;
  background-color: #171717;
  background-image: url(/images/Jumbotron/blacktexture1.jpg);
  background-size: cover;
  z-index: 3;
}



.nav {
	display: flex;
	justify-self: flex-end;
	align-self: flex-end;
    position: relative;
    right: 1em;
    
}

.nav-list {
    display: inline;
    color: #080808;
}

.nav li a {
    padding: 0px 5px;
    font-family: 'Roboto', sans-serif;
    font-size: .8rem;
    color: black;
    text-decoration: none;
    /* transition: color 200ms linear, font-size 200ms linear; */
}

.nav li a:hover {
    color: #dfaf37;
    text-decoration: underline;
 
}

</style>
