<script>
  import LoginForm from '$lib/components/LoginForm.svelte';
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  // Jika sudah login, redirect ke home
  if ($page.data.user) {
    goto('/home');
  }
</script>

<main class="flex">
  <aside class="block w-full min-h-screen bg-[url('/bg-login.png')] rounded-tr-[2rem] rounded-br-[2rem] bg-cover bg-center">
    <div class="content-spacing mt-15 ml-7.5">
      <header class="font-[Lora] text-white font-medium text-7xl mb-3">Bermukim</header>
      <p class="font-[Plus_Jakarta_Sans] text-gray-300 text-2xl">More than just a place to live</p>
    </div>
  </aside>

  <div class="login-wrapper w-full flex items-center justify-center">
    <LoginForm />
  </div>
</main>