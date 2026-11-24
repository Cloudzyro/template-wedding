# Unslop pass (November 24, 2026)

Done with the unslop skill by Damir Sokolovsky (@heydamir), CC BY 4.0.

## Audit

Light slop: a designed invitation-style site (cream paper, forest, clay, gold; Cormorant Garamond, Jost, one script face). Signs found:

- Uppercase tracked labels nearly everywhere in `src/pages/index.astro` and `src/styles/global.css`: eyebrows, nav links, menu button, every button, the date line, countdown units, schedule places, "Flying in" style heads, hotel "Book" links, registry links, the hashtag, RSVP form labels (`src/components/Rsvp.astro`)
- Radial color washes on the hero and the RSVP section
- The same gold flourish under every section heading (`Flourish.astro`, seven times), competing with the script ampersand
- Script face used for the story years as well as the ampersand
- Long, dark tinted drop shadows on the venue arch, gallery frames and RSVP card
- Pill buttons, pill menu button and pill "Book" links
- Slow scroll reveals (0.9s, 18px) on nearly every block; catch-all `ease` transitions
- 600 weight on hotel names

## Direction

- Product: one couple's wedding site that tells guests the plan and collects RSVPs
- Character: warm, unhurried, a little formal
- World: a letterpress invitation on cotton paper; a Vermont farm in September, pressed leaves, gold ink
- Moments: the couple's names with the countdown under them, and the venue arch with its hills
- Signature: the gold script ampersand, used only between the two names (monogram, hero, footer)

## Changes

- Type: every label in sentence case with no tracking; eyebrows and the date set in Cormorant like an invitation line; lining figures for the date; hotel names at 500
- Color: hero and RSVP washes removed; a darker sage (`--sage-ink`) so venue names read on paper
- Details: buttons, menu, "Book" links and RSVP choices at 8px instead of pills; shadows small and soft
- Signature: flourish dividers removed (component deleted) and story years in Cormorant, so the script ampersand is the one ornament
- Motion: reveals shortened to 0.45s and 8px on one easing curve; named transitions only

screenshot-2: The day (schedule timeline)
screenshot-3: Venue and travel
