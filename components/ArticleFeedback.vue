<template>
<div class="text-base space-y-5">
    <div class="text-gray-400 text-center">Was this page helpful?</div>
    <form><fieldset
        :disabled="variant !== ''"
        class="
            disabled:pointer-events-none
        "
    >
        <div
            class="
                flex
                justify-center
                gap-x-5
            "
            v-if="!showMessageFeedback"
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
                @click="sendReaction('like')"
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
                @click="showMessageFeedback = true"
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
                @click="sendReaction('dislike')"
            >
                <FaceFrownIcon class="w-10 h-10" />
                <span>No</span>
            </button>
        </div>
        <div
            v-else
            class="flex flex-col items-center gap-y-2 w-full sm:w-1/2 mx-auto"
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
                    @click="sendMessage()"
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
                    @click="showMessageFeedback = false"
                >Cancel</button>
            </div>
        </div>
    </fieldset></form>

    <div
        v-if="variant != '' && variant != 'all'"
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

const variant = ref('')
const showMessageFeedback = ref(false)
const message = ref('')
const email = ref('')

async function send(body: any) {
    variant.value = 'all'
    const route = useRoute()

    const { data } = await useFetch('/api/feedback', {
        method: 'POST',
        body: {
            path: route.path,
            ...body,
        },
    })

    if(data.value && data.value.ok === true) {
        showMessageFeedback.value = false
        variant.value = body.reaction || 'message'
    } else {
        variant.value = ''
    }
}

async function sendReaction(reaction: 'like' | 'dislike') {
    await send({ reaction })
}

async function sendMessage() {
    await send({ message: message.value, email: email.value })
}
</script>
