import BootstrapVue from 'bootstrap-vue'

import '~/scss/app.scss'

import DefaultLayout from '~/layouts/Default.vue'
import SocialMenu from "~/components/SocialMenu"
import Header from "~/components/Header"
import Icon from "~/components/Icon"
import AppButton from "~/components/AppButton"
import ButtonGroup from "~/components/ButtonGroup"

import Brand from "~/assets/images/logo.svg"
import BrandLight from "~/assets/images/logo-light.svg"
import BrandDark from "~/assets/images/logo-dark.svg"

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)

  Vue.component('Layout', DefaultLayout)
  Vue.component('SocialMenu', SocialMenu)
  Vue.component('AppHeader', Header)
  Vue.component('Icon', Icon)
  Vue.component('AppButton', AppButton)
  Vue.component('ButtonGroup', ButtonGroup)

  Vue.component('Brand', Brand)
  Vue.component('BrandLight', BrandLight)
  Vue.component('BrandDark', BrandDark)

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Montserrat:300,400,500,700,800&display=swap"
  })
}
