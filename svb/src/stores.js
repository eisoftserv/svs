import {writable} from 'svelte/store';
const lStore = writable(["John Doe", "Mary Smith", "Bill White"]);
const listStore = {
    subscribe: lStore.subscribe,
    append: value => { lStore.update(
        list => {
            list.push(value);
            return list;
        }
    )},
    prepend: value => { lStore.update(
         list => {
             list.unshift(value);
             return list;
        }
    )},
    update: (pos, value) => { lStore.update(
        list => {
            list[pos] = value;
            return list;
        }
    )},
    delete: (pos) => {  lStore.update(
        list => {
            list.splice(pos, 1);
            return list;
        }
    )}
}

export default listStore;
