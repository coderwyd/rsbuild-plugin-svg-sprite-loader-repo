<template>
  <i class="c-icon" :style="getStyle" :class="getKls">
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </i>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    /**
     * @description SVG icon size, size x size
     *
     * 也可以直接使用font-size来控制图标大小
     */
    size: {
      type: [Number, String],
    },
    /**
     * @description SVG icon disabled
     */
    disabled: Boolean,
    name: String,
  },
  computed: {
    symbolId() {
      return `#icon-${this.name}`
    },
    getKls({ disabled }) {
      return [disabled ? 'text-gray-6 cursor-not-allowed' : '']
    },
    getStyle() {
      const { size } = this
      if (!size) return {}
      const s = `${size}`
      return {
        fontSize: size === undefined ? undefined : `${s.replace('px', '')}px`,
      }
    },
  },
}
</script>

<style>
.c-icon {
  position: relative;
  display: inline-flex;
  width: 1em;
  height: 1em;
  line-height: 1em;
  justify-content: center;
  align-items: center;
  fill: currentcolor;
  vertical-align: -0.125em;

  svg {
    width: 1em;
    height: 1em;
  }
}
</style>
