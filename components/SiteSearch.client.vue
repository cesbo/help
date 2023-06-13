<template>
<Combobox
    as="div"
    @update:modelValue="onSelect"
    class="
        bg-white
        shadow-none
        focus-within:shadow-lg
        ring-1 ring-gray-300
        rounded
        overflow-hidden
    "
>
    <div class="relative">
        <MagnifyingGlassIcon
            class="
                pointer-events-none
                absolute
                left-4
                top-4
                h-6
                w-6
                text-gray-400
            "
            aria-hidden="true"
        />
        <ComboboxInput
            id="searchInput"
            class="
                w-full
                border-0
                bg-transparent
                pl-12
                pr-12
                py-4
                text-gray-900
                placeholder:text-gray-400
                focus:ring-0
                peer
            "
            placeholder="Search our knowledge base..."
            @change="onSearch($event.target.value)"
        />
        <button
            class="
                absolute
                right-2
                top-2
                p-2
                text-gray-400
                hover:text-gray-600
                lg:hidden
                peer-placeholder-shown:hidden
            "
            @click="onSearch('')"
        ><XMarkIcon class="w-6 h-6" /></button>
    </div>

    <div v-if="groups === null">
    </div>

    <div
        v-else-if="groups.length == 0"
        class="
            text-center
            px-2
            py-10
        "
    >
        <OnClickOutside @trigger="onSearch('')">
            <p class="text-sm text-gray-900">We couldn't find any articles with that request.</p>
        </OnClickOutside>
    </div><!-- not found -->

    <div v-else class="ring-1 ring-gray-300">
        <OnClickOutside @trigger="onSearch('')">
            <ComboboxOptions
                static
                class="
                    max-h-96
                    scroll-pb-2
                    scroll-pt-11
                    overflow-y-auto
                    divide-y
                    scroll-py-2
                "
            >
                <li
                    v-for="group in groups"
                    :key="group.title"
                    class="py-2"
                >
                    <div
                        v-if="group.title === '---'"
                    />
                    <h2
                        v-else
                        class="
                            mb-2 mt-4
                            px-4
                            text-xs
                            font-semibold
                            text-gray-400
                        "
                    >{{ group.title }}</h2>
                    <ul class="text-gray-900">
                        <ComboboxOption
                            v-for="item in group.result"
                            :key="item.objectID"
                            :value="item"
                            as="template"
                            v-slot="{ active }"
                        >
                            <li
                                class="
                                    cursor-pointer
                                    select-none
                                    px-4 py-2
                                "
                                :class="{ 'bg-sky-100': active }"
                            >
                                <div
                                    class="
                                        flex
                                        items-center
                                        gap-x-2
                                    "
                                >
                                    <DocumentMagnifyingGlassIcon
                                        class="
                                            h-5
                                            w-5
                                            text-gray-400
                                        "
                                    />
                                    <p
                                        class="
                                            grow
                                            leading-6
                                            truncate
                                        "
                                    >{{ item.title }}</p>
                                </div>
                            </li>
                        </ComboboxOption>
                    </ul>
                </li>
            </ComboboxOptions>

            <div
                class="
                    hidden
                    md:flex
                    flex-wrap
                    bg-gray-50
                    px-4
                    py-3
                    text-xs
                    text-gray-700
                    gap-x-4
                    ring-1 ring-gray-300
                "
            >
                <div class="flex gap-x-1 items-center">
                    <Hotkey>&ShortDownArrow;</Hotkey>
                    <Hotkey>&ShortUpArrow;</Hotkey>
                    <span>to navigate</span>
                </div>
                <div class="flex gap-x-1 items-center">
                    <Hotkey>Enter</Hotkey>
                    <span>to select</span>
                </div>
                <div class="flex gap-x-1 items-center">
                    <Hotkey>Esc</Hotkey>
                    <span>to cancel</span>
                </div>
            </div>
        </OnClickOutside>
    </div><!-- search results -->
</Combobox>
</template>

<script setup lang="ts">
import {
    Combobox,
    ComboboxInput,
    ComboboxOption,
    ComboboxOptions,
} from '@headlessui/vue'

import {
    OnClickOutside,
} from '@vueuse/components'

import {
    MagnifyingGlassIcon,
    XMarkIcon,
} from '@heroicons/vue/20/solid'

import {
    DocumentMagnifyingGlassIcon,
} from '@heroicons/vue/24/outline'

const { search, result } = useAlgoliaSearch()

const groups = computed(() => {
    if(result.value === null) {
        return null
    }

    const mapGroups: { [key: string]: typeof result.value } = {}
    for(const item of result.value) {
        const category = item.category || '---'
        if(!(category in mapGroups)) {
            mapGroups[category] = []
        }
        mapGroups[category].push(item)
    }

    return Object
        .entries(mapGroups)
        .map(x => ({ title: x[0], result: x[1] }))
        .sort((a, b) => {
            if(a.title == '---') return 1
            if(b.title == '---') return -1
            return b.result.length - a.result.length
        })
})

const searchValue = ref('')

function onSearch(value: string) {
    searchValue.value = value
    search(value)
}

function onSelect(item: any) {
    if(item.objectID) {
        navigateTo(item.objectID)
    }

    onSearch('')
    nextTick(() => {
        document.getElementById('searchInput')?.blur()
    })
}

function onKeyDown(event: KeyboardEvent) {
    if(event.key === 'Escape') {
        if(searchValue.value != '') {
            onSearch('')
        } else {
            document.getElementById('searchInput')?.blur()
        }
    }

    else if(event.key === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault()
        document.getElementById('searchInput')?.focus()
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeyDown)
})
</script>
