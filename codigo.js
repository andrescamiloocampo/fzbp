'use strict'

const app = {
    data() {
        return {
            indice: 1,
            url: `imagenes/1.jpg`,
            estado: false,
            open:false,
            nombre:''
        }
    },
    mounted() {
        this.cambiarImagen()
    },
    methods: {
        cambiarImagen() {
            setInterval(() => {
                this.indice++
                this.url = `imagenes/${this.indice}.jpg`
                if (this.indice > 3) {
                    this.indice = 1
                    this.url = `imagenes/${this.indice}.jpg`
                }
            }, 3000)
        },
        crecer(id) {
            if (this.estado) {
                document.querySelector(id).style.justifyContent = "left"
                document.querySelector(id).style.flexGrow = "1"
                this.estado = false
            } else {
                document.querySelector(id).style.justifyContent = "center"
                document.querySelector(id).style.flexGrow = "0"
                this.estado = true
            }
        }
    }
}
var mountedApp = Vue.createApp(app).mount('#app')