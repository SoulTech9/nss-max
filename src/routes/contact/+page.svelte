<script>
    import ContactForm3 from "$lib/ContactForm3.svelte";

</script>
<div class='spacer'></div>

<div class='contactbox'>

<div class= 'text-block'>
</div>
</div>
<ContactForm3 />


<style>
#ingleft{
    position: absolute;
    width: 9%;
    left: 3.5%;
    top:57%;
    transform: rotate(-3deg)
}

#ingright{
    position: absolute;
    width: 9%;
    left: 81%;
    top: 97%;
    transform: rotate(49deg)
}

.spacer{
    height: 7em;
}
.contactbox{
    display: flex;
    justify-content: center;
}
.text-block{
    display: flex;
    
    height: 20em;
    width: 60%;
    background-color: whitesmoke;
}
</style>