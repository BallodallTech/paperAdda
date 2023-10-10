"use client";

import { supabase } from "@/lib/supabse";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";

const LiveUpdate = () => {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await supabase
        .from("updates")
        .select()
        .order("created_at");
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="px-4">
      <h2 className="text-2xl text-center font-semibold">Live Update</h2>

      <div className="w-full mt-4 max-h-[300px] scrollbar-hide overflow-y-scroll">
        <Suspense fallback={<p>Loading...</p>}>
          {posts.map((item: any) => (
            <div
              className="flex py-2 items-end border-b space-x-1"
              key={item.id}
            >
              <h4 className="text-sm font-semibold text-slate-400">
                {item.content}
              </h4>
              <Link target="_blank" href={item.link}>
                <p className="text-xs text-white underline">Link</p>
              </Link>
            </div>
          ))}
        </Suspense>
      </div>
    </section>
  );
};

export default LiveUpdate;
