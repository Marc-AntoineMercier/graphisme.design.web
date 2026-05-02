import { useAppStore } from "@/store";
import type { DeletedSite } from "@/utils";
import { useForm } from "react-hook-form";

export type FilterDataContext = {
  search: string;
}

const filterData = (context: FilterDataContext) => (item: DeletedSite): boolean => item.siteName.toLowerCase().includes(context.search.toLowerCase());

export type GraveyardFormData = {
  search: string;
};

export function GraveyardPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<GraveyardFormData>();
  const graveyardData = useAppStore(state => state.site.data);
  const search = watch("search") || "";

  const onSubmit = (data: GraveyardFormData) => {
    console.log(data);
  };

  const filteredData = graveyardData.filter(filterData({ search }));

  return (
    <article>
      <div>
        <h1>Graveyard Page</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text" 
          defaultValue={""} 
          placeholder={"Search"}
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
