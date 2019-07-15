<template>
    <header class="header__main header__fixed">   
        <b-container class="d-flex align-items-center">
            <g-link 
                to="/"
                class="header__brand--wrapper d-inline-flex align-items-center"
            >
                <g-image
                    src="~/assets/images/logo.svg"
                    class="header__brand--logo mr-0 mr-md-2"
                />
                <h1 class="header__brand--name mr-2 d-none d-md-block">{{ $static.metaData.siteName }}</h1>
                <p class="header__brand--description mt-1 d-none d-md-block">{{ $static.metaData.siteDescription }}</p>
            </g-link>
            <social-menu class="header__social ml-auto"/>
        </b-container>
    </header>
</template>
<static-query>
    query {
        metaData {
            siteName,
            siteDescription
        }
    }
</static-query>
