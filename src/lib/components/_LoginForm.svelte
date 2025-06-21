<script>

  function handleClick() {
    console.log("Tombol diklik!");
  }

</script>


<!-- Bagian Form -->
<div class="w-[20rem]">
  <h2 class="text-5xl font-[Lora] font-medium mb-7.5">Log in</h2>
  
  <div class="space-y-6 font-[Plus_Jakarta_Sans]">
    <!-- Input User ID -->
    <div>
      <label for="username" class="block text-sm font-medium text-gray-700 mb-1">User ID</label>
      <input 
        type="text" 
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-black"
        placeholder="Masukkan user id"
      />
    </div>
    
    <!-- Input Password -->
    <div>
      <label for="password" class="block text-sm font-medium text-gray-700 mb-1">Password</label>
      <input 
        type="password" 
        class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-black"
        placeholder="Masukkan password"
      />
    </div>
    
    <!-- Tombol Login -->
    <button class="w-full j font-[Plus_Jakarta_Sans] bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700 transition-colors mt-2.5 font-bold" on:click={handleClick}>
      Login Sekarang
    </button>
  </div>
</div>

























