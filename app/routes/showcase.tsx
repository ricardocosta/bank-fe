import { Spacer } from "~/components/spacer.tsx";
import { Stack } from "~/components/ui/layout/stack.tsx";
import { Heading } from "~/components/ui/typography/heading.tsx";
import { Monospace } from "~/components/ui/typography/monospace.tsx";
import { Text } from "~/components/ui/typography/text.tsx";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => [{ title: "Epic Notes" }];

export default function Index() {
  return (
    <main className="flex w-full items-center justify-center font-heading">
      <Stack>
        <Heading variant="h1">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Heading variant="h2">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Heading variant="h3">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Heading variant="h4">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Heading variant="h5">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Heading variant="h6">
          The quick brown fox jumps over the lazy dog
        </Heading>
        <Spacer size="sm" />
        <Text size="xs" weight="extraLight">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="light">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="medium">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="bold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xs" weight="extraBold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Spacer size="sm" />
        <Text size="sm" weight="extraLight">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="light">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="medium">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="bold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="sm" weight="extraBold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Spacer size="sm" />
        <Text size="md" weight="extraLight">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="light">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="medium">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="bold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="md" weight="extraBold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Spacer size="sm" />
        <Text size="lg" weight="extraLight">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="light">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="medium">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="bold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="lg" weight="extraBold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Spacer size="sm" />
        <Text size="xl" weight="extraLight">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="light">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="medium">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="bold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Text size="xl" weight="extraBold">
          The quick brown fox jumps over the lazy dog
        </Text>
        <Spacer size="sm" />

        <Monospace size="xs" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Monospace size="xs" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Spacer size="sm" />
        <Monospace size="sm" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Monospace size="sm" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Spacer size="sm" />
        <Monospace size="md" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Monospace size="md" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Spacer size="sm" />
        <Monospace size="lg" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Monospace size="lg" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Spacer size="sm" />
        <Monospace size="xl" weight="regular">
          The quick brown fox jumps over the lazy dog
        </Monospace>
        <Monospace size="xl" weight="semibold">
          The quick brown fox jumps over the lazy dog
        </Monospace>
      </Stack>
    </main>
  );
}
