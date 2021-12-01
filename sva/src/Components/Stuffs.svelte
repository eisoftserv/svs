<script>

import Stuff from "./Stuff.svelte";
import items from "../items.js"
import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
export let listTitle = "no title";

const whoami = "List";

onMount(() => {
	console.log(`mount ${whoami} - ${listTitle}`);
	return () => {
		console.log(`un-mount ${whoami} - ${listTitle}`);
	};
});

onDestroy( () => {
    console.log(`destroy ${whoami} - ${listTitle}`)
});

beforeUpdate(() => {
    console.log(`before update ${whoami} - ${listTitle}`)
});

afterUpdate(() => {
    console.log(`after update ${whoami} - ${listTitle}`)
});

</script>

<div>
    <br />
    <h2>{listTitle}</h2>
    <br />   
</div>

<div>
    {#each items as item}
        <Stuff {...item} />
    {:else}
        <br />
        <h4>The Stuffs list is empty!</h4>
        <br />
    {/each}
</div>