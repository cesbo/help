import { LogSnag } from 'logsnag'

type FeedbackReaction = 'like' | 'dislike'

type FeedbackRequest = {
    title: string,
    href: string,
    reaction?: FeedbackReaction,
    message?: string,
    email?: string,
}

function countryFlag(countryCode: string): string {
    return countryCode
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(char.charCodeAt(0) + 127397))
        .join('')
}

function getReaction(reaction?: FeedbackReaction): [string, string] {
    switch(reaction) {
        case 'like':
            return [ '🙂', 'Like' ]
        case 'dislike':
            return [ '😡', 'Dislike' ]
        default:
            return [ '💬', 'Feedback' ]
    }
}

export default defineEventHandler(async (ev) => {
    const body = await readBody<FeedbackRequest>(ev)
    const config = useRuntimeConfig()

    const logsnag = new LogSnag({
        project: config.logsnag.project,
        token: config.logsnag.token,
    })

    let description = [ `[${ body.title }](${ body.href })` ]

    const forwardedFor = ev.node.req.headers['x-forwarded-for']
    if(forwardedFor) {
        const ip = (forwardedFor as string).split(',')[0].trim()
        const ipCountry = ev.node.req.headers['cf-ipcountry']?.toString()
        const flag = ipCountry ? countryFlag(ipCountry) : ''
        description.push(`**IP**: ${ ip } ${ flag }`)
    }

    if(body.email) {
        description.push(`**Email**: ${ body.email }`)
    }

    if(body.message) {
        const message = body.message.trim().slice(0, 1000)
        description.push(message)
    }

    const [ icon, event ] = getReaction(body.reaction)

    const ok = await logsnag.publish({
        channel: 'feedback',
        event,
        icon,
        description: description.join('\n'),
        notify: true,
        parser: 'markdown',
    })

    return {
        ok,
    }
})
