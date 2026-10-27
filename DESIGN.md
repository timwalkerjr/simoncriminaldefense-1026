## Visual Theme
Authoritative criminal-defense law firm site with deep navy sections, warm off-white alternating bands, a burgundy CTA color and gold accents, set in bold Merriweather serif headings over clean Source Sans 3 body text.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(220 79% 11%)
- muted-foreground: hsl(218 15% 32%)
- border: hsl(43 23% 88%)
- surface: hsl(48 24% 96%)
- primary: hsl(2 55% 29%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(2 56% 22%)
- secondary: hsl(220 79% 11%)
- secondary-foreground: hsl(0 0% 100%)
- secondary-hover: hsl(218 80% 8%)
- dark-background: hsl(220 79% 11%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted-foreground: hsl(216 28% 81%)
- dark-border: hsl(218 51% 20%)
- accent: hsl(46 56% 52%)

Supporting values observed in rendered styles. Use them as literal hsl values or extra tokens where a section needs them:
- Stats band background: rgb(11,31,66), hsl(219 72% 15%).
- Footer background: rgb(4,16,31), hsl(213 77% 6%).
- Footer link and body text: rgb(152,166,187), hsl(217 21% 66%).
- Footer fine print: rgb(114,124,139), hsl(215 10% 49%).
- Light gold text on dark (badges, case-number chips, "View all case results" button): rgb(221,197,130), hsl(43 62% 69%).
- Card and tag border: rgb(230,226,217), hsl(43 23% 88%).
- Awards strip text: rgb(89,99,113), hsl(215 12% 40%).
- Body text on the about section: rgb(20,28,40), hsl(215 33% 12%).
- Translucent whites on dark (cards, borders, inputs): white at 3–7% for fills and 10–30% for borders.
- Hero overlay over the court image: `linear-gradient(100deg, rgba(4,16,38,0.97) 0%, rgba(5,19,45,0.9) 46%, rgba(8,26,60,0.62) 100%)`. This is an absolute child layer covering the full hero (1905×641) above the image, with no extra scrim.
- Section rhythm: hero (dark navy with court image and gradient), awards strip (surface), practice areas (white), about (surface), service area (white), case results (dark), reviews (surface), FAQ (white), stats band, contact (dark), footer.

## Page Background
solid — hsl(0 0% 100%)

## Typography

- Heading font: `merriweather`. Source family "Merriweather", weights 700 and 900 are used. Self-hosted.
- Body font: `source-sans-3`. Source family "Source Sans 3", weights 400, 500, 600 and 700 are used. Self-hosted.

Heading scale (Merriweather, exact values):
- h1: 48px / weight 900 / line-height 50.4px / letter-spacing -0.6px, white on the hero.
- h2: 44px / weight 900 / line-height 50.16px / letter-spacing -0.53px. This is the section heading size (foreground on light sections, white on dark). The "Client Reviews" h2 is centered.
- h2, awards strip eyebrow: 11.52px / weight 700 / uppercase / letter-spacing 2px / centered / color hsl(215 12% 40%).
- h3, service cards: 19.84px / weight 900 / line-height 22.6px / letter-spacing -0.24px.
- h3, case result cards: 20px / weight 700 / line-height 30px / white.
- h3, contact form title: 24px / weight 900 / line-height 36px.
- h4, footer column headings: 12px / weight 700 / uppercase / letter-spacing 1.8px / accent gold.
- Wordmark name "Joseph A. Simon": Merriweather 20px / weight 700.
- Stat numbers (40+, 24/7, 2001, 5.0): large Merriweather serif, white, centered.

Body and UI text (Source Sans 3):
- Hero paragraph: 19.04px / line-height 31.4px / color dark-muted-foreground.
- Section intro paragraphs: 18.08px / line-height ~31px / color muted-foreground (30.7px on the service area and contact sections).
- About body: 18px / line-height 32.4px / color hsl(215 33% 12%). Links are burgundy, bold italic and underlined.
- Service card body: 15.5px / line-height 25px / muted-foreground.
- Card number: 15px / weight 900 / letter-spacing 0.75px / accent.
- "LEARN MORE →" link: 12.16px / weight 700 / uppercase appearance / primary color.
- Eyebrow labels ("WHAT WE DEFEND", "LOCAL REPRESENTATION", "CONFIDENTIAL CONSULTATION"): 12px / weight 700 / uppercase / letter-spacing 1.8px. Color is primary on light sections and accent on dark. Each is preceded by a 28px × 2px gold line.
- Hero badge "Criminal Defense Is All We Do": 11.36px / weight 700 / uppercase / letter-spacing 1.5px / light gold text.
- FAQ question: bold, about 16–17px. FAQ answer: 17px / line-height 30.6px.
- Nav links: Source Sans 3, weight 600, resolved size 16px (the authoritative resolved value, not the raw 14.4px or 15px). Color is dark-muted-foreground. The phone link is white, weight 700. The nav is not a Merriweather element, except the wordmark name.
- Footer links: 14.5px / line-height 21.75px. Footer description: 14px / line-height 22.75px. Copyright: 13.12px. Disclaimer: 12px.
- Do NOT add responsive size bumps beyond these extracted values. Do not use fluid heading utilities.

## Components
- Primary button: background primary, white text, border-radius 3px, 1px transparent border, padding 16px 30px, Source Sans 3 16.16px weight 600 (hero). The nav and footer variant is padding 10px 20px with 14px text. The form submit is full-width with padding 14px 0 and 15.52px text.
- Secondary (outline) button: transparent background, white text, 1px border of white at 30% opacity, radius 3px, padding 16px 30px, with a small gold phone icon before "(734) 887-6200".
- Gold outline button ("View all case results →"): transparent, light gold text, 1px light-gold border at ~42%, radius 3px, padding 12px 24px, 16px weight 400.
- Text link button ("Pause scrolling"): primary color, 12px, 1px bottom border in primary, padding 10px 4px.
- Cards, service: white background, 1px border hsl(43 23% 88%), radius 4px, a 3-column grid with 24px gap in a 1280px max container. Contents are a gold number, serif h3, muted paragraph and burgundy "LEARN MORE →".
- Cards, case results: transparent over navy with a 1px border of white at 10%, radius 4px, 3-column grid with 24px gap. Contents are a gold uppercase category label, white serif h3, muted court line and a case-number chip (light-gold text, 1px border at 40%, radius 2px, 12px).
- Cards, testimonials: white background, 1px border hsl(43 23% 88%), radius 10px, 3-column grid with a prev/next circular button pager (44px, 1px navy border) and a "1 / 2" counter.
- Cards, hero testimonial: white at 7% fill, 1px border of white at 16%, radius 12px, gold stars, italic text.
- Cards, 24/7 panel: dark background, 1px border of white at 10%, radius 6px, soft shadow.
- Cards, contact form: background rgb(11,31,66), 1px border of white at 10%, radius 10px. Inputs have a white 4.3% fill, 1px border of white at 16%, radius 4px, 15.36px text. The select uses a solid rgb(11,31,66) background.
- Pills (service-area tags): surface background, 1px border hsl(43 23% 88%), radius 2px, 14px weight 600, muted-foreground text.
- Hero trust bar: white at 3% fill, 1px border of white at 10%, radius 4px, 14px white text with gold stars and icons.
- Awards strip: surface background, padding 28px top and 34px bottom, horizontally scrolling row of 134×94 `object-contain` badge images.
- Layout: max container 1280px. Section vertical padding is 90px (100px for contact, 64px top and 48px bottom for the footer). The hero grid is 700px / 467px with a 48px gap and 130px top padding. The footer is a 4-column grid (348 / 214 / 214 / 295px) with a 48px gap. The stats band has 4 equal columns separated by thin vertical dividers.
- FAQ: a navy sticky-style left card (radius 8px) holding the label, a 32px h2 and a burgundy button, beside a list of `details` rows with bottom borders in border color and bold 17px questions.
- Default border radius: 3px (buttons). Base spacing unit: 4px.
