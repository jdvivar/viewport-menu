<template>
  <div>
    <div class="toolbar-item">
      <label>Size</label>
      <span class="input-group-width">
        <input class="width-number" type="number" min="0" :max="max" step="1" v-model="width">
        <span class="input-unit">px</span>
      </span>
    </div>
    <div class="toolbar-item">
      <label>Scale</label>
      <input class="scale" type="number" min="0" max="3" step="0.1" v-model="scale">
    </div>
    <div class="toolbar-item">
      <label>Presets</label>
      <button
        class="preset"
        :key="preset.text"
        v-for="preset in presets"
        @click="setViewport(preset.size, preset.scale)"
      >{{ preset.text }}</button>
    </div>

    <input
      class="width-range"
      type="range"
      id="width-range"
      min="0"
      :max="max"
      step="1"
      v-model="width"
      :style="{ width: `${max}px` }"
    >
    <div
      class="container"
      :style="{ width: `${width}px`, transformOrigin: 'top left', transform: `scale(${ scale })`}"
    >
      <h1>hola</h1>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      width: 200,
      max: 1280,
      scale: 1,
      presets: [
        { text: "iPhone 4/5/SE", size: 320, scale: 1 },
        { text: "iPhone 6/7/8", size: 375, scale: 1 },
        { text: "iPad", size: 768, scale: 1 },
        { text: "Desktop (scaled)", size: 1280, scale: 0.5 }
      ]
    };
  },
  mounted: function() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy: function() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize(event) {
      this.max = this.$el.clientWidth;
    },
    setViewport(width, scale) {
      this.width = width;
      this.scale = scale;
    }
  }
};
</script>

<style>
body {
  font-family: Helvetica;
}

#app {
  margin: 10px;
}

.toolbar-item {
  display: inline-block;
}

label {
  display: block;
}

.input-group-width {
  position: relative;
}

.container {
  background: green;
  height: 100px;
  margin-top: 5px;
}

.input-unit {
  font-size: 12px;
  position: absolute;
  left: 45px;
  top: 3px;
}

button.preset {
  padding: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  margin-right: 10px;
  transition: all 0.5s ease;
  outline: none;
}

button.preset:hover,
button.preset:focus {
  border-color: blue;
}

input[type="number"] {
  font-size: 12px;
  width: 60px;
  padding: 10px 0 10px 10px;
  border: 1px solid #ddd;
  margin-right: 10px;
}

input[type="range"].width-range {
  -webkit-appearance: none;
  margin: 8px 0;
}
input[type="range"].width-range:focus {
  outline: none;
}
input[type="range"].width-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 1px;
  cursor: pointer;
  background: #ddd;
  border-radius: 0px;
}
input[type="range"].width-range::-webkit-slider-thumb {
  cursor: pointer;
  -webkit-appearance: none;
  border: 1px solid #333;
  margin-top: -8px;
  width: 1px;
  height: 15px;
}
</style>
