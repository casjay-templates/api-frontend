<template>
  <div v-if="msg == null || msg == 'false'">
    <h2>{{ msgSpinner }}</h2>
  </div>
  <svg viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" :stroke="color">
    <g fill="none" fill-rule="evenodd">
      <g transform="translate(1 1)" stroke-width="2">
        <circle stroke-opacity=".25" cx="18" cy="18" r="18" />
        <path d="M36 18c0-9.94-8.06-18-18-18">
          <animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="0.8s" repeatCount="indefinite" />
        </path>
      </g>
    </g>
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'show-spinner',
    props: {
      msg: { type: String, default: 'false' },
      msgSpinner: { type: String, default: '' },
      loading: { type: Boolean },
      color: {
        type: String,
        default: '#000',
      },
      height: {
        type: Number,
        default: 96,
      },
      width: {
        type: Number,
        default: 96,
      },
    },
  });
</script>
