import Landing from './Pages/Landing.svelte';
import Contact from './Pages/Contact.svelte';
import ContactUpdate from './Pages/ContactUpdate.svelte';
import About from './Pages/About.svelte';
import Details from './Pages/Details.svelte';

export const routes = {
    "/Landing": Landing,
    '/About': About,
    "/Contact": Contact,
    "/ContactUpdate": ContactUpdate,
    "/Details/:mytext/:mynumber?": Details
}
