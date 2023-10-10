"use client";

import { supabase } from "@/lib/supabse";
import { useEffect, useState } from "react";
import { MoveDown, ArrowDownFromLine } from "lucide-react";
import { format } from "date-fns";

type CurrentAffair = {
  id: string;
};

const CurrentAffair = () => {
  const [currentAffair, setCurrentAffair] = useState<any>([]);

  useEffect(() => {
    const fetchCurrentAffair = async () => {
      const { data } = await supabase.from("currentAffair").select();
      setCurrentAffair(data);
    };

    const fetchChannels = async () => {
      const channels = supabase.getChannels();
      console.log("channels", channels);
    };

    fetchChannels();
    fetchCurrentAffair();
  }, []);

  const DownloadFile = async (externalUrl: string, fileName: string) => {
    try {
      const res = await fetch(externalUrl);
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;

      a.download = fileName || "downloaded-file"; // Set the filename
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="mt-5">
      <h2 className="text-2xl text-center font-semibold">Current Affair</h2>
      <div className="h-[300px] scrollbar-hide overflow-y-scroll ">
        {currentAffair.map((item: any) => (
          <div
            key={item.id}
            className="w-full flex mt-5 items-center justify-between bg-white text-black rounded-xl shadow-lg  p-5"
          >
            <div className="flex space-x-2 items-center">
              <img
                src="https://www.iconpacks.net/icons/2/free-pdf-file-icon-3382-thumb.png"
                className="w-10 h-10 "
              />
              <div>
                <h3 className="text-xl font-semibold">Current Updates</h3>
                <p className="text-sm text-slate-500">
                  {currentAffair[0]?.created_at &&
                    format(
                      new Date(currentAffair[0]?.created_at),
                      "MM/dd/yyyy"
                    )}
                </p>
              </div>
            </div>

            <button
              onClick={() =>
                DownloadFile(
                  currentAffair[0]?.link,
                  `Current_update_${currentAffair[0]?.created_at.split("_")[0]}`
                )
              }
              className="bg-slate-300 p-2 border-2 rounded-full border-indigo-500"
            >
              <ArrowDownFromLine className="text-indigo-500" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CurrentAffair;
