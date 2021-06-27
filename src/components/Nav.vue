<template>
    <nav class="w-full mx-auto p-6">
        <ul class="flex" id="nav">
            <li class="mr-6">
                <router-link class="text-blue-500 hover:text-blue-800" to="/">Home</router-link>
            </li>
            <li class="mr-6">
                <router-link class="text-blue-500 hover:text-blue-800" to="/about">About</router-link>
            </li>
            <li class="mr-6">
                <router-link class="text-blue-500 hover:text-blue-800" to="/flightbriefing">Flight Briefing</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>
