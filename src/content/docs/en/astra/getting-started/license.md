---
title: License
description: Get demo, subscription, or lifetime licenses for Astra with installation, renewal, and troubleshooting instructions
sidebar:
    order: 3
---

You need a valid license to run Astra. If this is your first time using Astra, get a free 40-day demo license to try all features.

**→ [Get your free demo license](https://app.cesbo.com/orders/software/astra/demo/)**

## License Types

Astra has three licensing options:

- **Demo** - Free 40-day trial with full features. For evaluation only, not commercial use.
- **Subscription** - Includes technical support and regular updates with new features and bug fixes.
- **Lifetime** - One-time purchase for permanent use. Works with versions released before your purchase date. You can upgrade anytime to get the latest version.

## What Happens After Getting a License

1. **Check your email** - You'll receive an email with your license file and installation instructions
2. **Install the license** - Follow the step-by-step instructions in the email to install your license file on your server
3. **Restart Astra** - Run `systemctl restart astra` to activate your new license
4. **Start using Astra** - Your license is now active and you can begin configuring your streaming setup

:::note
License emails are sent immediately. If you don't see the email, check your spam folder.
:::

## Purchase License

Ready to buy a subscription or lifetime license? Visit our website to see pricing and purchase options.

**→ [Purchase License](https://cesbo.com/astra-license)**

After purchase, you'll receive your license by email with installation instructions.

## Renew License

We'll send you renewal reminders by email:
- 7 days before your license expires
- On the day your license expires

Both emails include a direct link to renew your subscription. You can also renew anytime in your [Profile](https://cesbo.com/profile).

Your serial number stays the same after renewal, so no additional setup is needed.

:::note
After renewing your license, restart Astra to update the license information.
:::

## Upgrade License

Need to add more servers to your subscription? You can upgrade anytime in your [Profile](https://cesbo.com/profile).

**How pricing works:**

- Upgrade cost is calculated based on your remaining subscription days
- You get a discount for additional servers
- Use our pricing calculator to see exact costs before upgrading

**To downgrade:** Contact our support team for assistance.

## Transfer License

You may transfer your license and subscription to another account, please contact us in chat.

## Reset License

If you lost your license or it has been leaked, you may reset your serial number.
Open your profile on our website: [Profile](https://cesbo.com/profile) and click "Reset serial number".
You will receive a new license and installation guide by email immediately.

## Troubleshooting

### Error: "Failed to check license"

Astra checks your license on startup by connecting to one of these servers:

- `ls1.cesbo.com`
- `ls2.cesbo.com`
- `ls3.cesbo.com`

**To fix this error:**

1. Check that your server has internet access
2. Make sure these domains are not blocked by your firewall
3. Verify that outbound HTTP and HTTPS connections are allowed

### Message: "License expired!" after renewal

If you renewed your license but Astra still shows "License expired!" in the web interface, restart Astra to update the license information: Settings → Restart.
