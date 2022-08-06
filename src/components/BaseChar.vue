<template>
  <span
    :class="{ 
      'current--default': idx === currentPosition,
      'current--error': idx === currentPosition && typedLetter && typedLetter !== char,
      'passed': idx < currentPosition 
    }"
  >
    {{ char }}
  </span>
</template>

<script>
export default {
  props: ['char', 'idx', 'typedLetter', 'currentPosition'],
}
</script>