<script>
    import contacts from '../stores.js';    

    const doAppend = () => {
        console.log('append');
        contacts.append((new Date()).toString());
    };

    const doPrepend = () => {
        console.log('prepend');
        contacts.prepend((new Date()).toString());
    };

    const doUpdate = () => {
        console.log('update');
        contacts.update(1, (new Date()).toString());
    };

    const doDelete = () => {
        console.log('delete');
        contacts.delete(1);
    };

</script>

<h2>Update the Contact List</h2>
<br />
<p>
    <button on:click={() => doAppend()} > Append Row</button>
    <button on:click={() => doPrepend()} > Prepend Row</button>
    <button on:click={() => doUpdate()} > Update Row 2</button>
    <button on:click={() => doDelete()} > Delete Row 2</button>
</p>
<br />
