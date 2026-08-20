import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { about, contact, person, social } from "@/resources";

type ContactCTAProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
};

export function ContactCTA({
  eyebrow = "Next step",
  title = "Let's talk about a system your team will actually use.",
  description = `${person.name} builds storefronts, OMS workflows, ERP dashboards, and Arabic RTL products — starting from the screens operators open every day.`,
}: ContactCTAProps) {
  const whatsappLink = social.find((item) => item.icon === "whatsapp")?.link || contact.whatsapp;
  const emailLink = social.find((item) => item.icon === "email")?.link || `mailto:${person.email}`;

  return (
    <Column
      fillWidth
      gap="20"
      padding="32"
      radius="m"
      border="neutral-alpha-weak"
      background="surface"
      marginTop="40"
      marginBottom="24"
    >
      <Column gap="12" maxWidth="s">
        <Text variant="label-default-s" onBackground="brand-weak">
          {eyebrow}
        </Text>
        <Heading as="h2" variant="display-strong-xs" wrap="balance">
          {title}
        </Heading>
        <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
          {description}
        </Text>
      </Column>
      <Row gap="12" wrap>
        {about.calendar.display && (
          <Button href={about.calendar.link} prefixIcon="calendar" variant="primary">
            Schedule a call
          </Button>
        )}
        {whatsappLink && (
          <Button href={whatsappLink} prefixIcon="whatsapp" variant="secondary">
            WhatsApp
          </Button>
        )}
        {emailLink && (
          <Button href={emailLink} prefixIcon="email" variant="secondary">
            Email
          </Button>
        )}
        <Button href="/work" variant="secondary" suffixIcon="arrowRight">
          View projects
        </Button>
      </Row>
    </Column>
  );
}
