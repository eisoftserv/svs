<script>

import Dash from './Components/Dash.svelte';
import Stuffs from './Components/Stuffs.svelte';
//import Members from './Components/Members.svelte';
import MembersSplit from './Components/MembersSplit.svelte';
import { onMount, onDestroy, beforeUpdate, afterUpdate, setContext } from 'svelte';
const whoami = "App";

export let ui_status = 'dash';

const testFunc = (x, y) => (x + y);
const testVal = 'data sent from App';
setContext('testFunc', testFunc);
setContext('testVal', testVal);

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
		<button on:click={() => {if (ui_status !== 'dash') ui_status = 'dash';}} >Dash</button>
		<button on:click={() => {if (ui_status !== 'stuffs') ui_status = 'stuffs';}} >Stuffs</button>
		<button on:click={() => {if (ui_status !== 'members') ui_status = 'members';}} >Members</button>
		<br />
	</div>

	{#if ui_status === 'stuffs'}
		<Stuffs listTitle={"My List"} />
	{:else if ui_status === 'members'}
		<!--         
			<Members />
		-->
		<MembersSplit />
	{:else}
		<Dash dashTitle={"My Dash"} />
	{/if}

</body>

