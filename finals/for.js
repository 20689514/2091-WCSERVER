const listRendering = {
    data(){
        return{
          todos: [
            { text: 'Clean the House' },
            { text: 'Prepare Breakfast' },
            { text: 'Attend WCSERVER class' }
        ]}
    }
}

Vue.createApp(listRendering).mount('#list-rendering')

