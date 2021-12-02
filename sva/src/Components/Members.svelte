<script>
    import items from "../members.js";

    let isEditing = 'no';
    let updates = {};
</script>

<div>
    <br />
    <h3>Members List</h3>
    <br />
    {#each items as item}
        <p>
            <span>{item.id} </span>
            <span on:click={ (e) => {
                isEditing = 'editing';
                updates = {...item};
                //console.log(updates);
            }}> {item.name} </span>
            <span> {item.total} </span>
        </p>
    {:else}
    <br />
    <p>no members</p>
    <br />
    {/each}    
    <br>

    {#if isEditing === 'editing'}
    <div>
        <p>
            <span>{updates.id}</span>
            <span>{updates.name}</span>
            <span>{updates.total}</span>
            <span>{updates.bio}</span>
        </p>
        <button on:click={() => {
            const pos = items.findIndex( x => x.id === updates.id);
            if (pos >= 0) {
                items[pos].name = items[pos].name + "+";
            } 
            isEditing = "no";
        }}>Update</button>
    </div>
    {/if}

</div>