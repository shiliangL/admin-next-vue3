<template>
    <div>
        AppTabs
        <Headers></Headers>
        <Body></Body>
    </div>
</template>

<script setup>
import { useSlots, h } from "vue";

const slots = useSlots();
const props = defineProps(['modelValue','type'])

const Body = () => {
  return h("div",
    {
      class: { tab_body: true, "border-card": props.type === "border-card" },
    },
    {
      default: () => [slots.default ? slots.default(): '什么鬼东西'],
    }
  );
};

const Headers = () => {
  return h('div', {
    value: props.modelValue,
    type: props.type,
    // onUpdateValue: getUpdateValue,
  },'Headers-Headers');
};
</script>

<style lang="scss" scoped>

</style>