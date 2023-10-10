import { supabase } from "@/lib/supabse";
import slugify from "slugify";
import { format } from "date-fns";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { data } = (await supabase
    .from("courses")
    .select()
    .filter("id", "eq", slugify(params.slug))
    .limit(1)) as any;

  console.log("slug", params.slug);

  return (
    <div className="min-h-[40vh]">
      <img className="w-full h-[220px]" src={data[0].image} />
      <div className="p-4">
        <h2 className="text-2xl font-semibold">{data[0].title}</h2>
        <p className="text-sm">{data[0].description}</p>

        <p className="text-xs mt-5 text-slate-400">
          {format(new Date(data[0].created_at), "dd/mm/yyyy")}
        </p>
      </div>
    </div>
  );
};

export default Page;
