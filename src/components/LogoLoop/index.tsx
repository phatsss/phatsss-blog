import { useColorMode } from "@docusaurus/theme-common";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiSupabase,
  SiWebpack,
  SiBabel,
  SiGithub,
  SiGooglecloud,
  SiDigitalocean,
} from "react-icons/si";
import LogoLoop from "./LogoLoop";

const techLogos = (logoColor: string) => [
  {
    node: <SiReact color={logoColor} className="tech-logo logo-react"/>,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs color={logoColor} className="tech-logo logo-nextjs"/>,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript color={logoColor} className="tech-logo logo-typescript"/>,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss color={logoColor} className="tech-logo logo-tailwindcss"/>,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiNodedotjs color={logoColor} className="tech-logo logo-nodejs"/>,
    title: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    node: <SiLaravel color={logoColor} className="tech-logo logo-laravel"/>,
    title: "Laravel",
    href: "https://laravel.com/",
  },
  {
    node: <SiPhp color={logoColor} className="tech-logo logo-php"/>,
    title: "PHP",
    href: "https://www.php.net/",
  },
  {
    node: <SiNestjs color={logoColor} className="tech-logo logo-nestjs"/>,
    title: "NestJS",
    href: "https://nestjs.com/",
  },
  {
    node: <SiPrisma color={logoColor} className="tech-logo logo-prisma"/>,
    title: "Prisma",
    href: "https://www.prisma.io/",
  },
  {
    node: <SiGithub color={logoColor} className="tech-logo logo-github"/>,
    title: "Github",
    href: "https://github.com/",
  },
  {
    node: <SiGit color={logoColor} className="tech-logo logo-git"/>,
    title: "Git",
    href: "https://git-scm.com/",
  },
  {
    node: <SiDocker color={logoColor} className="tech-logo logo-docker"/>,
    title: "Docker",
    href: "https://www.docker.com/",
  },
  {
    node: <SiPostgresql color={logoColor} className="tech-logo logo-postgresql"/>,
    title: "PostgreSQL",
    href: "https://www.postgresql.org/",
  },
  {
    node: <SiMysql color={logoColor} className="tech-logo logo-mysql"/>,
    title: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    node: <SiSupabase color={logoColor} className="tech-logo logo-supabase"/>,
    title: "Supabase",
    href: "https://www.supabase.com/",
  },
  {
    node: <SiWebpack color={logoColor} className="tech-logo logo-webpack"/>,
    title: "Webpack",
    href: "https://webpack.js.org/",
  },
  {
    node: <SiBabel color={logoColor} className="tech-logo logo-babel"/>,
    title: "Babel",
    href: "https://babeljs.io/",
  },
  {
    node: <SiGooglecloud color={logoColor} className="tech-logo logo-googlecloud"/>,
    title: "Google Cloud",
    href: "https://cloud.google.com/",
  },
  {
    node: <SiDigitalocean color={logoColor} className="tech-logo logo-digitalocean"/>,
    title: "Digital Ocean",
    href: "https://www.digitalocean.com/",
  },
];

// Alternative with image sources
const imageLogos = [
  {
    src: "/logos/company1.png",
    alt: "Company 1",
    href: "https://company1.com",
  },
  {
    src: "/logos/company2.png",
    alt: "Company 2",
    href: "https://company2.com",
  },
  {
    src: "/logos/company3.png",
    alt: "Company 3",
    href: "https://company3.com",
  },
];

export function LogoLoopComponent() {
  const { colorMode } = useColorMode();
  const isDarkMode = colorMode === "dark";
  const logoColor = isDarkMode ? "lightgray" : "darkgray";

  return (
    <div
      style={{
        height: "250px",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <LogoLoop
        logos={techLogos(logoColor)}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor={"rgba(0, 0, 0, 0.1)"}
        ariaLabel="Technology"
      />
    </div>
  );
}
