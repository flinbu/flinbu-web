<template>
    <i v-if="name" :class="iconClass"/>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            default: ""
        },
        type: {
            type: String,
            default: ""
        },  
        size: {
            type: String,
            default: ""
        },
        rotate: {
            type: String,
            default: ""
        },
        flip: {
            type: String,
            default: ""
        },
        pull: {
            type: String,
            default: ""
        },
        border: {
            type: String,
            default: ""
        },
        animation: {
            type: String,
            default: ""
        },
        animationOnHover: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        iconClass() {
            let baseClass = "bx"
            let typeClass
            switch (this.type) {
                case "solid":
                    typeClass = " bxs-"
                    break
                case "logo":
                    typeClass = " bxl-"
                    break
                default:
                    typeClass = " bx-"
            }
            let sizeClass = this.size ? ` bx-${this.size}` : ""
            let rotateClass = this.rotate ? ` bx-rotate-${this.rotate}` : ""
            let flipClass = this.flip ? ` bx-flip-${this.flip}` : ""
            let pullClass = this.pull ? ` bx-pull-${this.pull}` : ""
            let borderClass = this.border ? ` bx-border-${this.border}` : ""
            let animationClass = this.animation ? ` bx-${this.animation}` : ""

            if (this.animation && this.animationOnHover) animationClass = ` bx-${this.animation}-hover`

            return `${baseClass}${typeClass}${this.name}${sizeClass}${rotateClass}${flipClass}${pullClass}${borderClass}${animationClass}`
        }
    }
}
</script>
<style lang="scss" scoped>
    @font-face {
        font-family: 'boxicons';
        font-weight: normal;
        font-style: normal;

        src: url('../assets/fonts/boxicons.eot');
        src: url('../assets/fonts/boxicons.eot') format('embedded-opentype'),
        url('../assets/fonts/boxicons.woff2') format('woff2'),
        url('../assets/fonts/boxicons.woff') format('woff'),
        url('../assets/fonts/boxicons.ttf') format('truetype'),
        url('../assets/fonts/boxicons.svg?#boxicons') format('svg');
    }
    @import "~/scss/components/icon.scss";
</style>