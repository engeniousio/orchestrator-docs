module.exports = {
  title: "Test Orchestrator",
  url: "https://staging.orchestrator.engenious.io",
  baseUrl: "/docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "engenious", // Usually your GitHub org/user name.
  projectName: "testorchestrator", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Test Orchestrator",
      logo: {
        alt: "Test Orchestrator",
        src: "img/logo.svg",
        href: "https://orchestrator.engenious.io/",
        target: "_self",
      },
      items: [
        {
          href: "https://github.com/engeniousio/sift",
          label: "Sift IOS",
          position: "right",
        },
        {
          href: "https://github.com/engeniousio/sift-android",
          label: "Sift Android",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/",
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2/",
        //     },
        //   ],
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/",
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/",
        //     },
        //     {
        //       label: "Twitter",
        //       href: "https://twitter.com/",
        //     },
        //   ],
        // },
        // {
        //   title: "More",
        //   items: [
        //     {
        //       label: "Blog",
        //       to: "blog",
        //     },
        //     {
        //       label: "GitHub",
        //       href: "https://",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} orchestrator.engenious.io.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/engeniousio/orchestrator-docs/edit/master/",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
