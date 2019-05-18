import React from 'react';

const Frontmatters = {
  siteName: "Unresolved",
  baseUrl: "https://yet.unresolved.xyz",
  // mainColor: "#fdce12",
  possibleColors: ["#ff99cc", "#fdce12", "#5cd65c", "#4d79ff", ],
  mainColor: "#ff99cc",
  accentColor: "",
  baseColor: "#333",
  motto: (
    <div>Unresolved today,<br />Solve in tomorrow.</div>
  ),
  author: {
    name: "Daniel Denenberg",
    email: "dannydenenberg@gmail.com",
    phoneNumber: "650-793-0157",
    dob: new Date(2003, 0, 4),
    roles: ["Student", "Musician", "Singer", "Computer Nerd", ],
    languages: ["English", "Spanish(Communicable Understanding)", ],
    mainSkills: ["Java", "JavaScript", "HTML", "Python", ],
    subSkills: ["Rust", "C", "C++", "Classical Piano Performance", ],
    hiring: (
    <div>
      <p>Welcome :)</p>
      <p>I'm looking for developer positions in startups in English speaking countries.</p>
    </div>
    ),
    social: {
      github: "https://github.com/dannydenenberg",
      github_id: "dannydenenberg",
      twitter: "https://twitter.com/denenbergdanny",
      twitter_id: "denenbergdanny",
      linkedin: "https://www.linkedin.com/in/daisuke-tsuji-2a379a118",
      linkedin_id: "daisuke-tsuji-2a379a118",
      facebook: "https://www.facebook.com/daisuke.tsuji.735",
      facebook_id: "daisuke.tsuji.735",
    }
  },
  projects: [
    {
      title: "nutry.co",
      descriptionShort: (
        <div>
          <p>nutry is trouble consultation service for managed dieticians.</p>
        </div>
      ),
      stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6"],
      relatedUrl: "https://nutry.co/",
    },
    {
      title: "blog.unresolved.xyz",
      descriptionShort: (
        <div>
          <p>Tech blog.</p>
        </div>
      ),
      stack: ["GatsbyJS", "Contentful", "Netlify", "Server Side Rendering"],
      sourceUrl: "https://github.com/dim0627/blog.unresolved.xyz",
      relatedUrl: "https://blog.unresolved.xyz/",
    },
    {
      title: "yet.unresolved.xyz",
      descriptionShort: (
        <div>
          <p>It is about this page you are looking at.</p>
        </div>
      ),
      stack: ["React"],
      sourceUrl: "https://github.com/dim0627/portfolio",
      relatedUrl: "https://yet.unresolved.xyz",
    },
    {
      title: "TIL(Today I Learned)",
      descriptionShort: (
        <div>
          <p>Memo repositoriy a.k.a. TIL.</p>
        </div>
      ),
      stack: ["GitHub", "Markdown"],
      relatedUrl: "https://github.com/dim0627/til",
    },
    {
      title: "NikuPeer(EOL)",
      descriptionShort: (
        <div>
          <p>Web service for plan and join meat party.</p>
          <p>Support Event structured data for Google rich snippet.</p>
        </div>
      ),
      stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6", "AMP"],
    },
    {
      title: "RECR(EOL)",
      descriptionShort: (
        <div>
          <p>Part-time job listing service for not large organizations such as personal store.</p>
          <p>Support JobPosting structured data for Google for Jobs.</p>
        </div>
      ),
      stack: ["Rails 5.x.x", "webpacker", "cssnext", "ES6", "AMP"],
    },
  ],
  works: [
    {
      title: "Lang-8 inc.",
      workingFrom: new Date(2018, 10, 1),
      role: "Web Developer",
      stack: ["Ruby", "Rails 4.x.x", "Elasticsearch", "i18n"],
    },
    {
      title: "DMM.com LLC(Freelance)",
      workingFrom: new Date(2018, 9, 1),
      workingTo: new Date(2018, 12, 31),
      role: "Web Developer",
      stack: ["Ruby", "Rails 5.x.x", "Elasticsearch", "ES6"],
    },
    {
      title: "Pharma Information Network, inc.(Freelance)",
      workingFrom: new Date(2018, 8, 1),
      role: "Chief Developer",
      stack: ["Ruby", "Rails 5.x.x", "ES6"],
    },
    {
      title: "Fitsplus, inc.(Freelance)",
      workingFrom: new Date(2017, 11, 1),
      role: "Web Developer, Project Manager",
      stack: ["Ruby", "Rails 5.x.x", "ES6", "AWS"],
    },
    {
      title: "Rista, inc.",
      workingFrom: new Date(2016, 10, 1),
      workingTo: new Date(2017, 11, 1),
      role: "Web Developer, SEO Analyist",
      stack: ["Ruby", "Rails 5.x.x", "ES6", "MySQL", "Elasticsearch"],
    },
    {
      title: "Pharma Information Network, inc.",
      workingFrom: new Date(2015, 8, 1),
      workingTo: new Date(2016, 10, 1),
      role: "Lead Developer, SEO Analyist",
      stack: ["PHP", "Laravel", "Python", "Golang", "Ruby", "Rails 4.x.x", "Elasticsearch"],
    },
    {
      title: "MedPeer, inc.",
      workingFrom: new Date(2015, 1, 1),
      workingTo: new Date(2015, 8, 1),
      role: "Web Developer",
      stack: ["PHP", "Laravel", "MySQL", "AWS CloudSearch"],
    },
    {
      title: "Kakaku.com, inc.",
      workingFrom: new Date(2014, 6, 1),
      workingTo: new Date(2015, 0, 1),
      role: "Web Developer",
      stack: ["C#", "VB Script", "SQL Server"],
    },
  ],
};

// set the background color to one mainColor:
// document.body.style.backgroundColor = Frontmatters.mainColor;

// set the background color to a random color in possibleColors ^:
document.body.style.backgroundColor = Frontmatters.possibleColors[Math.floor(Math.random() * Frontmatters.possibleColors.length)];

export default Frontmatters;
