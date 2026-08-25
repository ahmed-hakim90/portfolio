import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";
import {
  loadGitHubSectionData,
  parseGithubUsernameFromUrl,
  resolveGithubUsername,
} from "@/lib/github";
import { GitHubSection } from "@/components/github/GitHubSection";
import { ContactCTA } from "@/components/ContactCTA";
import { ScrollReveal } from "@/components/ScrollReveal";

const workingPrinciples = [
  ["Understand the operation", "I start with users, roles, handoffs, data, and the business outcome — not a preferred component library."],
  ["Model the workflow", "I turn the real process into clear states, permissions, failure paths, and responsive product flows."],
  ["Build the connected product", "I connect frontend architecture to APIs, Supabase or Firebase data, commerce systems, and cloud deployment."],
  ["Verify and ship", "I test the critical journey, mobile behavior, permissions, and release path, then communicate what shipped and what comes next."],
] as const;

const coreStrengths = [
  "Commerce and WooCommerce",
  "OMS and internal operations",
  "POS and ERP workflows",
  "Supabase multi-tenant products",
  "Arabic RTL and bilingual UI",
  "API and cloud integrations",
];

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default async function About() {
  const ghSocial = social.find((s) => s.icon === "github")?.link;
  const githubUsername = resolveGithubUsername(
    ghSocial ? parseGithubUsernameFromUrl(ghSocial) : undefined,
  );
  const githubData = githubUsername ? await loadGitHubSectionData(githubUsername) : null;

  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    { title: "How I work", display: true, items: [] },
    { title: "Core strengths", display: true, items: [] },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
    ...(githubData
      ? [{ title: "GitHub", display: true as const, items: [] as string[] }]
      : []),
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Row gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Row>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <ScrollReveal>
            <Column
              id={about.intro.title}
              fillWidth
              minHeight="160"
              vertical="center"
              marginBottom="32"
            >
              {about.calendar.display && (
                <Row
                  fitWidth
                  border="brand-alpha-medium"
                  background="brand-alpha-weak"
                  radius="full"
                  padding="4"
                  gap="8"
                  marginBottom="m"
                  vertical="center"
                  className={styles.blockAlign}
                  style={{
                    backdropFilter: "blur(var(--static-space-1))",
                  }}
                >
                  <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                  <Row paddingX="8">Book a remote call</Row>
                  <IconButton
                    href={about.calendar.link}
                    data-border="rounded"
                    variant="secondary"
                    icon="chevronRight"
                  />
                </Row>
              )}
              <Heading className={styles.textAlign} variant="display-strong-xl">
                {person.name}
              </Heading>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
              {social.length > 0 && (
                <Row
                  className={styles.blockAlign}
                  paddingTop="20"
                  paddingBottom="8"
                  gap="8"
                  wrap
                  horizontal="center"
                  fitWidth
                  data-border="rounded"
                >
                  {social
                        .filter((item) => item.essential)
                        .map(
                    (item) =>
                      item.link && (
                        <React.Fragment key={item.name}>
                          <Row s={{ hide: true }}>
                            <Button
                              key={item.name}
                              href={item.link}
                              prefixIcon={item.icon}
                              label={item.name}
                              size="s"
                              weight="default"
                              variant="secondary"
                            />
                          </Row>
                          <Row hide s={{ hide: false }}>
                            <IconButton
                              size="l"
                              key={`${item.name}-icon`}
                              href={item.link}
                              icon={item.icon}
                              variant="secondary"
                            />
                          </Row>
                        </React.Fragment>
                      ),
                  )}
                </Row>
              )}
            </Column>
          </ScrollReveal>

          {about.intro.display && (
            <ScrollReveal delayMs={80}>
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                {about.intro.description}
              </Column>
            </ScrollReveal>
          )}

          <ScrollReveal delayMs={100}>
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id="How I work" variant="display-strong-s">How I work</Heading>
              {workingPrinciples.map(([title, description]) => (
                <Column key={title} gap="4" padding="20" radius="m" border="neutral-alpha-weak">
                  <Text variant="heading-strong-m">{title}</Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">{description}</Text>
                </Column>
              ))}
            </Column>
          </ScrollReveal>

          <ScrollReveal delayMs={120}>
            <Column fillWidth gap="m" marginBottom="xl">
              <Heading as="h2" id="Core strengths" variant="display-strong-s">Core strengths</Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                I focus on product areas where interface quality and operational correctness must work together.
              </Text>
              <Row wrap gap="8">
                {coreStrengths.map((strength) => <Tag key={strength} size="l">{strength}</Tag>)}
              </Row>
            </Column>
          </ScrollReveal>

          {about.work.display && (
            <>
              <ScrollReveal>
                <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                  {about.work.title}
                </Heading>
              </ScrollReveal>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <ScrollReveal
                    key={`${experience.company}-${experience.role}-${index}`}
                    delayMs={index * 60}
                  >
                    <Column fillWidth>
                      <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Row>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="16">
                        {experience.achievements.map(
                          (achievement: React.ReactNode, achievementIndex: number) => (
                            <Text
                              as="li"
                              variant="body-default-m"
                              key={`${experience.company}-${achievementIndex}`}
                            >
                              {achievement}
                            </Text>
                          ),
                        )}
                      </Column>
                      {experience.images && experience.images.length > 0 && (
                        <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                          {experience.images.map((image, imageIndex) => (
                            <Row
                              key={imageIndex}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </ScrollReveal>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <>
              <ScrollReveal>
                <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                  {about.studies.title}
                </Heading>
              </ScrollReveal>
              <Column fillWidth gap="l" marginBottom="40">
                {about.studies.institutions.map((institution, index) => (
                  <ScrollReveal key={`${institution.name}-${index}`} delayMs={index * 50}>
                    <Column fillWidth gap="4">
                      <Text id={institution.name} variant="heading-strong-l">
                        {institution.name}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {institution.description}
                      </Text>
                    </Column>
                  </ScrollReveal>
                ))}
              </Column>
            </>
          )}

          {about.technical.display && (
            <>
              <ScrollReveal>
                <Heading
                  as="h2"
                  id={about.technical.title}
                  variant="display-strong-s"
                  marginBottom="40"
                >
                  {about.technical.title}
                </Heading>
              </ScrollReveal>
              <Column fillWidth gap="l">
                {about.technical.skills.map((skill, index) => (
                  <ScrollReveal key={`${skill.title}-${index}`} delayMs={index * 50}>
                    <Column fillWidth gap="4">
                      <Text id={skill.title} variant="heading-strong-l">
                        {skill.title}
                      </Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.tags && skill.tags.length > 0 && (
                        <Row wrap gap="8" paddingTop="8">
                          {skill.tags.map((tag, tagIndex) => (
                            <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                              {tag.name}
                            </Tag>
                          ))}
                        </Row>
                      )}
                      {skill.images && skill.images.length > 0 && (
                        <Row fillWidth paddingTop="m" gap="12" wrap>
                          {skill.images.map((image, imageIndex) => (
                            <Row
                              key={imageIndex}
                              border="neutral-medium"
                              radius="m"
                              minWidth={image.width}
                              height={image.height}
                            >
                              <Media
                                enlarge
                                radius="m"
                                sizes={image.width.toString()}
                                alt={image.alt}
                                src={image.src}
                              />
                            </Row>
                          ))}
                        </Row>
                      )}
                    </Column>
                  </ScrollReveal>
                ))}
              </Column>
            </>
          )}

          {githubData && (
            <ScrollReveal>
              <GitHubSection data={githubData} />
            </ScrollReveal>
          )}

          <ScrollReveal>
            <ContactCTA
              eyebrow="Remote availability"
              title="Have an operational problem? Let's turn it into a product."
              description="Based in Cairo and working in Arabic and English. I am available for selected remote roles and product engagements alongside my current work with Sokany on Shams Stores."
            />
          </ScrollReveal>
        </Column>
      </Row>
    </Column>
  );
}
