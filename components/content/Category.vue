<template>
    <div class="not-prose">
        <SiteCategory :nav="navigation" />
    </div>
</template>

<script setup lang="ts">
const path = inject<string>('content-path')
const { locale } = useI18n()

let data = await fetchContentNavigation({
    where: [
        {
            _path: {
                $contains: path,
            },
            _locale: locale.value
        },
    ],
    sort: [
        { date: -1 },
    ],
})

let navigation = data[0]

while(navigation.children && navigation._path !== path && navigation.children) {
    navigation = navigation.children[0]
}
</script>
