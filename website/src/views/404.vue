<template>
  <div class="flex min-h-full flex-col bg-white pt-16 pb-12">
    <main class="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
      <div class="py-16">
        <div class="text-center">
          <p class="text-base font-semibold text-cyan-600">404</p>
          <h1 class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found.</h1>
          <p class="mt-2 text-base text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
          <div class="mt-6">
            <RouterLink to="/home" class="text-base font-medium text-cyan-600 hover:text-cyan-500">
              <span aria-hidden="true"> &larr;</span>
              Back to the homepage
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
  
</template>
