import Landing from './Pages/Landing.svelte';
import Contact from './Pages/Contact.svelte';
import About from './Pages/About.svelte';
import Details from './Pages/Details.svelte';

export const routes = {
    "/Landing": Landing,
    '/About': About,
    "/Contact": Contact,
    "/Details/:mytext/:mynumber?": Details
}
