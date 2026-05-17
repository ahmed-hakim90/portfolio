import { Column, Heading, Meta, Schema, Text } from "@once-ui-system/core";
import GalleryView from "@/components/gallery/GalleryView";
import { baseURL, gallery, person } from "@/resources";
import { getProjectGalleryImages } from "@/utils/utils";

export async function generateMetadata() {
  return Meta.generate({
    title: gallery.title,
    description: gallery.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(gallery.title)}`,
    path: gallery.path,
  });
}

export default function Gallery() {
  const images = getProjectGalleryImages();

  return (
    <Column maxWidth="l" fillWidth gap="32" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={gallery.title}
        description={gallery.description}
        path={gallery.path}
        image={`/api/og/generate?title=${encodeURIComponent(gallery.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${gallery.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column maxWidth="s" gap="16" paddingX="l">
        <Text variant="label-default-s" onBackground="brand-weak">
          Project Screenshots
        </Text>
        <Heading as="h1" variant="display-strong-m" wrap="balance">
          Systems gallery
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          A visual archive of ERP platforms, commerce systems, operations dashboards,
          public-service portals, and industrial B2B products.
        </Text>
      </Column>
      <GalleryView images={images} />
    </Column>
  );
}
