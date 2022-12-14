
<script></script>
<div id='b12'>
    <div id="jumbotron">
       
        <!-- <p class="heading1">CHEF CHEF KILOW</p> -->
    </div>
    </div>


<style>

    /* .heading1{
        position: absolute;
        color: red;
        font-size: 50px;
        top: 4em;
        font-family: 'Roboto', sans-serif;
        font-weight: bolder;
    } */
    
    
#jumbotron {
    position: relative;
    display: block;
    z-index: 0;
    background-image: url(/images/Jumbotron/bgmax.jfif);
    background-size: 110%, 115%;
    transition: background-size 15s linear;
    background-position: center;
    /* margin-bottom: 1rem; */
    animation: flying 15s linear infinite alternate;
    background-attachment: fixed;
    width: 100% ;
    height: 40em;
    /* bottom: 3.2em; */
    overflow: hidden;

   
    
}

@keyframes flying {
    from {
        background-size: 110%, 80%;
    }

    to {
        background-size: 125%, 115%;
    }
}

/* #core-tron {
    padding-left: 10%;
    width: 80%;
    z-index: 1;

} */

</style>