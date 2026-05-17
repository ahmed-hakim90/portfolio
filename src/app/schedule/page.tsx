import { Column, Meta, Schema } from "@once-ui-system/core";
import { ScheduleCall } from "@/components/schedule/ScheduleCall";
import { about, baseURL, person } from "@/resources";

const title = "Schedule a call – Ahmed Abdulhakim";
const description =
  "Choose a date and time, then add a calendar reminder to call Ahmed Abdulhakim.";

export async function generateMetadata() {
  return Meta.generate({
    title,
    description,
    baseURL,
    path: "/schedule",
    image: `/api/og/generate?title=${encodeURIComponent(title)}`,
  });
}

export default function SchedulePage() {
  return (
    <Column maxWidth="m" fillWidth horizontal="center" paddingY="xl" paddingX="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path="/schedule"
        title={title}
        description={description}
        image={`/api/og/generate?title=${encodeURIComponent(title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <ScheduleCall />
    </Column>
  );
}
