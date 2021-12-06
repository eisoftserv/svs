<script>
	import Router, {link, push, replace} from "svelte-spa-router";
	import {routes} from "./routes";
    export let just_landed = true;

    if (just_landed === true) {
        just_landed = false;
        replace('/Landing');
    } else { 
        push('/Landing'); 
    }
</script>

    <ul>
        <li>
            <a href="/Landing" use:link> Landing </a>
        </li>
        <li>
            <a href="/About" use:link> About </a>
        </li>
        <li>
            <a href="/Contact" use:link > Contact </a>
        </li>
    </ul>	

<Router {routes}/>


