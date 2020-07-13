<template>
    <div class="container">
        <Sidebar></Sidebar>
        <router-view></router-view>
        
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue'
export default {
    components:{
        Sidebar
    }
}
</script>

<style scoped>

</style>