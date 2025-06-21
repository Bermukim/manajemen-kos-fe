<script>
	// export let data;

	let isUserAuthenticated = false;

	onMount(() => {
		if (!isAuthenticated()) {
			// Redirect to login if the user is not authenticated
// 
//       
			window.location.href = '/login';
		} else {
			isUserAuthenticated = true;
		}
	});
</script>

<main>
	<h1>Selamat datangssssssss!</h1>
	<!-- Konten aplikasi Anda di sini -->
	<!-- <Navigation user={data.user} /> -->
</main>
