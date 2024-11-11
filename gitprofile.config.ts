// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ChrisKareh0-0', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'inSkrap',
          description:
            ': Developed an advanced analytics platform for lead generation,helping sales teams improve efficiency.',
          imageUrl:
            'blob:https://drive.proton.me/2c52709a-da8e-4e14-9d2e-591a2b68d533',
          link: '',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Chris Kareh',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/chris-kareh-743294200/',
    twitter: '@ChrisKareh',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'chriskareh.click',
    phone: '',
    email: 'chriskareh@proton.me',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'React.js',
    'Vite.js',
    'React Native',
    'Django',
    'Flask',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'AWS',
    'Ansible',
    'Terraform',
    'Linux',
    'Bash',

  ],
  experiences: [
    {
      company: 'Wirestorm Networks',
      position: 'Lead Software Engineer',
      from: '2021',
      to: 'Present',
      companyLink: 'https://wirestorm.software',
    },
    {
      company: 'BSA - Qatar',
      position: 'Front End Developer',
      from: '2023',
      to: '2024',
      companyLink: 'https://www.bsa.qa/',
    },
    {
      company: 'Vision OfShore',
      position: 'Front End Developer',
      from: '2022',
      to: '2023',
      companyLink: 'https://visionofshore.com/',
    },
    {
      company: 'WeCanSync',
      position: 'Mobile Developer',
      from: '2021',
      to: 'August 2021',
      companyLink: 'https://wecansync.com/',
    }
  ],
  certifications: [
    {
      name: 'Cyber Security',
      body: 'American University of Technology',
      year: '',
      link: '',
    },
    {
      name: 'DevOps',
      body: 'Forward Mena',
      year: '',
      link: '',
    },
    {
      name: 'Configuration Management with Ansible and Terraform',
      body: 'Forward Mena',
      year: '',
      link: '',
    },
    {
      name: 'Certified DevOps Engineer',
      body: 'Forward Mena',
      year: '', 
      link: ''
    },  
    {
      name: 'AWS Certified Solutions Architect',
      body: 'Amazon',
      year: '',
      link: '',
    },
    {
      name: 'Certified Kubernetes Administrator',
      body: 'Forward Mena',
      year: '',
      link: '',
    },
    {
      name: 'Docker with IBM',
      body: 'IBM',
      year: '',
      link: '',
    },
    {
      name: 'Jenkins CI/CD',
      body: 'Forward Mena',
      year: '',
      link: '',
    },
     {
       name: 'Git & GitHub',
       body: 'Forward Mena',
       year: '',
       link: '',
     }
  ],
  educations: [
    {
      institution: 'Arab Open University',
      degree: 'Bachelor of Computer Science',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'SimpliLearn',
      degree: 'Masters Program - DevOps Engineer',
      from: '',
      to: '',
    },
  ],
  publications: [
    // {
    //   title: '',
    //   conferenceName: '',
    //   journalName: '',
    //   authors: '',
    //   link: '',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    // {
    //   title: 'Publication Title',
    //   conferenceName: 'Conference Name',
    //   journalName: '',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
