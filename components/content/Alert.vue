<template>
<div
    class="
        bg-red-100
        border
        border-red-400
        text-red-700
        px-4 py-3
        rounded
        relative

        prose-a:text-red-700
        hover:prose-a:text-red-800
        prose-a:font-normal
        prose-a:!underline

        prose-strong:text-red-700
        prose-em:text-red-700
    "
>
    <ContentSlot :use="$slots.default" unwrap="p" />
</div>
</template>
