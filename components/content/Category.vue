<template>
    <div class="not-prose">
        <SiteCategory :nav="navigation" />
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const path = '/' + (route.params.slug as string[]).join('/')
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
