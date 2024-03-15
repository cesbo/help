<template>
    <div class="not-prose">
        <SiteCategory :nav="navigation" />
    </div>
</template>

<script setup lang="ts">
import { delocalizePath } from '../utils/UrlHelper';

const route = useRoute()
const { locale } = useI18n()
const delocalizedPath = delocalizePath(route.path, locale.value)

let { data } = await useAsyncData('siteCategory', () => fetchContentNavigation({
    where: [
        {
            _path: {
                $contains: delocalizedPath,
            },
            _locale: locale.value
        },
    ],
    sort: [
        { date: -1 },
    ],
}))
let navigation = data.value!![0]
while (navigation.children && navigation._path !== delocalizedPath && navigation.children) {
    navigation = navigation.children[0]
}
</script>
