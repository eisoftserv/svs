import App from './App.svelte';

const app = new App({
	target: document.body,
	props: { just_landed:true }
});

export default app;