import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		ui_status: "dash"
	}
});

export default app;