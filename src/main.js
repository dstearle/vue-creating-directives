import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.directive('highlight', {
    
    bind(el, binding, vnode) {
        
        //custom directives
        //el.style.backgroundColor = 'green';   use this with just "v-highlight" no ="" after
        //el.style.backgroundColor = binding.value;    use with v-highlight="'red'"
        
        var delay = 0;
        
        if (binding.modifiers['delayed']) {
            
            delay = 3000;
            
        }
        
        setTimeout ( () => {
            
            if(binding.arg == 'background') {
            
            el.style.backgroundColor = binding.value;
            
            }

            else { el.style.color = binding.value; }
            
        }, delay);
        
    }
    
});

new Vue({
  render: h => h(App),
}).$mount('#app')