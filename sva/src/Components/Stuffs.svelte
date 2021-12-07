<script>

import Stuff from "./Stuff.svelte";
import items from "../items.js"
import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { slide, blur } from 'svelte/transition';

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
    <p>Note: this page includes transitions</p>
    <br />   
</div>

<div in:slide>
    {#each items as item}
        <Stuff {...item} />
    {:else}
        <br />
        <h4>The Stuffs list is empty!</h4>
        <br />
    {/each}
</div>
<br />
<p>The same list again...</p>
<br />
<div in:blur={{delay:400, duration:800, amount:8}}>
    {#each items as item}
        <Stuff {...item} />
    {/each}
</div>