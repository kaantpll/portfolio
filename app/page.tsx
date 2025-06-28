import Container from "@/components/Container";
import {
  AWSIcon,
  DockerIcon,
  ExpressIcon,
  GitIcon,
  JestIcon,
  KubernetesIcon,
  MongoIcon,
  MySqlIcon,
  NestJSIcon,
  NextJSIcon,
  NodeIcon,
  PostgreSqlIcon,
  RedisIcon,
  TypeScriptIcon,
} from "@/components/icons";

import IconTooltip from "@/components/IconTooltip";
import { Button } from "@nextui-org/react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col gap-4 mt-20 ">
        <div className="flex flex-row justify-between items-center">
          <div className="text-2xl font-bold">Kaan Topal.</div>
          <div className="flex flex-row gap-8">
            <div className="flex gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/kaan-topal/"
                target="_blank"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="https://medium.com/@kaant43"
                target="_blank"
                className="hover:underline"
              >
                Medium
              </a>
            </div>

            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/kaantpll"
                target="_blank"
                className="hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="text-decoration-line: line-through;">
          I enjoy to code.
        </div>
      </div>

      <div className="mt-20">
        <div className="content-normal text-base">
          I love to build whole system form scratch. I have been coding since 3
          years. I am currently working as a full-stack developer. I can build
          websites and mobile apps. I generally use Typescript base
          technologies.
        </div>
      </div>

      <div className="mt-10">
        I have been working at Kafkal Yazilim since 2022. I have taken part in
        many projects, some of which are; Felis Awards, Polaris Awards, Events
        Mobile Apps, Kafkal Website, Haribo Mobile App.
      </div>

      <div className="flex flex-col gap-6 mt-10 border-t border-gray-800">
        <div>
          <div className="font-semibold mb-2 mt-10">Backend</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            Advanced API development from scratch using Node.js and NestJS,
            including scalable, robust, and secure architectures. Experience
            with RESTful.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip
              icon={<NodeIcon size={20} className="text-green-500" />}
              content="Node.js"
            />
            <IconTooltip icon={<NestJSIcon size={20} />} content="NestJS" />
            <IconTooltip icon={<ExpressIcon size={20} />} content="Express" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Frontend</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            Building performant and responsive web pages using Next.js and
            Tailwind CSS. Skilled in state management, React Query for data
            fetching and caching, and optimizing frontend performance for
            seamless user experiences. Experience in developing mobile
            applications with Expo.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip
              icon={<TypeScriptIcon size={20} className="text-blue-500" />}
              content="TypeScript"
            />
            <IconTooltip icon={<NextJSIcon size={20} />} content="Next.js" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Databases</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            Designing and managing relational and NoSQL databases. Experience
            with PostgreSQL, MySQL, MongoDB, and Redis for high-availability,
            scalability, and performance optimization.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip
              icon={<PostgreSqlIcon size={20} />}
              content="PostgreSQL"
            />
            <IconTooltip icon={<MySqlIcon size={20} />} content="MySQL" />
            <IconTooltip
              icon={<MongoIcon size={20} className="text-green-500" />}
              content="MongoDB"
            />
            <IconTooltip icon={<RedisIcon size={20} />} content="Redis" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Test</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            Writing unit, integration, and end-to-end tests using Jest to ensure
            code quality, reliability, and maintainability.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip icon={<JestIcon size={20} />} content="Jest" />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">DevOps / Cloud / CI/CD</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            AWS infrastructure setup and management. Building cloud systems from
            scratch using Infrastructure as Code (CDK), including EC2, VPC, Auto
            Scaling, and CI/CD pipelines for automated deployments.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip
              icon={<KubernetesIcon size={20} />}
              content="Kubernetes"
            />
            <IconTooltip
              icon={<DockerIcon size={20} className="text-blue-500" />}
              content="Docker"
            />
            <IconTooltip
              icon={<AWSIcon size={20} className="text-orange-500" />}
              content="AWS"
            />
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Tools</div>
          <div className="text-xs text-gray-400 mb-4 max-w-2xl">
            Proficient in version control and collaboration using Git.
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <IconTooltip icon={<GitIcon size={20} />} content="Git" />
          </div>
        </div>
      </div>
    </Container>
  );
}
