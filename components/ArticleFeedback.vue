<template>
<div>
    <form
        v-if="step != 2"
        class="text-base space-y-5"
    >
        <div class="text-gray-400 text-center">Was this page helpful?</div>
        <fieldset
            :disabled="step > 0 || variant !== ''"
            class="
                flex
                justify-center
                gap-x-5
                disabled:pointer-events-none
            "
        >
            <button
                class="
                    flex
                    items-center
                    gap-x-1
                    text-green-400
                    cursor-pointer
                    hover:text-green-500
                "
                :class="{
                    'opacity-30': variant != '' && variant != 'like'
                }"
                @click="variant = 'like' ; send()"
            >
                <FaceSmileIcon class="w-10 h-10" />
                <span>Yes</span>
            </button>
            <button
                class="
                    flex
                    items-center
                    gap-x-1
                    text-brand
                    cursor-pointer
                    hover:text-sky-600
                "
                :class="{
                    'opacity-30': variant != '' && variant != 'message'
                }"
                @click="variant = 'message'"
            >
                <ChatBubbleOvalLeftEllipsisIcon class="w-10 h-10" />
                <span>Comment</span>
            </button>
            <button
                class="
                    flex
                    items-center
                    gap-x-1
                    text-red-400
                    cursor-pointer
                    hover:text-red-500
                "
                :class="{
                    'opacity-30': variant != '' && variant != 'dislike'
                }"
                @click="variant = 'dislike'"
            >
                <FaceFrownIcon class="w-10 h-10" />
                <span>No</span>
            </button>
        </fieldset>

        <fieldset
            v-if="variant == 'message' || variant == 'dislike'"
            :disabled="step > 0"
            class="
                flex flex-col items-center
                gap-y-2
                w-full
                sm:w-1/2
                mx-auto
                disabled:pointer-events-none
            "
        >
            <textarea
                class="
                    border-0
                    ring-1 ring-inset ring-gray-300
                    focus:ring-inset focus:ring-brand
                    rounded
                    resize-none
                    w-full
                "
                rows="3"
                maxlength="1000"
                autofocus
                placeholder="How could we make this page better?"
                v-model="message"
            ></textarea>

            <input
                class="
                    border-0
                    ring-1 ring-inset ring-gray-300
                    focus:ring-inset focus:ring-brand
                    rounded
                    w-full
                "
                type="email"
                placeholder="Email if you want our response"
                v-model="email"
            />

            <div class="flex gap-x-2">
                <button
                    class="
                        cursor-pointer
                        px-4
                        py-1
                        border-0
                        rounded
                        bg-brand
                        hover:bg-sky-600
                        text-white
                    "
                    @click="send()"
                >Submit</button>
                <button
                    class="
                        cursor-pointer
                        px-4
                        py-1
                        border-0
                        rounded
                        ring-1 ring-inset ring-gray-300
                        hover:bg-gray-100
                    "
                    @click="() => { variant = '' ; step = 0 }"
                >Cancel</button>
            </div>
        </fieldset>
    </form>

    <div
        v-else
        class="text-base text-center"
    >
        <p>Thank you for your feedback!</p>
    </div>
</div>
</template>

<script setup lang="ts">
import {
    FaceSmileIcon,
    FaceFrownIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps<{
    title: string
    href: string
}>()

const variant = ref('')
const message = ref('')
const email = ref('')
const step = ref(0)

async function send() {
    step.value = 1

    const { data } = await useFetch('/api/feedback', {
        method: 'POST',
        body: {
            title: props.title,
            href: props.href,
            reaction: variant.value,
            message: message.value,
            email: email.value,
        },
    })

    if(data.value && data.value.ok === true) {
        step.value = 2
    } else {
        variant.value = ''
        step.value = 0
    }
}
</script>
