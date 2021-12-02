<script>
    
import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
export let dashTitle = 'no title';

const whoami = "Dash";

onMount(() => {
	console.log(`mount ${whoami} - ${dashTitle}`);
	return () => {
		console.log(`un-mount ${whoami} - ${dashTitle}`);
	};
});

onDestroy( () => {
    console.log(`destroy ${whoami} - ${dashTitle}`)
});

beforeUpdate(() => {
    console.log(`before update ${whoami} - ${dashTitle}`)
});

afterUpdate(() => {
    console.log(`after update ${whoami} - ${dashTitle}`)
});
    
</script>  

<div>
    <h2>Hello Newbies!</h2>
    <br />
    <img src="./images/dash450.png" alt="dash image" />
    <br />
</div>