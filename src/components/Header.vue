<template>
    <ul class="nav nav-pills">
        <router-link
            active-class="active" 
            to="/"
            tag="li">
            <a>Home</a>
        </router-link>
        <router-link 
            active-class="active" 
            to="/user"
            tag="li">
            <a>User</a>
        </router-link>
    </ul>
</template>