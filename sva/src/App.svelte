<script>

import Dash from './Components/Dash.svelte';
import Stuffs from './Components/Stuffs.svelte';
import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
const whoami = "App";

export let ui_status = 'dash';

onMount(() => {
	console.log(`mount ${whoami} status ${ui_status}`);
	return () => {
		console.log(`un-mount ${whoami} status ${ui_status}`);
	};
});

onDestroy( () => {
	console.log(`destroy ${whoami} status ${ui_status}`)
});

beforeUpdate(() => {
	console.log(`before update ${whoami} status ${ui_status}`)
});

afterUpdate(() => {
	console.log(`after update ${whoami} status ${ui_status}`)
});

</script>

<body>
	<div>
		<br />
		<button on:click={() => (ui_status === "dash") ? ui_status = "stuffs" : ui_status = "dash"} >toggle</button>
		<br />
	</div>

	{#if ui_status === 'stuffs'}
		<Stuffs listTitle={"My List"} />
	{:else}
		<Dash dashTitle={"My Dash"} />
	{/if}

</body>

