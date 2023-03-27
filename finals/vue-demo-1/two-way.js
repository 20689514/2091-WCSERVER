const twowayBinding = {
    data(){
        return{
            message: "Hello vue"
        }
    }
}

Vue.createApp(twowayBinding).mount("#two-way-binding")