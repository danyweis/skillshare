<template>
  <div class="row">
    <div class="col-sm-6 card edit-area">
      <ccTextInput @displayTextChanged="textBoxValue1 = $event"></ccTextInput>
      <!-- {{ textBoxValue1 }} -->
      <ccTextInput @displayTextChanged="textBoxValue2 = $event"></ccTextInput>
      <!-- {{ textBoxValue2 }} -->
      <ccTextInput @displayTextChanged="textBoxValue3 = $event"></ccTextInput>
      <!-- {{ textBoxValue3 }} -->
    </div>
    <div class="col-sm-6 card card-display">
      <ccTextOutput
        :displayText="textBoxValue1"
        :containerHeight="130"
      ></ccTextOutput>
      <ccTextOutput
        :displayText="textBoxValue2"
        :containerHeight="130"
      ></ccTextOutput>
      <ccTextOutput
        :displayText="textBoxValue3"
        :containerHeight="130"
      ></ccTextOutput>
    </div>
  </div>
</template>

<script>
import TextInput from './TextInput.vue'
import TextOutput from './TextOutput.vue'

export default {
  data: function() {
    return {
      textBoxValue1: '',
      textBoxValue2: '',
      textBoxValue3: '',
    }
  },
  components: {
    ccTextInput: TextInput,
    ccTextOutput: TextOutput,
  },
}
</script>

<style>
.edit-area {
  background-color: #d2f9f9;
  padding: 20px;
  height: 800px;
}
.card-display {
  /* background-color: #d2f9f9; */
  padding: 20px;
  height: 800px;
}
</style>
