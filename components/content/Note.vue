<template>
<div
    class="
        ring-2 ring-inset ring-brand
        px-4 py-3
        rounded
        relative
    "
>
    <ContentSlot :use="$slots.default" unwrap="p" />
</div>
</template>
