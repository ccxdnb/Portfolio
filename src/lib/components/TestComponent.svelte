<script>
</script>

<style>
  .main-container {
    @apply relative p-10 bg-black text-white;
  }

  .main-container::before {
    content: "";
    @apply absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 to-orange-500;
  }

  .content {
    @apply relative;
  }

  .header-gradient {
    @apply bg-gradient-to-b from-gray-800 to-transparent;
  }
</style>

<div class="main-container">
  <div class="content">
    <div class="header-gradient">
      <div class="mb-2 text-orange-500">Community driven</div>
      <h1 class="text-5xl font-bold mb-6">Batteries included.</h1>
      <p class="mb-6">
        Threlte comes with integrations for <span class="font-bold">Rapier</span>, a best-in-class physics engine, 
        <span class="font-bold">Theatre.js</span>, an animation library with a professional motion design toolset and 
        <span class="font-bold">@threlte/gltf</span>, a tool to transform GLTF files into Threlte components.
      </p>
      <p class="mb-6">
        On top of that <span class="font-bold">@threlte/extras</span> provides a collection of useful components and 
        utilities to get you started.
      </p>
      <button class="bg-orange-500 text-white py-2 px-4 rounded">Documentation</button>
    </div>
  </div>
</div>
