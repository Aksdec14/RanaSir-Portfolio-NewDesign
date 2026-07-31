export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

export interface Point {
  lead: string;
  rest: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
  outcome: string;
}

export interface Fit {
  title: string;
  description: string;
  tag: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface SectionContent {
  navbar?: {
    logo_prefix?: string;
    logo_suffix?: string;
    links?: NavLink[];
    cta_text?: string;
  };
  hero?: {
    badge?: string;
    heading?: string;
    highlight_word_1?: string;
    highlight_word_2?: string;
    description?: string;
    accordion_title?: string;
    accordion_content?: string;
    cta_text?: string;
  };
  recognition?: {
    badge?: string;
    heading?: string;
    description?: string;
    closing_highlight?: string;
    points?: Point[];
  };
  about?: {
    badge?: string;
    heading?: string;
    heading_highlight?: string;
    paragraphs?: string[];
  };
  how_i_work?: {
    heading_part1?: string;
    heading_part2?: string;
    subtitle?: string;
    description?: string;
    steps?: Step[];
  };
  tools_wont_reach?: {
    badge?: string;
    heading?: string;
    paragraphs?: string[];
  };
  where_i_fit?: {
    heading?: string;
    subtitle?: string;
    fits?: Fit[];
  };
  proof?: {
    badge?: string;
    heading?: string;
    record?: string[];
    testimonials?: Testimonial[];
  };
  contact?: {
    badge?: string;
    heading?: string;
    subtitle?: string;
    description?: string;
    email?: string;
    linkedin?: string;
    location?: string;
    form_name_label?: string;
    form_name_placeholder?: string;
    form_email_label?: string;
    form_email_placeholder?: string;
    form_company_label?: string;
    form_company_placeholder?: string;
    form_blocker_label?: string;
    form_blocker_placeholder?: string;
    form_submit_text?: string;
  };
  footer?: {
    name?: string;
    tagline1?: string;
    tagline2?: string;
    cta_heading?: string;
    cta_subtitle?: string;
    cta_button?: string;
    copyright?: string;
    nav_groups?: NavGroup[];
  };
}
