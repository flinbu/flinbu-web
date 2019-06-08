<template>
    <b-container
        fluid
        class="module module__home"
    >
        <b-container class="module__wrapper">
            <b-row class="module__content">
                <b-col class="module__data" cols="12" md="6">
                    <h3 class="module__subtitle">{{ $static.homeModule.subtitle }}</h3>
                    <h2 class="module__title">{{ $static.homeModule.title }}</h2>
                    <p class="module__description">{{ $static.homeModule.description }}</p>
                    <button-group
                        class="module__actions"
                        :buttons="$static.homeModule.buttons"
                        button-class="module__action"
                    />
                </b-col>
            </b-row>
        </b-container>
    </b-container>
</template>
<static-query>
 query {
     homeModule(id: "hero") {
         title
         subtitle
         description
         buttons {
            type
            label
            target
            theme
            color
            shadow
            icon
            iconType
            iconSize
            iconRotate
            iconFlip
            iconPos
            iconAnimation
            iconAnimationOnHover
         }
         image
         logos {
             name
             image
         }
     }
 }
</static-query>
