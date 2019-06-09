<template>
    <b-container
        fluid
        class="module module__hero content content__middle"
    >
        <b-container class="module__wrapper">
            <b-row class="module__content" align-v="center">
                <b-col class="module__data" cols="12" md="6" lg="5" offset-lg="1">
                    <h3 class="module__subtitle mb-2">{{ labels.subtitle }}</h3>
                    <h2 class="module__title mb-5">{{ labels.title }}</h2>
                    <p class="module__description">{{ labels.description }}</p>
                    <button-group
                        class="module__actions"
                        :buttons="buttons"
                        button-class="module__action"
                    />
                </b-col>
                <b-col class="module__image--wrapper" cols="12" md="6">
                    <hero-image/>
                </b-col>
            </b-row>
            <b-row align-h="center">
                <logo-list
                    :logos="logos"
                />
            </b-row>
        </b-container>
    </b-container>
</template>
<script>
export default {
    data() {
        return {
            labels: {
                title: "Digital products designer",
                subtitle: "Let's create. Innovate. Together.",
                description: "My name is Felipe Linares. I'm a designer with over 8 years of experience. I work with you to design effective interfaces and user experiences based in \"personas\", in order to innovate and grow better."
            },
            buttons: [
                {
                    type: "anchor",
                    label: "Get in touch",
                    target: "contact",
                    theme: "main"
                },
                {
                    type: "modal",
                    label: "Request CV",
                    target: "request-cv",
                    theme: "text",
                    color: "red"
                }
            ],
            logos: [
                {
                    name: "Send",
                    image: "~/assets/images/logos/send.svg"
                },
                {
                    name: "WeSend",
                    image: "~/assets/images/logos/wesend.svg"
                },
                {
                    name: "Connectas",
                    image: "~/assets/images/logos/connectas.png"
                },
                {
                    name: "Johnson Controls",
                    image: "~/assets/images/logos/johnson-controls.svg"
                },
                {
                    name: "Energiteca",
                    image: "~/assets/images/logos/energiteca.png"
                },
                {
                    name: "Plan Ciudad",
                    image: "~/assets/images/logos/plan-ciudad.svg"
                },
                {
                    name: "El País",
                    image: "~/assets/images/logos/el-pais.svg"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "~/scss/components/modules/hero.scss";
</style>
