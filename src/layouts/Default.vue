<template>
  <main class="app">
    <app-header/>
    <slot/>
  </main>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
