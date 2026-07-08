# Social Battery MVP Shell

Mobile-first Next.js prototype for Social Battery, a premium web app for curated small-group outings.

## Current scope

- Dark, mobile-feeling Next.js App Router foundation
- CSS-based 4-second skippable intro animation placeholder
- Sign up, log in, and onboarding start screens
- Bottom navigation: Home, Explore, Outings, Messages, Profile
- Rich mock Boston data with Worcester and Providence as waitlist markets
- Outing detail pages with one-off, category pass, and all-access pricing
- Group preview with first names and 3 public prompts only
- Messaging states for locked group chat, active group chat, and post-friendship DMs
- Profile account center, rewards, memberships, credits, and admin high-need metrics
- Mock adapter files for future Supabase, Stripe, and messaging work
- Mock API route placeholders for future auth, onboarding, bookings, groups, messages, feedback, and admin metrics

## Run locally

Install Node.js first, then run:

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:3000`.

## Integration posture

This prototype intentionally does not connect real payments, real messaging, or real Supabase yet. Mock data and route handlers are shaped so those integrations can replace the local adapters in later phases.
