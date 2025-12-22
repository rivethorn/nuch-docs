<template>
    <div class="flex-1 flex items-center justify-center">
        <NuxtImg src="/landing/rust-logo.svg" class="h-42 floating-logo dark:invert" alt="Rust Logo" />
    </div>
</template>

<style>
.floating-logo {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.group:hover .floating-logo {
    transform: translateY(-30px);
}
</style>