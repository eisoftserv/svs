<script>
    import Member from './Member.svelte';
    import itemsList from "../members.js";

    let items = [...itemsList];
    let isEditing = 'no';
    let updates = {};

    const doUpdate = (item) => {
        console.log("editing... " + item.id);
        const pos = items.findIndex( x => x.id === item.id);
        if (pos > -1) {
            items[pos] = item;
        }
        isEditing = 'no';
    }

    const doDelete = (id) => {
        console.log('deleting...' + id);
        const pos = items.findIndex( x => x.id === id);
        if (pos > -1) {           
            items.splice(pos, 1);
        }
        isEditing = 'no';
    }

    const doInsert = (item) => {
        item.id = '_' + (items.length + 1).toString();
        console.log("inserting... " + item.id);
        items.unshift(item);
        isEditing = 'no';
    }

    const doClose = () => {
        isEditing = "no";
    }

</script>

<div>
    <br />
    <h3>Members List (split)</h3>
    <br />

    {#if isEditing === 'no'}
        {#each items as item}
            <p>
                <span>{item.id} </span>
                <span class="eis_link" on:click={ (e) => {
                    isEditing = 'editing';
                    updates = {...item};
                }}> {item.name} </span>
                <span> {item.total} </span>
            </p>
        {:else}
            <br />
            <p>no members</p>
            <br />
        {/each}    

        <br />
            <button on:click={() => {isEditing = 'inserting'}}> Insert... </button>
        <br />

    {/if}

    {#if isEditing === 'editing'}
        <br />
        <Member {...updates} {isEditing} {doUpdate} {doDelete} {doInsert} {doClose} />
    {/if}

    {#if isEditing === 'inserting'}
        <br />
        <Member {isEditing} {doUpdate} {doDelete} {doInsert} {doClose} />
    {/if}

</div>