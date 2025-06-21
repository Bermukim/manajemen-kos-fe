<script>
	import { goto } from '$app/navigation';
	// import { AUTH_COOKIE_KEY } from '$env/static/private';

	// Gunakan $state() untuk semua variabel reaktif
	// let userId = $state('');
	let password = $state('');
	let error = $state('');
	let isLoading = $state(false);

	const formState = $state({
		username: '',
		password: ''
	});

	function handleLogin() {
		isLoading = true;
		error = '';

		document.cookie = `auth_key=PELER; path=/; max-age=3600`;

		goto('/home');
		// try {
		// 	if (!userId.trim() || !password) {
		// 		throw new Error('User ID dan password harus diisi');
		// 	}

		// 	// const response = await fetch('/api/login', {
		// 	//   method: 'POST',
		// 	//   headers: { 'Content-Type': 'application/json' },
		// 	//   body: JSON.stringify({
		// 	//     userId: userId.trim(),
		// 	//     password
		// 	//   })
		// 	// });

		// 	// if (!response.ok) {
		// 	//   const errorData = await response.json();
		// 	//   throw new Error(errorData.error || 'Login gagal');
		// 	// }

		// } catch (err) {
		// 	error = err.message;
		// } finally {
		// 	isLoading = false;
		// }
	}
</script>

<!-- Bagian Form -->
<div class="w-[20rem]">
	<h2 class="mb-7.5 font-[Lora] text-5xl font-medium">Log in</h2>

	{#if error}
		<div class="mb-4 rounded bg-red-50 p-2 text-sm text-red-500">
			{error}
		</div>
	{/if}
	<form id="formLogin">
		<div class="space-y-6 font-[Plus_Jakarta_Sans]">
			<!-- Input User ID -->
			<div>
				<label for="username" class="mb-1 block text-sm font-medium text-gray-700">User ID</label>
				<input
					type="text"
					bind:value={formState.username}
					class="focus:ring-primary w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black"
					placeholder="Masukkan user id"
					disabled={isLoading}
				/>
			</div>

			<!-- Input Password -->
			<div>
				<label for="password" class="mb-1 block text-sm font-medium text-gray-700">Password</label>
				<input
					type="password"
					bind:value={formState.password}
					class="focus:ring-primary w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:border-black"
					placeholder="Masukkan password"
					disabled={isLoading}
				/>
			</div>

			<!-- Tombol Login -->
			<button
				on:click|preventDefault={handleLogin}
				class="mt-2.5 w-full rounded-md bg-gray-900 px-4 py-2 font-[Plus_Jakarta_Sans] font-bold text-white transition-colors hover:bg-gray-700"
				disabled={isLoading}
			>
				{#if isLoading}
					<span class="flex items-center justify-center">
						<svg
							class="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
						>
							<circle
								class="opacity-25"
								cx="12"
								cy="12"
								r="10"
								stroke="currentColor"
								stroke-width="4"
							></circle>
							<path
								class="opacity-75"
								fill="currentColor"
								d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
							></path>
						</svg>
						Memproses...
					</span>
				{:else}
					Login Sekarang
				{/if}
			</button>
		</div>
	</form>
</div>
