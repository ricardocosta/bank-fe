import { Index as ConfettiShower } from "confetti-react";
import { ClientOnly } from "remix-utils/client-only";

export function Confetti({ id }: { id?: string | null }) {
  if (!id) {
    return null;
  }

  return (
    <ClientOnly>
      {() => (
        <ConfettiShower
          key={id}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
          run={Boolean(id)}
          width={window.innerWidth}
        />
      )}
    </ClientOnly>
  );
}
