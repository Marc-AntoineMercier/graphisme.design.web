import { useAppStore } from "@/store";

export function GraveyardPage() {
  const graveyardData = useAppStore(state => state.data);

  return (
    <>
      <h1>Graveyard Page</h1>
    </>
  );
}
