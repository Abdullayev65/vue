<template>

    <div class="container" style="padding: 30px; margin: 50px;">

      <div class="container">
        <label class="filled">
          <input type="text" value="" required>
          <span data-label="Filled"></span>
        </label>

      </div>

    </div>




</template>

<script>

export default {
  data() {
    return {
      counter: 1
    }
  },
  methods: {
    onIncrement() {
      this.counter++
    },
    onDecrement() {
      this.counter--
    }
  },
}
</script>

<style>

:root{
  --bg: #f5f5f5;
  --height: 56px;
  --bg-hover1: rgba(0,0,0,0.08);
  --bbc: rgba(0,0,0,.42);
  --opaq1: .08;
  --padding: 20px 16px 6px;
  --fz: 18px;
}

label{
  position: relative;
  > span{
    &::after,
    &::before{
      position: absolute;
      transition: 200ms ease-in-out;
    }
    &::before{
      content: attr(data-label);
      left: 16px;
      top: 0;
      bottom: 0;
      margin: auto;
      pointer-events: none;
      height: var(--fz);
      font-size: var(--fz);
      color: gray;
      line-height: 1;
    }
  }
  > input{
    &:focus,
    &:valid{
      ~ span{
        &::before{
          font-size: 12px;
          color: blueviolet;
        }
      }
    }
  }
}

input{
  width: 100%;
  border: 0;
  height: var(--height);
  padding: var(--padding);
  font-size: 16px;
  &:focus,
  &:active{
    outline: 0;
    border: 0;
  }
}

.filled{
  border-bottom: 1px solid var(--bbc);
  > input{
    background-color: var(--bg);
    border-radius: 4px 4px 0 0;
    &:hover{
      background-color: var(--bg-hover1);
    }
    &:focus,
    &:valid{
      ~ span{
        &::before{
          transform: translateY(-12px);
          font-size: 12px;
          color: blueviolet;
        }
        &::after{
          width: 100%;
        }
      }
    }
  }
  > span{
    &::after{
      content: '';
      width: 0;
      height: 1px;
      background-color: blueviolet;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      transition: 300ms;
    }
  }
}






.container{
  margin: auto;
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em;
  width: 100%;
  max-width: 600px;
}



</style>