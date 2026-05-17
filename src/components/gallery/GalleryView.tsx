"use client";

import { useMemo, useState } from "react";
import { Column, Grid, Heading, Media, Row, SmartLink, Tag, Text } from "@once-ui-system/core";
import styles from "./GalleryView.module.scss";

export type GalleryImageItem = {
  src: string;
  alt: string;
  orientation: string;
  title: string;
  slug: string;
  publishedAt: string;
};

function getProjectType(title: string) {
  const value = title.toLowerCase();

  if (value.includes("erp") || value.includes("production")) return "ERP";
  if (value.includes("oms")) return "Operations";
  if (value.includes("store") || value.includes("woocommerce")) return "Commerce";
  if (value.includes("quarantine")) return "Public services";
  if (value.includes("machinery")) return "Industrial";
  return "Product";
}

export default function GalleryView({ images }: { images: GalleryImageItem[] }) {
  const projects = useMemo(
    () => Array.from(new Map(images.map((image) => [image.slug, image.title])).entries()),
    [images],
  );
  const [activeProject, setActiveProject] = useState("all");

  const filteredImages =
    activeProject === "all"
      ? images
      : images.filter((image) => image.slug === activeProject);
  const featuredImage = filteredImages[0];
  const secondaryImages = filteredImages.slice(1);

  return (
    <Column fillWidth gap="24" paddingX="l" paddingBottom="xl">
      <Grid columns="3" m={{ columns: 3 }} s={{ columns: 1 }} gap="12" fillWidth>
        <Column
          border="neutral-alpha-weak"
          background="surface"
          radius="m"
          padding="20"
          gap="8"
        >
          <Text variant="heading-strong-l">{images.length}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Screenshots
          </Text>
        </Column>
        <Column
          border="neutral-alpha-weak"
          background="surface"
          radius="m"
          padding="20"
          gap="8"
        >
          <Text variant="heading-strong-l">{projects.length}</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Projects
          </Text>
        </Column>
        <Column
          border="neutral-alpha-weak"
          background="surface"
          radius="m"
          padding="20"
          gap="8"
        >
          <Text variant="heading-strong-l">Systems</Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            ERP, commerce, operations, industrial, and public-service work
          </Text>
        </Column>
      </Grid>

      <Row wrap gap="8" className={styles.filters}>
        <button
          type="button"
          className={activeProject === "all" ? styles.activeFilter : styles.filter}
          onClick={() => setActiveProject("all")}
        >
          All projects
        </button>
        {projects.map(([slug, title]) => (
          <button
            type="button"
            key={slug}
            className={activeProject === slug ? styles.activeFilter : styles.filter}
            onClick={() => setActiveProject(slug)}
          >
            {title}
          </button>
        ))}
      </Row>

      {featuredImage && (
        <Column
          fillWidth
          border="neutral-alpha-weak"
          background="surface"
          radius="m"
          padding="20"
          gap="16"
          className={styles.featuredCard}
        >
          <Media
            enlarge
            priority
            sizes="(max-width: 960px) 100vw, 1120px"
            radius="m"
            aspectRatio="16 / 9"
            src={featuredImage.src}
            alt={featuredImage.alt}
          />
          <Row fillWidth horizontal="between" vertical="center" gap="16" wrap>
            <Column gap="8">
              <Row gap="8" wrap>
                <Tag size="s">{getProjectType(featuredImage.title)}</Tag>
                <Tag size="s">{featuredImage.publishedAt}</Tag>
              </Row>
              <Heading as="h2" variant="heading-strong-xl">
                {featuredImage.title}
              </Heading>
            </Column>
            <SmartLink href={`/work/${featuredImage.slug}`}>Open case study →</SmartLink>
          </Row>
        </Column>
      )}

      {secondaryImages.length > 0 && (
        <Grid columns="2" s={{ columns: 1 }} gap="16" fillWidth>
          {secondaryImages.map((image, index) => (
            <Column
              key={image.src}
              border="neutral-alpha-weak"
              background="surface"
              radius="m"
              padding="12"
              gap="12"
              className={styles.imageCard}
            >
              <Media
                enlarge
                priority={index < 6}
                sizes="(max-width: 560px) 100vw, 50vw"
                radius="m"
                aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
                src={image.src}
                alt={image.alt}
              />
              <Row fillWidth horizontal="between" vertical="center" gap="12" wrap>
                <Column gap="4">
                  <Text variant="label-default-s" onBackground="brand-weak">
                    {getProjectType(image.title)}
                  </Text>
                  <Text variant="heading-strong-m">{image.title}</Text>
                </Column>
                <SmartLink href={`/work/${image.slug}`}>Case study →</SmartLink>
              </Row>
            </Column>
          ))}
        </Grid>
      )}
    </Column>
  );
}
