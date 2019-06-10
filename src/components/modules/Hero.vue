<template>
    <b-container
        class="module module__hero content content__middle pt-6 pb-6"
    >
        <b-row>
            <b-col class="module__wrapper">
                <b-row class="module__content mb-5 mb-md-7 mb-lg-8" align-v="center">
                    <b-col class="module__data" cols="12" md="6" lg="5" offset-lg="1">
                        <h3 class="module__subtitle mb-2 text-center text-md-left">{{ labels.subtitle }}</h3>
                        <h2 class="module__title mb-5 text-center text-md-left">{{ labels.title }}</h2>
                        <p class="module__description mb-5 text-center text-md-left">{{ labels.description }}</p>
                        <button-group
                            class="module__actions d-flex align-items-center justify-content-center justify-content-md-start flex-wrap"
                            :buttons="buttons"
                            button-class="module__action"
                        />
                    </b-col>
                    <b-col class="module__image--wrapper d-none d-md-inline-flex" cols="12" md="6">
                        <g-image :src="imagePath('hero-image.svg')" class="img-fluid"/>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col>
                        <logo-list
                            :logos="logos"
                        />
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
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
                    type: "external",
                    label: "Get in touch",
                    target: "https://forms.gle/NS1fLSukVBWzYw8K7",
                    theme: "main"
                },
                {
                    type: "external",
                    label: "Request CV",
                    target: "https://forms.gle/VPNkTfKm1wZiUntP9",
                    theme: "text",
                    color: "red"
                }
            ],
            logos: [
                {
                    name: "Send",
                    image: "logos/send.svg"
                },
                {
                    name: "WeSend",
                    image: "logos/wesend.svg"
                },
                {
                    name: "Connectas",
                    image: "logos/connectas.png"
                },
                {
                    name: "Johnson Controls",
                    image: "logos/johnson-controls.svg"
                },
                {
                    name: "Energiteca",
                    image: "logos/energiteca.png"
                },
                {
                    name: "Plan Ciudad",
                    image: "logos/plan-ciudad.svg"
                },
                {
                    name: "El País",
                    image: "logos/el-pais.svg"
                }
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "~/scss/components/modules/hero.scss";
</style>
