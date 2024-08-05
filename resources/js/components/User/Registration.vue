<template>
    <div class="w-25">
        <input v-model="name" type="text" class="form-control mb-3" placeholder="name">
        <input v-model="email"  type="email" class="form-control mb-3" placeholder="email">
        <input v-model="password"  type="password" class="form-control mb-3" placeholder="password">
        <input v-model="password_confirmation"  type="password" class="form-control mb-3" placeholder="confirm password">
        <input @click.prevent="store"  type="submit" name="" id="" class="btn btn-primary">
    </div>
</template>

<script>

export default {
    name: "Registration",
    data() {
        return {
            name: '',
            email: null,
            password: null,
            password_confirmation: null
        }
    },

    mounted() {
        // console.log(localStorage.getItem('access_token'));
    },
    methods: {
        store() {
            axios.post('/api/users', {
                name:this.name,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation
            }).then( res => {
                console.log(res);
            })
        }
    }
}
</script>

<style scoped>

</style>
