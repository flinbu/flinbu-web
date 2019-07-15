<template>
    <Layout>
        <transition name="fade" appear>  
            <b-container class="mmodule module__portfolio py-6">
                <b-row>
                    <b-col cols="12" class="module__wrapper">
                        <div class="module__content mb-5">
                            <b-col class="module__data text-center" cols="12" md="6" lg="4" offset-md="3" offset-lg="4">
                                <h1 class="module__title" v-html="labels.title" />
                                <h3 class="module__subtitle text-gray-light font-weight-light mb-5" v-html="subtitle" />
                            </b-col>
                        </div>
                    </b-col>
                    <b-col cols="12" class="module__wrapper portfolio__wrapper">
                        <b-row align-v="stretch">
                            <b-col
                                v-for="item in $static.posts.edges"
                                :key="item.node.id"
                                class="portfolio__item--wrapper"
                                cols="12" 
                                md="6" 
                                lg="4" 
                                :xl="cols"
                            >
                                <b-card
                                    class="portfolio__item h-100"
                                    :title="item.node.name"
                                    :img-src="item.node.covers.max_808"
                                    @click="visitItem(item.node.url)"
                                >
                                    <b-card-text>
                                        <ul class="portfolio__item--fields">
                                            <li v-for="(field, index) in item.node.terms" :key="index">{{ field.title }}</li>
                                        </ul>
                                    </b-card-text>
                                </b-card>
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </transition>
    </Layout>
</template>
<static-query>
query Portfolio {
    posts: allPortfolio(order: ASC) {
        edges {
            node {
                id
                name
                url
                covers {
                    original
                    max_808
                }
                terms {
                    title
                }
            }
        }
    }
}
</static-query>
<script>
export default {
    data() {
        return {
            behanceUrl: "https://behance.net/flinbu",
            labels: {
                title: "Portfolio",
                seeProject: "Visit"
            }
        }
    },
    computed: {
        subtitle() {
            return `Data grabbed from <a href="${this.behanceUrl}" target="_blank">Behance</a>`
        },
        cols() {
            const gridCols = 3
            return 12 / gridCols
        }
    },
    methods: {
        visitItem(url) {
            window.open(url, "_blank")
        }
    }
}
</script>
