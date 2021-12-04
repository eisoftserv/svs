<script>
    import {getContext} from 'svelte';
    export let isEditing = "no";
    export let id = '';
    export let name = '';
    export let total = 0.0;
    export let bio = '';
    export let doDelete;
    export let doUpdate;
    export let doInsert;
    export let doAppend;
    export let doClose;

    const testFunc = getContext('testFunc');
    const testVal = getContext('testVal');
</script>

<div>
    <br />
    <h4>{isEditing} member:</h4>
    <p>
        <span>{id}</span>
        <span>{name}</span>
        <span>{total}</span>
        <span>{bio}</span>
    </p>

    {#if isEditing === "editing"}
        <button on:click={() => doUpdate({id, name:name+'*', total, bio})}> Update </button>
        <button on:click={() => doDelete(id)}> Delete </button>
        <button on:click={() => doClose()}> Cancel </button>
    {:else if isEditing === "inserting"}
        <button on:click={() => doInsert({name:'test', total:2.5, bio:'about test'})}> Submit </button>
        <button on:click={() => doClose()}> Cancel </button>
        {:else if isEditing === "appending"}
        <button on:click={() => doAppend({name:'test', total:2.5, bio:'about test'})}> Submit </button>
        <button on:click={() => doClose()}> Cancel </button>
    {/if}

    <br />
    <br />
    <h4>App Context tests:</h4>
    <p>Value: {testVal}</p>
    <p>Function calls:</p>
    <p> 1 + 2 = {testFunc(1, 2)}</p>
    <p> 3 + 4 = {testFunc(3, 4)}</p>

</div>
