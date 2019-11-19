<template>
  <div class="parent">
    <h1 class="title">Feedback</h1>
    <p class="subtitle">
      If you have any comments for the Shuttle Tracker team please enter them below.  
    </p>
    <div class="field">
      <textarea class="textarea" placeholder="e.g. I love shuttletracker!">
      </textarea>
    </div>
    <div class="field">
      <button class="button is-danger is-rounded">Submit</button>
    </div>  
  </div>
</template>
<script lang="ts">
// This component is the about window that is displayed when the `about` button on the menu is selected

import Vue from 'vue';
export default Vue.extend({});
</script>

<style lang="scss" scoped>
.parent {
  padding: 20px;
}
.caption {
  margin-bottom: 1em;
}
</style>