<script>
    import {pop, push, replace} from "svelte-spa-router";
</script>

<h2>I'm the ABOUT page</h2>
<br />
<p>
    <button on:click={() => pop()} > Backwards </button>
    <button on:click={() => push("/Contact")} > push Contact </button>
    <button on:click={() => replace("/Contact")} > replace Contact </button>
</p>
