<template>
    <div class="container-sidebar">
        <div class="logo">
        <img src="../assets/logo.png" width="50px">
        </div>

        <div class="container-menu-items">
            <ul>
                <div class="home">
                    <li class="sidebar-item">
                        <router-link to="/Main"  class="navigation">Home</router-link></li>
                </div>

                <div class="help">
                    <li class="sidebar-item">
                        <router-link to="/Info"  class="navigation">Info</router-link>
                    </li>
                </div>
                <!-- <a href="#"><img src="../assets/home-run.png" alt="Home"> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.container-sidebar{
    width: 80px;
    height: 100vh;
    background-color: rgb(75, 72, 72);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}
.logo{
    margin-top: 15px;
}
.container-menu-items{
    width: 80px;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
ul{
    /* width: 80px; */
    padding: 0;
}
li{
    list-style-type: none;
    width: 78px;
    height: 80px;
    /* border: solid 1px black; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1px;
    /* border: 1px solid black; */
}
li:hover{
    border: 1px solid black;
    background-color: #292929;
}
.navigation{
    color: white;
    text-decoration: none;
}
</style>