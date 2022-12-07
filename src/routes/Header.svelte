<script>
	import { page } from '$app/stores';
	import P5 from 'p5-svelte';	
	
	let width = 55;
  let height = 55;

  const sketch = (p5) => {
    p5.setup = () => {
      p5.createCanvas(400, 400);
    };

    p5.draw = () => {
      p5.ellipse(p5.width / 2, p5.height / 2, width, height);
    };
  };
</script>

<header>
	
	<div class='logo'>
		<img src='/src/lib/images/logo.png' alt="logo" />
	</div>
	<div class='square'></div>


	<ul class="nav">
		<li class="nav-list"><a href="/">MAIN</a></li>
		<li class="nav-list"><a href="/">SERVICES</a></li>
		<li class="nav-list"><a href="/">MENU</a></li>
		<li class="nav-list"><a href="/">CONTACT</a></li>

	</ul>

</header>

<style>
	
	header {
    width: 100%;
	height: 7em;
    position: fixed;
    display: flex;
    background-color: #ffffff;
    box-shadow: 0 3px 10px 1px rgb(0 0 0 / 0.8);
    justify-content:space-between;
    background-image: url(/src/lib/images/bg1.png);
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
  width: 12em;
  background-color: #262626;

  z-index: 3;
}

/* .social-media {
    display: flex;
    object-fit: cover;
    width: 1.8em;
    height: 1.8em;
    justify-content: flex-end;
    grid-column-start: 4;
    position: relative;
    right: .6em;
    top: 1.5em;
    margin: 0 5px;
}

.social1 {
    overflow: visible;
    border: .8px solid #dfaf37;
    border-radius: 5px;
    
    

} */

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
    transition: color 200ms linear, font-size 200ms linear;
}

.nav li a:hover {
    color: white;
    background-color: rgba(132, 132, 132, 0.212);
    transition: all 230ms linear;
    font-size: .9rem;
}

</style>
