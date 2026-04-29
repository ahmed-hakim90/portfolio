import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, person, terms } from "@/resources";

export async function generateMetadata() {
  return Meta.generate({
    title: terms.title,
    description: terms.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(terms.title)}`,
    path: terms.path,
  });
}

export default function TermsPage() {
  return (
    <Column maxWidth="m" paddingTop="24" paddingX="16" paddingBottom="xl" gap="24" style={{ direction: "rtl" }}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={terms.title}
        description={terms.description}
        path={terms.path}
        image={`/api/og/generate?title=${encodeURIComponent(terms.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${terms.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Heading as="h1" variant="display-strong-l" wrap="balance">
        شروط الموقع وسياسة الاستخدام
      </Heading>
      <Text variant="body-default-s" onBackground="neutral-weak">
        آخر تحديث: أبريل 2026 · المالك والمُنفّذ: {person.name}
      </Text>
      <Column fillWidth gap="32">
        {terms.sections.map((section) => (
          <Column key={section.title} fillWidth gap="12">
            <Heading as="h2" variant="heading-strong-l">
              {section.title}
            </Heading>
            <Text variant="body-default-l" style={{ lineHeight: 1.7 }}>
              {section.content}
            </Text>
          </Column>
        ))}
      </Column>
    </Column>
  );
}
