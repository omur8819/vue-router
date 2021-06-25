import Home from './components/Home';
import Header from './components/Header';

// const User = resolve => {
//     require.ensure(["./components/user/User.vue"], () => {
//         resolve(require("./components/user/User.vue"));
//     })
// }
// const UserStart = resolve => {
//     require.ensure(["./components/user/UserStart.vue"], () => {
//         resolve(require("./components/user/UserStart.vue"));
//     })
// }
// const UserDetail = resolve => {
//     require.ensure(["./components/user/UserDetail.vue"], () => {
//         resolve(require("./components/user/UserDetail.vue"));
//     })
// }
// const UserEdit = resolve => {
//     require.ensure(["./components/user/UserEdit.vue"], () => {
//         resolve(require("./components/user/UserEdit.vue"));
//     })
// }

const User = resolve => {
    require.ensure(["./components/user/User.vue"], () => {
        resolve(require("./components/user/User.vue"));
    }, "User")
}
const UserStart = resolve => {
    require.ensure(["./components/user/UserStart.vue"], () => {
        resolve(require("./components/user/UserStart.vue"));
    }, "User")
}
const UserDetail = resolve => {
    require.ensure(["./components/user/UserDetail.vue"], () => {
        resolve(require("./components/user/UserDetail.vue"));
    }, "User")
}
const UserEdit = resolve => {
    require.ensure(["./components/user/UserEdit.vue"], () => {
        resolve(require("./components/user/UserEdit.vue"));
    }, "User")
}


// import User from './components/user/User';
// import UserStart from './components/user/UserStart';
// import UserDetail from './components/user/UserDetail';
// import UserEdit from './components/user/UserEdit';

export const routes = [
    { path: '/', name: 'homepage', components: {
        default: Home,
        "header-top": Header,
    } },
    { path: '/user', name: 'userpage', 
    components: {
        default: User,
        "header-bottom": Header
    }, 
    
    children: [
        { path: '', component: UserStart },
        { path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
            next();
        } },
        { path: ':id/edit', component: UserEdit, name: "userEdit" }
    ] },
    // { path: "/redirect", redirect: "/user" },
    { path: "/redirect", redirect: { name: "homepage" } },
    // { path: "*", redirect: "/" },
    { path: "*", redirect: { name: "homepage" } },
]