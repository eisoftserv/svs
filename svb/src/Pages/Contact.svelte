<script>
    import {pop, push, link} from "svelte-spa-router";
    import contacts from '../stores.js';    
</script>

<h2>I'm the CONTACT page</h2>
<br />
<p>
    <button on:click={() => pop()} > Backwards </button>
    <button on:click={() => push("/Details/Good_job/123")} >push Details</button>
</p>
<br />
<h2>Contact List</h2>
<br />
{#each $contacts as contact (contact)}
    <p>{contact}</p>
{:else}
    <p>no contacts</p>
{/each}

<br />
<a href="/ContactUpdate" use:link >Update the Contact list</a>
<br />
