import Vue from 'vue';
import gsap from "gsap";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

Vue.component('citation', require('./components/CitationComponent.vue').default);
Vue.component('home', require('./components/HomeComponent.vue').default);
Vue.component('project', require('./components/ProjectComponent.vue').default);
Vue.component('explore-project', require('./components/ExploreProject.vue').default);
Vue.component('footer-component', require('./components/FooterComponent.vue').default);
Vue.component('contact', require('./components/ContactComponent.vue').default);

import Home from './components/HomeComponent';
import Projects from './components/ProjectComponent';
import ContactComponent from './components/ContactComponent';
import AboutComponent from './components/AboutComponent';

const routes= [
    {
        path:'/',
        component: Home
    },
    {
        path:'/projects',
        component: Projects
    },
    {
        path: '/contact',
        component: ContactComponent
    },
    {
        path: '/about',
        component: AboutComponent
    }
];

const router= new VueRouter({routes});

new Vue({
   el: '#app',
   router:router
});

//GSAP 

      
gsap.fromTo("#the-citation", { duration:3, x: -200}, {x: 0});
gsap.fromTo("#explore", { duration:2, x: 2000}, {x: 0});
gsap.fromTo("#navbar", { duration:3, y: -200}, {y: 0});


gsap.fromTo(".project", { duration:10, opacity:0}, {opacity:1});