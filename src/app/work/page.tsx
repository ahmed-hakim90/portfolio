import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { baseURL, about, person, work } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { ContactCTA } from "@/components/ContactCTA";

export async function generateMetadata() {
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default function Work() {
  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" horizontal="center" align="center" gap="12" marginBottom="l">
        <Text variant="label-default-s" onBackground="brand-weak">
          Case studies
        </Text>
        <Heading variant="display-strong-s" align="center" wrap="balance">
          Systems I ship at Sokany — and beyond
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" align="center" wrap="balance">
          Flagship work first: Shams Stores (remote with Sokany, Aug 2026), Sokany storefront & OMS,
          then manufacturing ERP, GovTech RTL portals, and industrial B2B products.
        </Text>
      </Column>
      <Projects pinFeatured />
      <Column paddingX="l">
        <ContactCTA
          title="Need a similar system for your team?"
          description="I can help design and ship storefronts, OMS workflows, ERP modules, and Arabic RTL products tied to real operations."
        />
      </Column>
    </Column>
  );
}
