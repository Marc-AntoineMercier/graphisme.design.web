import { useParams } from "react-router";

export function DetailGraveyardPage() {
  const { id } = useParams();

  return (
    <>
        <h1>Detail Graveyard Page</h1>
    </>
  );
}
