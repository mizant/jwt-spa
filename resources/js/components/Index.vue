<template>
<div class="justify-content-between d-flex flex-column w-25">
    <router-link :to="{name: 'fruit.index'}">List</router-link>
    <router-link :to="{name: 'user.login'}">Login</router-link>
    <router-link :to="{name: 'user.registration'}">Registration</router-link>
    <router-link :to="{name: 'user.personal'}">Personal</router-link>

</div>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
