<script setup lang="ts">
const { locale } = useI18n()

const { data } = await useAsyncData('sidebar-contents', () => fetchContentNavigation({
    where: [
        {
            _locale: locale.value,
        },
    ],
}))

console.log(data.value)

</script>
<template>
    <aside>
        abcde
        <pre>{{ data }}</pre>
        <div v-if="data">
            <ul>
                <li v-for="item in data" :key="item.path">{{ JSON.stringify(item) }}</li>
            </ul>
        </div>
    </aside>
</template>