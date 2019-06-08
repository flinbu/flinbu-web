<template>
    <div>
        <g-link
            v-if="type == 'link'"
            :href="target"
            :class="buttonClasses"
        >
            <button-content
                :label="label"
                :icon="icon"
                :icon-type="iconType"
                :icon-size="iconSize"
                :icon-rotate="iconRotate"
                :icon-flip="iconFlip"
                :icon-animation="iconAnimation"
                :icon-animation-on-hover="iconAnimationOnHover"
            />
        </g-link>
        <a 
            v-if="type == 'external'"
            :class="buttonClasses"
            :href="target"
            target="_blank">
            <button-content
                :label="label"
                :icon="icon"
                :icon-type="iconType"
                :icon-size="iconSize"
                :icon-rotate="iconRotate"
                :icon-flip="iconFlip"
                :icon-animation="iconAnimation"
                :icon-animation-on-hover="iconAnimationOnHover"
            />
        </a>
        <a 
            v-if="type == 'modal'"
            :class="buttonClasses"
            @click="openModal(target)"
        >
            <button-content
                :label="label"
                :icon="icon"
                :icon-type="iconType"
                :icon-size="iconSize"
                :icon-rotate="iconRotate"
                :icon-flip="iconFlip"
                :icon-animation="iconAnimation"
                :icon-animation-on-hover="iconAnimationOnHover"
            />
        </a>
        <a 
            v-if="type == 'anchor'"
            :class="buttonClasses"
            @click="doAnchor(target)"
        >
            <button-content
                :label="label"
                :icon="icon"
                :icon-type="iconType"
                :icon-size="iconSize"
                :icon-rotate="iconRotate"
                :icon-flip="iconFlip"
                :icon-animation="iconAnimation"
                :icon-animation-on-hover="iconAnimationOnHover"
            />
        </a>
    </div>
</template>
<script>
import ButtonContent from "~/components/ButtonContent"
export default {
    props: {
        type: {
            type: String,
            default: "link"
        },
        label: {
            type: String,
            default: ""
        },
        target: {
            type: String,
            required: true
        },
        theme: {
            type: String,
            default: "default"
        },
        color: {
            type: String,
            default: "red"
        },
        shadow: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        },
        iconType: {
            type: String,
            default: ""
        },
        iconSize: {
            type: String,
            default: ""
        },
        iconRotate: {
            type: String,
            default: ""
        },
        iconFlip: {
            type: String,
            default: ""
        },
        iconPos: {
            type: String,
            default: "left"
        },
        iconAnimation: {
            type: String,
            default: ""
        },
        iconAnimationOnHover: {
            type: Boolean,
            default: false
        }
    },
    components: {
        ButtonContent
    },
    computed: {
        buttonClasses() {
            let baseClass = "app-button"
            let typeClass = ` app-button__${this.type}`
            let themeClass = ` app-button__${this.theme}`
            let colorClass = this.theme == 'text' ? ` app-button__text--${this.color}` : ''
            let iconClass = this.icon ? ` app-button__has-icon app-button__icon-${this.iconPos}` : ''
            let shadowClass = this.shadow ? ' app-button__has-shadow' : ''

            return `${baseClass}${typeClass}${themeClass}${colorClass}${iconClass}${shadowClass}`
        },
        labelClass() {
            let baseClass = "app-button__label"
            let iconClass = this.icon ? ` app-button__label--icon-${this.iconPos}` : ''

            return `${baseClass}${iconClass}`
        }
    },
    methods: {
        openModal(modal) {
            this.$root.$emit(modal, true)
        },
        doAnchor(anchor) {
            this.$root.$emit("Anchor", anchor)
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "~/scss/components/button.scss";
</style>