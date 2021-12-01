<script>

export let id = 0;
export let name = 'no name';
export let price = 0.0;

import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
const whoami = "Item";

onMount(() => {
	console.log(`mount ${whoami} name ${name}`);
	return () => {
		console.log(`un-mount ${whoami} name ${name}`);
	};
});

onDestroy( () => {
    console.log(`destroy ${whoami} name ${name}`)
});

beforeUpdate(() => {
    console.log(`before update ${whoami} name ${name}`)
});

afterUpdate(() => {
    console.log(`after update ${whoami} name ${name}`)
});

</script>

<div>
    <span>{id} </span>
    <span> {name} </span>
    <span> ${price}</span>
</div>
