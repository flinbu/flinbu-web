<template>
    <div v-if="logos" class="logo-list__wrapper">
        <ul :class="listClass">
            <li 
                v-for="(logo, index) in logos"
                :key="index"
                class="logo-list__item"
                @click="visitLogo(logo)"
            >
                <g-image
                    :src="imagePath(logo[imageKey])"
                    :alt="logo[titleKey]"
                    :style="`width: ${logoWidth}px;`"
                />
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        logos: {
            type: [Array, Boolean],
            default: false
        },
        orientation: {
            type: String,
            default: "horizontal"
        },
        align: {
            type: String,
            default: "center"
        },
        logoWidth: {
            type: String,
            default: "100"
        },
        logoColor: {
            type: String,
            default: "gray"
        },
        logoColorHover: {
            type: String,
            default: "gray-dark"
        },
        imageKey: {
            type: String,
            default: "image"
        },
        titleKey: {
            type: String,
            default: "name"
        },
        link: {
            type: Boolean,
            default: false
        },
        linkKey: {
            type: String,
            default: ""
        }
    },
    computed: {
        listClass() {
            let baseClass = "logo-list"
            let orientationClass = ` logo-list__${this.orientation}`
            let alignClass = ` logo-list__${this.align}`
            let linkClass = this.link ? ` logo-list__has-link` : ""

            return `${baseClass}${orientationClass}${alignClass}`
        }
    },
    methods: {
        visitLogo(logo) {
            if (this.link) {
                window.open = logo[this.linkKey]
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "~/scss/components/logo-list.scss";
</style>
