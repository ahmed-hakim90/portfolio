"use client";

import { useMemo, useState } from "react";
import { Button, Column, Heading, Row, Text } from "@once-ui-system/core";
import { baseURL, contact, person } from "@/resources";
import styles from "./ScheduleCall.module.scss";

const eventDurationMinutes = 30;
const timeZone = "Africa/Cairo";

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function formatDateTimeForIcs(date: string, time: string) {
  return `${date.replaceAll("-", "")}T${time.replace(":", "")}00`;
}

function formatUtcDate(date: Date) {
  return [
    date.getUTCFullYear(),
    pad(date.getUTCMonth() + 1),
    pad(date.getUTCDate()),
    "T",
    pad(date.getUTCHours()),
    pad(date.getUTCMinutes()),
    pad(date.getUTCSeconds()),
    "Z",
  ].join("");
}

function escapeIcsText(value: string) {
  return value
    .replaceAll("\\", "\\\\")
    .replaceAll(";", "\\;")
    .replaceAll(",", "\\,")
    .replaceAll("\n", "\\n");
}

function addMinutes(date: string, time: string, minutes: number) {
  const [year, month, day] = date.split("-").map(Number);
  const [hours, mins] = time.split(":").map(Number);
  const value = new Date(year, month - 1, day, hours, mins + minutes, 0);

  return `${value.getFullYear()}${pad(value.getMonth() + 1)}${pad(value.getDate())}T${pad(
    value.getHours(),
  )}${pad(value.getMinutes())}00`;
}

export function ScheduleCall() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const canCreate = Boolean(date && time);

  const createCalendarEvent = () => {
    if (!canCreate) return;

    const title = `Call ${person.name}`;
    const description = [
      `Call ${person.name}`,
      `Phone: ${contact.phoneInternational}`,
      `WhatsApp: ${contact.whatsapp}`,
      `Email: ${person.email}`,
      `Portfolio: ${baseURL}`,
      "",
      "Created from Ahmed Abdulhakim portfolio.",
    ].join("\n");
    const start = formatDateTimeForIcs(date, time);
    const end = addMinutes(date, time, eventDurationMinutes);
    const uid = `${Date.now()}-call-ahmed-abdulhakim@portfolio`;

    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ahmed Abdulhakim//Portfolio Scheduler//EN",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      `UID:${uid}`,
      `DTSTAMP:${formatUtcDate(new Date())}`,
      `DTSTART;TZID=${timeZone}:${start}`,
      `DTEND;TZID=${timeZone}:${end}`,
      `SUMMARY:${escapeIcsText(title)}`,
      `DESCRIPTION:${escapeIcsText(description)}`,
      `LOCATION:${escapeIcsText(contact.phoneInternational)}`,
      "BEGIN:VALARM",
      "TRIGGER:-PT15M",
      "ACTION:DISPLAY",
      `DESCRIPTION:${escapeIcsText(title)}`,
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "call-ahmed-abdulhakim.ics";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <Column
      fillWidth
      maxWidth="s"
      gap="24"
      padding="24"
      radius="m"
      border="neutral-alpha-weak"
      background="surface"
      className={styles.card}
    >
      <Column gap="12">
        <Text variant="label-default-s" onBackground="brand-weak">
          Africa/Cairo timezone
        </Text>
        <Heading as="h1" variant="display-strong-s" wrap="balance">
          Schedule a call
        </Heading>
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
          Pick a date and time, then add a 30-minute reminder to your phone calendar
          to call {person.name}.
        </Text>
      </Column>

      <Column gap="16" className={styles.form}>
        <label className={styles.field}>
          <span>Date</span>
          <input
            type="date"
            min={minDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            onInput={(event) => setDate(event.currentTarget.value)}
          />
        </label>
        <label className={styles.field}>
          <span>Time</span>
          <input
            type="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
            onInput={(event) => setTime(event.currentTarget.value)}
          />
        </label>
      </Column>

      <Column gap="8">
        <Text variant="body-default-s" onBackground="neutral-weak">
          Phone: {contact.phoneLocal} ({contact.phoneInternational})
        </Text>
        <Text variant="body-default-s" onBackground="neutral-weak">
          The calendar file includes a 15-minute reminder before the call.
        </Text>
      </Column>

      <Row gap="12" wrap>
        <Button
          variant="primary"
          disabled={!canCreate}
          onClick={createCalendarEvent}
          prefixIcon="calendar"
        >
          Add to calendar
        </Button>
        <Button href={contact.tel} variant="secondary">
          Call now
        </Button>
        <Button href={contact.whatsapp} prefixIcon="whatsapp" variant="secondary">
          Message on WhatsApp
        </Button>
      </Row>
    </Column>
  );
}
