<script>
    import {pop, push} from "svelte-spa-router";
</script>

<h2>I'm the CONTACT page</h2>
<br />
<p>
    <button on:click={() => pop()} >backwards</button>
</p>
<br />
<p>
    <button on:click={() => push("/Details/Good_job/123")} >push Details</button>
</p>
<br />
