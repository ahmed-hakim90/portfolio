import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import { Mailchimp, ContactCTA } from "@/components";
import { Posts } from "@/components/blog/Posts";
import { baseURL, blog, person, newsletter } from "@/resources";
import { getPosts } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: blog.title,
    description: blog.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(blog.title)}`,
    path: blog.path,
  });
}

export default function Blog() {
  const totalPosts = getPosts(["src", "app", "blog", "posts"]).length;
  const hasEarlierPosts = totalPosts > 3;

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        title={blog.title}
        description={blog.description}
        path={blog.path}
        image={`/api/og/generate?title=${encodeURIComponent(blog.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}/blog`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column gap="12" marginBottom="l" paddingX="24" maxWidth="s">
        <Text variant="label-default-s" onBackground="brand-weak">
          Writing
        </Text>
        <Heading variant="display-strong-s" wrap="balance">
          {blog.title}
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Case studies and notes on Sokany commerce systems, ERP, GovTech RTL products, and shipping
          real operational software.
        </Text>
      </Column>
      <Column fillWidth flex={1} gap="40">
        <Posts range={[1, 1]} thumbnail />
        <Posts range={[2, 3]} columns="2" thumbnail direction="column" />
        {newsletter.display && <Mailchimp marginBottom="l" />}
        {hasEarlierPosts && (
          <>
            <Heading as="h2" variant="heading-strong-xl" marginLeft="l">
              Earlier posts
            </Heading>
            <Posts range={[4]} columns="2" />
          </>
        )}
        <Column paddingX="l">
          <ContactCTA
            title="Prefer a walkthrough over a blog post?"
            description="Schedule a call and I'll walk you through the systems behind these write-ups."
          />
        </Column>
      </Column>
    </Column>
  );
}
