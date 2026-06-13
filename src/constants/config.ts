import githubIcon from "~/assets/icons/github.svg";
import linkedinIcon from "~/assets/icons/linkedin.svg";
import xIcon from "~/assets/icons/x.svg";

export const site = {
  name: "vfshera.dev",
  shortName: "vfshera",
  url: "https://vfshera.dev",
  meta: {
    title: "Franklin Shera",
    description:
      "A Front-End Developer committed to delivering intuitive and visually stunning websites.",
  },
} as const;

export const socials = [
  {
    icon: githubIcon,
    name: "Github",
    link: "https://github.com/vfshera",
  },
  {
    icon: linkedinIcon,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/vfshera",
  },
  {
    icon: xIcon,
    name: "X/Twitter",
    link: "https://twitter.com/1vfshera",
  },
] as const;
