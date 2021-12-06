<script>
    import {pop, link} from "svelte-spa-router";
    export let params = {};
</script>

<h2>I'm the DETAILS page</h2>
<br />
<p>
    <button on:click={() => pop()} >backwards</button>
</p>

<br>
<p>my text is: {params.mytext}</p>
<p>my number is: {params.mynumber}</p>

<br />
<a href="/ContactUpdate" use:link target='_blank'>Update the Contact list</a>
<br />

