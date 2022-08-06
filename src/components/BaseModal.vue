<template>
  <div class="overlay hidden"></div>
  <div class="modal hidden">
    <h2 class="heading--secondary">Good job!</h2>
    <ul class="modal__list">
      <li class="modal__item modal__item--typing">
        <h3 class="modal__item-head">Typing speed:</h3>
        <p class="modal__item-stat">
          <span>41.8</span> wpm
        </p>
      </li>
      <li class="modal__item modal__item--accuracy">
        <h3 class="modal__item-head">Accuracy:</h3>
        <p class="modal__item-stat">
          <span>94.8</span>%
        </p>
      </li>
    </ul>
    <button class="btn modal__btn">Restart</button>
  </div>
</template>

<script>
export default {
  
}
</script>