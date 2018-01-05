<template>
    <div class="user-profile">
       User: {{ $route.params.id}}
    </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
