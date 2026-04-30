import { useAppStore } from "@/store";
import { useForm } from "react-hook-form";

export type GraveyardFormData = {
  search: string;
};

/**
 *Todo:
 * - No Description 
 * @returns 
 */
export function GraveyardPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<GraveyardFormData>();
  const graveyardData = useAppStore(state => state.data.data);

  const onSubmit = (data: GraveyardFormData) => {
    console.log(data);
  };

  const search = watch("search") || "";

  const filteredData = graveyardData.filter(item => item.siteName.toLowerCase().includes(search.toLowerCase()));

  return (
    <article>
      <div>
        <h1>Graveyard Page</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          defaultValue={""} 
          {...register("search")} />
        {errors.search && <span>This field is required</span>}
      </form>
      <div>
        <div>
          Content
          {filteredData.map(item => (
            <div key={item.id}>
              <h2>{item.siteName}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
