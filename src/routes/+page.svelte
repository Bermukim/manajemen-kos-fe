<!-- src/routes/+page.svelte -->
<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';

  // Gunakan $effect untuk redirect
  $effect(() => {
    if ($page.data.user) {
      goto('/home');
    } else {
      goto('/login');
    }
  });
</script>

<div class="min-h-screen flex items-center justify-center">
  <p class="text-lg">Loading application...</p>
</div>