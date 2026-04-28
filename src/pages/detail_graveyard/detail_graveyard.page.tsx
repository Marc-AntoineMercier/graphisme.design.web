import { useParams } from "react-router";

export function DetailGraveyardPage() {
  const { id } = useParams();

  return (
    <article>
        <h1>Detail Graveyard Page of Id {id}</h1>
    </article>
  );
}
