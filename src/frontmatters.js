import React from 'react';

const Frontmatters = {
  site_name: "Unresolved",
  motto: (
    <div>Unresolved today,<br />Resolved in tomorrow.</div>
  ),
  author: {
    name: "Daisuke Tsuji",
    dob: new Date(1989, 1, 26),
    roles: ["Web Developer", "Markup Developer", "SEO Analyst", ],
    languages: ["Japanese", "English(Learning)", ],
    mainSkills: ["Ruby", "Ruby on Rails", "JavaScript(ES2015)", "HTML/CSS", "SEO", ],
    subSkills: ["Golang", "Python", "PHP", "ElasticSearch", "Design", "Writing", ],
    hiring: (
    <div>
      <p>Welcome :)</p>
      <p>I'm looking for developer positions in startups in English speaking countries.</p>
    </div>
    ),
  },
  projects: [
    {
      title: "Hugo Theme Robust",
      descriptionShort: (
        <div>
          <p>Full stack blog theme for Hugo.</p>
          <p>Supported Google AMP Project, splitted default HTML and AMP HTML.</p>
        </div>
      ),
      stacks: ["Hugo", "HTML/CSS", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_robust",
      relatedUrl: "https://themes.gohugo.io/robust/",
      index: true,
    },
    {
      title: "Hugo Theme Aglaus",
      descriptionShort: (
        <div>
          <p>Single column blog theme for Hugo.</p>
          <p>Supported Google AMP Project, generate AMP HTML only.</p>
        </div>
      ),
      stacks: ["Hugo", "HTML/CSS", "Go html/template", "Responsive Web Design", "AMP"],
      sourceUrl: "https://github.com/dim0627/hugo_theme_aglaus",
      relatedUrl: "https://themes.gohugo.io/aglaus/",
      index: true,
    },
    {
      title: "Hugo Theme Beg",
      sourceUrl: "https://github.com/dim0627/hugo_theme_beg",
      relatedUrl: "https://themes.gohugo.io/beg/",
      index: false,
    },
    {
      title: "Hugo Theme Solit",
      sourceUrl: "https://github.com/dim0627/hugo_theme_solit",
      relatedUrl: "https://themes.gohugo.io/hugo_theme_solit/",
      index: false,
    },
    {
      title: "Private Rails Project",
      descriptionShort: (
        <div>
          <p>Part-time job listing service for not large organizations such as personal store.</p>
          <p>Support JobPosting structured data for Google for Jobs</p>
        </div>
      ),
      stacks: ["Rails 5.1.4", "webpacker", "webpack", "PostCSS", "ES2015", "AMP"],
      index: true,
    },
  ],
  works: [
    {
      title: "Rista, inc.",
      workingFrom: new Date(2016, 11, 1),
      role: "Web Developer, SEO Analyist",
      stacks: ["Ruby", "Ruby on Rails", "ES2015", "MySQL", "ElasticSearch"],
    },
    {
      title: "Pharma Information Network, inc.",
      workingFrom: new Date(2015, 9, 1),
      workingTo: new Date(2016, 11, 1),
      role: "Lead Developer, SEO Analyist",
      stacks: ["PHP", "Laravel", "Python", "Golang", "Ruby", "Ruby on Rails", "MySQL", "ElasticSearch"],
    },
    {
      title: "MedPeer, inc.",
      workingFrom: new Date(2015, 2, 1),
      workingTo: new Date(2015, 9, 1),
      role: "Web Developer",
      stacks: ["PHP", "Laravel", "MySQL", "AWS CloudSearch"],
    },
    {
      title: "Kakaku.com, inc.",
      workingFrom: new Date(2014, 7, 1),
      workingTo: new Date(2015, 1, 1),
      role: "Web Developer",
      stacks: ["C#", "VB Script", "SQL Server"],
    },
  ],
};

export default Frontmatters;