<template>
  <div class="grid-container">
    <h1>USWDS Starter Template</h1>
    <p>
      Use <a href="https://designsystem.digital.gov/utilities/layout-grid/" target="_blank">grid-col class system</a> to
      build responsive layout.
    </p>
    <div class="grid-row margin-bottom-2">
      <div class="tablet:grid-col">
        <Button label="Default" />
      </div>
      <div class="tablet:grid-col">
        <Button label="Secondary" btnStyle="secondary" />
      </div>
      <div class="tablet:grid-col">
        <Button label="Outline" btnStyle="outline" />
      </div>
    </div>
    <div class="grid-row margin-bottom-2">
      <div class="tablet:grid-col padding-1">
        <Alert type="success" message="Success Alert" />
      </div>
      <div class="tablet:grid-col padding-1">
        <Alert type="error" message="Error Alert" />
      </div>
    </div>
    <div class="uswds-examples">
      This div is using a combination of USWDS functions and mixins.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Alert from '@/components/Alert.vue';
import Button from '@/components/Button.vue';

export default {
  name: 'Home',
  components: {
    Alert,
    Button,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
/*
  NOTE: Since we using "prependData" in vue.config.js to always include the USWDS required.scss module,
  we can now use USWDS functions and mixins in any style tag of our vue components
*/
.uswds-examples {
  // Mixin examples
  @include u-shadow(2); // https://designsystem.digital.gov/design-tokens/shadow/
  @include u-font-size('ui', 6); // https://designsystem.digital.gov/design-tokens/typesetting/font-size
  @include u-text('bold'); // https://designsystem.digital.gov/design-tokens/typesetting/font-weight/
  // Function examples
  padding: units(2); // https://designsystem.digital.gov/design-tokens/spacing-units/
  margin: units(2);
  color: color('indigo-70'); // https://designsystem.digital.gov/design-tokens/color/overview/
}
</style>
