<template>
  <div :class="`usa-alert usa-alert--${type}`">
    <div class="usa-alert__body">
      <p class="usa-alert__text">
        {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'info',
      validator: (val) => ['info', 'success', 'warning', 'error'].includes(val),
    },
    message: {
      type: String,
      required: true,
    },
  },
};
</script>
