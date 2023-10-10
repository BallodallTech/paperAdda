const StudentCorner = () => {
  const list = new Array(10);

  console.log("list", list);

  return (
    <section className="w-[90%] mx-auto">
      <div className="overflow-x-scroll h-[200px] w-full">
        {list.map((item, index) => (
          <article className="h-[150px] w-[200px] bg-slate-200" key={index}>
            <h2>Title name</h2>
            <p className="text-xs mt-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              est tenetur fugiat quos aspernatur culpa autem, aliquam saepe
              praesentium at.
            </p>
          </article>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-5">
        <article className="p-10 bg-zinc-700 ring-2 rounded-lg ring-zinc-400"></article>
        <article className="p-10 bg-zinc-700 ring-2 rounded-lg ring-zinc-400"></article>
        <article className="p-10 bg-zinc-700 ring-2 rounded-lg ring-zinc-400"></article>
        <article className="col-span-4 p-10 bg-zinc-700 ring-2 rounded-lg ring-zinc-400"></article>
      </div>
    </section>
  );
};

export default StudentCorner;
