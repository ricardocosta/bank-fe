import { Form, useSearchParams, useSubmit } from "@remix-run/react";
import { useId } from "react";

import { useDebounce, useIsPending } from "#app/utils/misc.tsx";

import { Icon } from "./ui/icon.tsx";
import { Input } from "./ui/input.tsx";
import { Label } from "./ui/label.tsx";
import { StatusButton } from "./ui/status-button.tsx";

export function SearchBar({
  status,
  autoFocus = false,
  autoSubmit = false,
}: {
  status: "idle" | "pending" | "success" | "error";
  autoFocus?: boolean;
  autoSubmit?: boolean;
}) {
  const id = useId();
  const [searchParams] = useSearchParams();
  const submit = useSubmit();
  const isSubmitting = useIsPending({
    formMethod: "GET",
    formAction: "/users",
  });

  const handleFormChange = useDebounce((form: HTMLFormElement) => {
    submit(form);
  }, 400);

  return (
    <Form
      action="/users"
      className="flex flex-wrap items-center justify-center gap-2"
      method="GET"
      onChange={(e) => autoSubmit && handleFormChange(e.currentTarget)}
    >
      <div className="flex-1">
        <Label className="sr-only" htmlFor={id}>
          Search
        </Label>
        <Input
          // Autofocus will be handled by the consumers
          // By default, it's disabled, so no a11y issues here
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={autoFocus}
          className="w-full"
          defaultValue={searchParams.get("search") ?? ""}
          id={id}
          name="search"
          placeholder="Search"
          type="search"
        />
      </div>
      <div>
        <StatusButton
          className="flex w-full items-center justify-center"
          size="sm"
          status={isSubmitting ? "pending" : status}
          type="submit"
        >
          <Icon name="magnifying-glass" size="sm" />
          <span className="sr-only">Search</span>
        </StatusButton>
      </div>
    </Form>
  );
}
