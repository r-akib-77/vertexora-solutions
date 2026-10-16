export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company?: string;
};

// ── No verified testimonials yet. ───────────────────────────────────────────
// Add genuine client feedback here when available. The Testimonials section
// automatically renders a polished placeholder state while this list is empty
// (set `hideUntilReady = false` in the component to preview the layout).
export const testimonials: Testimonial[] = [];

export const testimonialsPlaceholder = {
  heading: "Great partnerships start with great projects.",
  body: "We're currently collecting client feedback. Once our first engagements wrap, verified testimonials will appear here.",
};
