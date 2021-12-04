<script>
    import Member from './Member.svelte';
    import itemsList from "../members.js";

    let items = [...itemsList];
    let isEditing = 'no';
    let updates = {};
    let localIndex = items.length;

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
        localIndex++;
        item.id = '_' + localIndex.toString();
        console.log("inserting... " + item.id);
        items.unshift(item);
        isEditing = 'no';
    }

    const doAppend = (item) => {
        localIndex++;
        item.id = '_' + localIndex.toString();
        console.log("appending... " + item.id);
        items.push(item);
        isEditing = 'no';
    }

    const doClose = () => {
        isEditing = "no";
    }

</script>

<div>
    <br />
    <h3>Member List</h3>
    <br />

    {#each items as item (item.id)}
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
        <button on:click={() => {isEditing = 'appending'}}> Append... </button>
    <br />

    {#if isEditing === 'editing'}
        <br />
        <Member {...updates} {isEditing} {doUpdate} {doDelete} {doClose} />
    {/if}

    {#if isEditing === 'inserting'}
        <br />
        <Member {isEditing} {doInsert} {doClose} />
    {/if}

    {#if isEditing === 'appending'}
        <br />
        <Member {isEditing} {doAppend} {doClose} />
    {/if}

</div>