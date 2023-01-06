<script lang="ts">
</script>
<div id='spacer'> </div>

<main>
	<div id='login-box'>
		<h1>Login</h1>
		<form action="" class="auth-form">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button class="btn btn-primary">Login</button>
		</form>
	</div>
</main>
<style>
	#spacer{
		height: 5em;
	}
	main{
		display: flex;
	height: 80vh;
	background-color: rgb(5, 5, 5);
	justify-content: center;
}
	h1{
		text-align: center;
		
		font-family: 'Roboto', sans-serif;
	}
	#login-box{
		background-color: whitesmoke;
		margin-top:10em ;
		width: 50%;
		height: 50%;
		padding: 10px;
	}
</style>