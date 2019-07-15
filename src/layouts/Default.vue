<template>
  <main class="app">
    <app-header/>
    <slot/>
    <app-footer/>
  </main>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
