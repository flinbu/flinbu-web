<template>
    <span class="app-button__content">
        <icon
            v-if="icon"
            class="app-button__icon"
            :name="icon"
            :type="iconType"
            :size="iconSize"
            :rotate="iconRotate"
            :flip="iconFlip"
            :animation="iconAnimation"
            :animation-on-hover="iconAnimationOnHover"
        />

        <span 
            v-if="label"
            :class="labelClass"
            v-html="label"
        />
    </span>
</template>
<script>
export default {
    props: {
        label: {
            type: String,
            default: ""
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
    computed: {
        labelClass() {
            let baseClass = "app-button__label"
            let iconClass = this.icon ? ` app-button__label--icon-${this.iconPos}` : ''

            return `${baseClass}${iconClass}`
        }
    }
}
</script>
