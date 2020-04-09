<template>
  <button :class="`usa-button usa-button--${btnStyle}`">{{ label }}</button>
</template>

<script>
export default {
  props: {
    btnStyle: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'secondary', 'accent', 'base', 'outline', 'unstyled'].includes(val),
    },
    label: {
      type: String,
      required: true,
    },
  },
};
</script>
