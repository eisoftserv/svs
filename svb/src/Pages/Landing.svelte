
<script>
import {pop, push, replace} from "svelte-spa-router";
</script>

<h2>I'm the LANDING page</h2>

<br />
<p>
    <button on:click={() => pop()} >backwards</button>
</p>
<br />
<p>
    <button on:click={() => push("/About")} >push About</button>
</p>
<br />
<p>
    <button on:click={() => replace("/Contact")} >replace Contact</button>
</p>

