<template>
  <canvas ref="canvasEl" width="800" height="500" />
</template>

<script>
function quantityExponent(val) {
    return Math.floor(Math.log(val) / Math.LN10);
}
/**
 * find a “nice” number approximately equal to x. Round the number if round = true,
 * take ceiling if round = false. The primary observation is that the “nicest”
 * numbers in decimal are 1, 2, and 5, and all power-of-ten multiples of these numbers.
 *
 * See "Nice Numbers for Graph Labels" of Graphic Gems.
 *
 * @param  {number} val Non-negative value.
 * @param  {boolean} round
 * @return {number}
 */
const calcStep = (val, round) => {
  var exponent = quantityExponent(val);
  var exp10 = Math.pow(10, exponent);
  var f = val / exp10; // 1 <= f < 10
  var nf;
  if (round) {
      if (f < 1.5) {
          nf = 1;
      }
      else if (f < 2.5) {
          nf = 2;
      }
      else if (f < 4) {
          nf = 3;
      }
      else if (f < 7) {
          nf = 5;
      }
      else {
          nf = 10;
      }
  }
  else {
      if (f < 1) {
          nf = 1;
      }
      else if (f < 2) {
          nf = 2;
      }
      else if (f < 3) {
          nf = 3;
      }
      else if (f < 5) {
          nf = 5;
      }
      else {
          nf = 10;
      }
  }
  val = nf * exp10;
 
    // Fix 3 * 0.1 === 0.30000000000000004 issue (see IEEE 754).
    // 20 is the uppper bound of toFixed.
  const nice = exponent >= -20 ? +val.toFixed(exponent < 0 ? -exponent : 0) : val;
  return nice;
}
const padding = 30;

export default {
  props: {
    chartOptions: Object,
  },
  mounted() {
    this.draw();
  },
  watch: {
    chartOptions: {
      handler: function (nevValue, oldValue) {
        console.log(1111);
        console.log(nevValue, oldValue);
        this.draw();
      },
      deep: true
    }
  },
  methods: {
    draw() {
      const canvasEl = this.$refs['canvasEl'];
      const canvasRect = canvasEl.getBoundingClientRect();
      const ctx = canvasEl.getContext('2d');
      ctx.clearRect(0, 0, canvasRect.width, canvasRect.height);

      // 坐标系
      const coordinateSystem = {
        // 起点
        start: { x: padding, y: canvasRect.height - padding * 1 },
        // 宽度
        width: canvasRect.width - padding * 2,
        // 高度
        height: canvasRect.height - padding * 2
      }

      this.drawLine(ctx, coordinateSystem);
      this.drawBars(ctx, coordinateSystem);
    },
    drawLine(ctx, coordinateSystem) {
      // x 轴
      ctx.moveTo(coordinateSystem.start.x, coordinateSystem.start.y);
      ctx.lineTo(coordinateSystem.start.x, coordinateSystem.start.y - coordinateSystem.height);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';
      ctx.stroke();

      // y 轴
      ctx.moveTo(coordinateSystem.start.x, coordinateSystem.start.y);
      ctx.lineTo(coordinateSystem.start.x + coordinateSystem.width, coordinateSystem.start.y);
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000';
      ctx.stroke();
      ctx.save();
    },
    drawBars(ctx, coordinateSystem) {
      const count = this.chartOptions.series[0].data.length;
      // 圆柱两侧空白宽度
      const itemPadding = 10;
      const itemWidth = coordinateSystem.width / count;
      const max = Math.max.apply(null, this.chartOptions.series[0].data);
      const step = calcStep(max / count, false);
      const stepCount = Math.round(max / step);
      ctx.font = '14px Arial';
      ctx.textAlign = 'center';

      for (let i = 0; i < count; i++) {
        const height = coordinateSystem.height * this.chartOptions.series[0].data[i] / (stepCount * step);
        ctx.fillStyle = 'rgb(187, 44, 40)';
        ctx.fillRect(coordinateSystem.start.x + i * itemWidth + itemPadding, coordinateSystem.start.y - height, itemWidth - itemPadding * 2, height);

        ctx.fillStyle = '#000';
        ctx.fillText(this.chartOptions.xAxis.data[i], coordinateSystem.start.x + i * itemWidth + itemWidth / 2, coordinateSystem.start.y + 20);
      }

      const stepHeight = coordinateSystem.height / stepCount;
      ctx.fillStyle = '#000';
      ctx.textBaseline = 'middle';
      for (let i = 0; i < stepCount + 1; i++) {
        ctx.fillText(step * i, coordinateSystem.start.x - 10, coordinateSystem.start.y - stepHeight * i);
        ctx.textAlign = 'right';
        ctx.fillText('-', coordinateSystem.start.x, coordinateSystem.start.y - stepHeight * i);
      }
    }
  }
}
</script>