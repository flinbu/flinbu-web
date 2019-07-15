<template>
    <layout>
        <transition name="fade" appear>
            <b-container class="module module__store py-6">
                <b-row>
                    <b-col cols="12" class="module__wrapper">
                        <div class="module__content mb-5">
                            <b-col class="module__data text-center" cols="12" md="6" lg="4" offset-md="3" offset-lg="4">
                                <h1 class="module__title" v-html="labels.title" />
                                <h3 class="module__subtitle text-gray-light font-weight-light mb-5" v-html="labels.subtitle" />
                            </b-col>
                        </div>
                    </b-col>
                    <b-col cols="12" class="module__wrapper portfolio__wrapper">
                        <b-row align-v="stretch">
                            <b-col
                                v-for="(item, index) in $static.posts.edges"
                                :key="index"
                                class="portfolio__item--wrapper"
                                cols="12" 
                                md="6" 
                                lg="4" 
                                :xl="cols"
                            >
                                <b-card
                                    class="portfolio__item h-100"
                                    :title="item.node.name"
                                    :img-src="item.node.thumbnail[0].url"
                                    @click="visitItem(item.node.url)"
                                />
                            </b-col>
                        </b-row>
                    </b-col>
                </b-row>
            </b-container>
        </transition>
    </layout>
</template>
<static-query>
    query Gig {
        posts: allGig {
            edges {
                node {
                    name
                    url
                    thumbnail {
                        id
                        url
                        filename
                        thumbnails {
                            small {
                                url
                                width
                                height
                            }
                            large {
                                url
                                width
                                height
                            }
                            full {
                                url
                                width
                                height
                            }
                        }
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
            labels: {
                title: "Store",
                subtitle: "There are some stuff for sale, including some Fiverr services!"
            }
        }
    },
    methods: {
        visitItem(url) {
            window.open(url, "_blank")
        }
    }
}
</script>
