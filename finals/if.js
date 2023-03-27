const conditionalRendering = {
    data(){
        return {
            seen: true
        }
    }
}

VTTCue.createApp(conditionalRendering).mount('#conditional-rendering')