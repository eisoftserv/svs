<script>
    import Member from './Member.svelte';
    import itemsList from "../members.js";
    import { fade, fly, scale } from 'svelte/transition';

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
    <h3 >Member List</h3>
    <p>
        Note: this page includes transitions
    </p>
    <br />

    {#each items as item, cnt (item.id)}
        <p in:fade={{delay:200*cnt, duration:200 }}>
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
    <div in:fly={{delay:1600, x:-400, y:-400}}>
        <button on:click={() => {isEditing = 'inserting'}} in:scale={{delay:1600, duration:1200, start:0.5}}> Insert... </button>
        <button on:click={() => {isEditing = 'appending'}} in:scale={{delay:1600, duration:1200, start:2}}> Append... </button>
    </div>
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