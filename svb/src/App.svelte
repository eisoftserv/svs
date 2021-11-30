<script>
	import Router, {link, push} from "svelte-spa-router";
	import {routes} from "./routes";
	push("/Landing");
</script>

    <ul>
        <li>
            <a href="/Landing" use:link>landing page</a>
        </li>
        <li>
            <a href="/About" use:link>about us</a>
        </li>
        <li>
            <a href="/Contact" use:link>contact us</a>
        </li>
    </ul>	

<Router {routes}/>


