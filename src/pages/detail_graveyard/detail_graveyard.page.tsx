import { useParams } from "react-router";

/**
 * Todo:
 *  - Add more details about the deleted site
 * @returns 
 */
export function DetailGraveyardPage() {
  const { id } = useParams();

  return (
    <article>
      <h1>Detail Graveyard Page of Id {id}</h1>
    </article>
  );
}
