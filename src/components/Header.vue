<template>
    <ul class="nav nav-pills">
        <router-link
            active-class="active"
            exact
            to="/"
            tag="li">
            <a>Home</a>
        </router-link>
        <router-link 
            active-class="active" 
            exact
            to="/user/1"
            tag="li">
            <a>User 1</a>
        </router-link>
        <router-link 
            active-class="active" 
            exact
            to="/user/2"
            tag="li">
            <a>User 2</a>
        </router-link>
    </ul>
</template>