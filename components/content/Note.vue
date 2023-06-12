<template>
<div
    class="
        bg-sky-100
        border
        border-sky-400
        text-sky-700
        px-4 py-3
        rounded
        relative

        prose-a:text-sky-700
        hover:prose-a:text-sky-800
        prose-a:font-normal
        prose-a:!underline

        prose-strong:text-sky-700
        prose-em:text-sky-700
    "
>
    <ContentSlot :use="$slots.default" unwrap="p" />
</div>
</template>
