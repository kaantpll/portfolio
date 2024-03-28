import Container from "@/components/Container";

import IconBox from "@/components/IconBox";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import { CiMail } from "react-icons/ci";
import {
  FaFileAlt,
  FaLinkedin,
  FaGithub,
  FaMedium,
  FaCalendarAlt,
} from "react-icons/fa";
import IconTooltip from "@/components/IconTooltip";
import AWSIcon from "@/components/icons/AwsIcon";
import DockerIcon from "@/components/icons/DockerIcon";
import GoIcon from "@/components/icons/GoIcon";
import HibernateIcon from "@/components/icons/Hibernate";
import JavaIcon from "@/components/icons/JavaIcon";
import JestIcon from "@/components/icons/JestIcon";
import KafkaIcon from "@/components/icons/KafkaIcon";
import KubernetesIcon from "@/components/icons/KubernetesIcon";
import MongoIcon from "@/components/icons/MongoIcon";
import MySqlIcon from "@/components/icons/MySqlIcon";
import NestJSIcon from "@/components/icons/NestjsIcon";
import NodeIcon from "@/components/icons/Nodejs";
import PostgreSqlIcon from "@/components/icons/PostgreSqlIco";
import RedislIcon from "@/components/icons/RedisIcon";
import TypeScriptIcon from "@/components/icons/TypescriptIcon";
import ExpressIcon from "@/components/icons/Express";
import NextJSIcon from "@/components/icons/NextIcon";
import PhpIcon from "@/components/icons/PhpIcon";
import WordpressIcon from "@/components/icons/WordpressIcon";

const getAge = () => {
  const myBirthDay = new Date("1999-01-12");
  const currentDay = new Date();

  const age = currentDay.getFullYear() - myBirthDay.getFullYear();

  return age.toString();
};
export default function Home() {
  return (
    <Container>
      <div className="flex flex-col mt-20 gap-10">
        <div className="flex flex-col gap-2">
          <div className="text-white font-bold text-4xl">Kaan Topal</div>
          <div className=" text-sm text-gray-400">
            Backend Software Engineer
          </div>
        </div>
        <div className="text-white opacity-90">
          Hi!👋 I'm Kaan from Türkiye, Experienced backend developer with 2
          years of hands-on involvement in multiple projects, adept at
          collaborating within multidisciplinary teams. Continuously enhancing
          skills and exploring new technologies. Completed military service and
          currently aged {getAge()}.
        </div>
        <div className="flex flex-col gap-4">
          <a href="mailto:kaant43@gmail.com">
            {" "}
            <IconBox icon={CiMail} text="kaant43@gmail.com" />
          </a>
          <a>
            <div className="flex flex-row items-center gap-2 opacity-80 hover:opacity-90 hover:cursor-pointer">
              <FaFileAlt size={20} color="white" />
              <div className="text-sm">Contact me for resume</div>
            </div>
          </a>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <div className="flex gap-4 items-center">
              <a href="https://www.linkedin.com/in/kaan-topal/" target="_blank">
                <Button
                  className={`bg-[#0a66c2] rounded-md text-white w-32 hover:opacity-80`}
                  startContent={<FaLinkedin size={20} color="white" />}
                >
                  LinkedIn
                </Button>
              </a>
            </div>
            <div className="flex flex-row  gap-4">
              <div className="flex gap-4 items-center">
                <a href="https://medium.com/@kaant43" target="_blank">
                  <Button
                    className={`bg-[#000] rounded-md text-white w-32 hover:opacity-80 `}
                    startContent={<FaMedium size={20} color="white" />}
                  >
                    Medium
                  </Button>
                </a>
              </div>

              <div className="flex gap-4 items-center">
                <a href="https://github.com/kaantpll" target="_blank">
                  <Button
                    className={`bg-[#292929] rounded-md text-white w-32 hover:opacity-80`}
                    startContent={<FaGithub size={20} color="white" />}
                  >
                    Github
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-20" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-gray-800 hover:shadow-md hover:shadow-cyan-900 hover:cursor-pointer ">
            <CardHeader>
              <h1 className="font-bold text-xl text-white opacity-90">APIs</h1>
            </CardHeader>
            <CardBody>
              <p className="text-white opacity-80 leading-5 text-sm">
                RESTful APIs, microservices, clean & hexagonal architecture and
                more.
              </p>
              <br />
              <p className="text-white opacity-80 leading-5 text-sm">
                I have experience in creating REST APIs from scratch, and I
                continually develop myself by staying updated with new
                approaches.
              </p>
            </CardBody>

            <CardFooter>
              <div className="grid grid-cols-5 gap-2">
                <IconTooltip
                  content="Typescript"
                  icon={<TypeScriptIcon className="fill-blue-500" size={24} />}
                />

                <IconTooltip
                  content="Node.js"
                  icon={<NodeIcon className="fill-green-500" size={24} />}
                />
                <IconTooltip
                  content="Nest.js"
                  icon={<NestJSIcon className="fill-red-500" size={24} />}
                />
                <IconTooltip
                  content="Java"
                  icon={<JavaIcon className="fill-blue-500" size={24} />}
                />
                <IconTooltip
                  content="Go"
                  icon={<GoIcon className="fill-blue-500" size={24} />}
                />
              </div>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 hover:shadow-md hover:shadow-cyan-900 hover:cursor-pointer ">
            <CardHeader>
              <h1 className="font-bold text-xl text-white opacity-90">
                Databases
              </h1>
            </CardHeader>
            <CardBody>
              <p className="text-white opacity-80 leading-5 text-sm">
                Designing, managing relational databases, and working with ORM.
              </p>
              <br />
              <p className="text-white opacity-80 leading-5 text-sm">
                "I am experienced in preparing designs for both relational and
                non-relational databases. I also have expertise in optimizing
                database queries.
              </p>
            </CardBody>

            <CardFooter>
              <div className="grid grid-cols-5 gap-2">
                <IconTooltip
                  content="PostgreSQL"
                  icon={<PostgreSqlIcon className="fill-blue-500" size={24} />}
                />

                <IconTooltip
                  content="Redis"
                  icon={<RedislIcon className="fill-blue-500" size={24} />}
                />

                <IconTooltip
                  content="MongoDB"
                  icon={<MongoIcon className="fill-green-500" size={24} />}
                />
                <IconTooltip
                  content="MySQL"
                  icon={<MySqlIcon className="fill-red-500" size={24} />}
                />

                <IconTooltip
                  content="Hibernate"
                  icon={<HibernateIcon className="fill-blue-500" size={24} />}
                />
              </div>
            </CardFooter>
          </Card>
          <Card className="bg-gray-800 hover:shadow-md hover:shadow-cyan-900 hover:cursor-pointer ">
            <CardHeader>
              <h1 className="font-bold text-xl text-white opacity-90">Tools</h1>
            </CardHeader>
            <CardBody>
              <p className="text-white opacity-80 leading-5 text-sm">
                Speeding up tasks and automating processes while working on
                projects.
              </p>
              <br />
              <p className="text-white opacity-80 leading-5 text-sm">
                I am knowledgeable about various tools and have worked on
                integrating them into necessary organizations and projects.
              </p>
            </CardBody>

            <CardFooter>
              <div className="grid grid-cols-5 gap-2">
                <IconTooltip
                  content="AWS"
                  icon={<AWSIcon className="fill-yellow-500" size={24} />}
                />
                <IconTooltip
                  content="Docker"
                  icon={<DockerIcon className="fill-green-500" size={24} />}
                />
                <IconTooltip
                  content="Kafka"
                  icon={<KafkaIcon className="fill-blue-500" size={24} />}
                />
                <IconTooltip
                  content="Kubernetes"
                  icon={<KubernetesIcon className="fill-blue-500" size={24} />}
                />
                <IconTooltip
                  content="Jest"
                  icon={<JestIcon className="fill-green-500" size={24} />}
                />
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-xl">Work Experience</div>

          <div className="flex flex-col ">
            <div className="flex flex-col gap-6 ">
              <div className="flex flex-row justify-between items-center mt-10">
                <div className="flex flex-col">
                  <div className="font-bold text-lg">Kafkal Software</div>
                  <div className="text-sm font-light opacity-80">
                    Backend Engineer
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2 opacity-80 font-light text-sm">
                  <FaCalendarAlt size={16} color="white" />
                  <div className="text-sm">June 2022 - Ongoing</div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row gap-4">
                  <div className="flex flex-col bg-gray-800 rounded-md  px-4 py-4">
                    <div className="leading-5 ">
                      {" "}
                      I work at Kafka Software as a Backend Engineer. I am
                      involved in database designs, algorithmic flowcharts, and
                      server developments from scratch to production.
                      Additionally, I am also interested in code deployment and
                      server operations.
                    </div>
                  </div>
                </div>

                <div className="mt-4 font-bold opacity-90 text-xl md:text-medium">
                  Projects
                </div>
                <div className="flex flex-row gap-4 md:p-4 md:ml-4 mt-8 md:mt-4">
                  <div className="hidden md:block bg-gray-600 rounded-sm w-1.5 min-h-12 p"></div>
                  <div className="flex flex-col rounded-md">
                    <div className="font-bold">Awards System</div>
                    <div className="text-sm font-light opacity-80">
                      January 2023 - Ongoing
                    </div>
                    <div className=" leading-5 text-sm  mt-4 opacity-80">
                      The Awards system is an award system that supports
                      multiple websites with its dynamic infrastructure and
                      allows for the creation of a new project award system
                      within hours whenever needed.
                    </div>

                    <div className="flex flex-col text-sm mt-4">
                      <a
                        target="_blank"
                        href="https://felisodulleri.com"
                        className="text-blue-400  hover:underline"
                      >
                        https://felisodulleri.com
                      </a>
                      <a
                        target="_blank"
                        href="https://polarisawards.com/"
                        className="text-blue-400  hover:underline "
                      >
                        https://polarisawards.com
                      </a>
                      <a
                        target="_blank"
                        href="   https://curious.felisodulleri.com/"
                        className="text-blue-400 hover:underline"
                      >
                        https://curious.felisodulleri.com
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <IconTooltip
                        content="Nest.js"
                        icon={
                          <NestJSIcon className="fill-green-500" size={18} />
                        }
                      />
                      <IconTooltip
                        content="Express"
                        icon={
                          <ExpressIcon className="fill-green-500" size={18} />
                        }
                      />

                      <IconTooltip
                        content="Typescript"
                        icon={
                          <TypeScriptIcon className="fill-blue-500" size={18} />
                        }
                      />
                      <IconTooltip
                        content="AWS"
                        icon={<AWSIcon className="fill-yellow-500" size={18} />}
                      />

                      <IconTooltip
                        content="Docker"
                        icon={
                          <DockerIcon className="fill-yellow-500" size={18} />
                        }
                      />

                      <IconTooltip
                        content="Next.js"
                        icon={
                          <NextJSIcon className="fill-yellow-500" size={18} />
                        }
                      />
                      <IconTooltip
                        content="PostgreSQL"
                        icon={
                          <PostgreSqlIcon
                            className="fill-yellow-500"
                            size={18}
                          />
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-4 md:p-4 md:ml-4 mt-12 md:mt-0">
                  <div className="hidden md:block bg-gray-600 rounded-sm w-1 p"></div>
                  <div className="flex flex-col   rounded-md">
                    <div className="font-bold">Mehmetonur Talent Agency</div>
                    <div className="text-sm font-light opacity-80">
                      January 2024 - March 2024
                    </div>
                    <div className="opacity-80 leading-5 text-sm mt-4 ">
                      The Mehmetonur Talenty Agency Project is an application
                      that provides support in dubbing and voice-related
                      matters, offering introductions to clients.
                    </div>
                    <div className=" text-sm mt-4">
                      <a
                        target="_blank"
                        href="https://mehmetonur.com/"
                        className="text-blue-400 hover:underline"
                      >
                        https://mehmetonur.com
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <IconTooltip
                        content="PHP"
                        icon={<PhpIcon className="fill-green-500" size={18} />}
                      />
                      <IconTooltip
                        content="WordPress"
                        icon={
                          <WordpressIcon className="fill-green-500" size={18} />
                        }
                      />
                      <IconTooltip
                        content="MySQL"
                        icon={<MySqlIcon className="fill-blue-500" size={18} />}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-4 md:p-4 md:ml-4 mt-12 md:mt-0">
                  <div className="hidden md:block bg-gray-600 rounded-sm w-1 p"></div>
                  <div className="flex flex-col  rounded-md">
                    <div className="font-bold">
                      Istanbul Chamber Of Commerce Election Promotion{" "}
                    </div>
                    <div className="text-sm font-light opacity-80">
                      September 2022 - December 2022
                    </div>
                    <div className="opacity-80 leading-5 text-sm mt-4 ">
                      A group at the Istanbul Chamber of Commerce shares their
                      own introductions and collects support through a website.
                      It was static page.
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <IconTooltip
                        content="Node.js"
                        icon={<NodeIcon className="fill-green-500" size={18} />}
                      />
                      <IconTooltip
                        content="Express"
                        icon={
                          <ExpressIcon className="fill-green-500" size={18} />
                        }
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-row gap-4 md:p-4 md:ml-4 mt-12 md:mt-0">
                  <div className="hidden md:block bg-gray-600 rounded-sm w-1 p"></div>
                  <div className="flex flex-col  rounded-md">
                    <div className="font-bold">Kafkal Website</div>
                    <div className="text-sm font-light opacity-80">
                      June 2022 - August 2022
                    </div>
                    <div className="opacity-80 leading-5 text-sm mt-4">
                      This project is introduction page of Kafkal Software
                      company. This project is introduction page of Kafkal
                      Software company.
                    </div>
                    <div className=" text-sm mt-4">
                      <a
                        target="_blank"
                        href="https://kafkal.com/"
                        className="text-blue-400 hover:underline"
                      >
                        https://kafkal.com
                      </a>
                    </div>
                    <div className="flex flex-row mt-4 gap-2">
                      <IconTooltip
                        content="Next.js"
                        icon={
                          <NextJSIcon className="fill-green-500" size={18} />
                        }
                      />
                      <IconTooltip
                        content="Node.js"
                        icon={<NodeIcon className="fill-green-500" size={18} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-20" />
        <div className="flex flex-col">
          <div className="font-bold text-xl ">Education</div>

          <div className="flex flex-col gap-6 bg-gray-800 rounded-md p-4 mt-6">
            <div className="flex flex-col mt-2">
              <div className="font-bold text-lg">
                Zonguldak Bülent Ecevit University
              </div>
              <div className="text-sm font-light opacity-80">
                Computer Science
              </div>
            </div>

            <div className="opacity-80 leading-5 text-sm ">
              I graduated with a GPA of 2.96 in Computer Science in 2022, with a
              focus on software development and algorithm design, earning a
              Bachelor's degree.
            </div>

            <div className="flex flex-row items-center gap-2 opacity-80 font-light text-sm justify-end">
              <FaCalendarAlt size={16} color="white" />
              <div>September 2018 - September 2022</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-2 mt-10">
          <div className="flex flex-row justify-center text-sm font-light opacity">{`Copyright © ${new Date().getFullYear()} Kaan Topal`}</div>
          <div className="flex flex-row justify-center text-sm font-light opacity-80">
            Created By Kaan Topal. Used Next.js, NextUI and Tailwind.
            Self-hosted.
          </div>
        </div>
      </div>
    </Container>
  );
}
