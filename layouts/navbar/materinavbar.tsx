import BackButton from "@/components/button/backbutton";

export default function MateriNavbar({
  value,
  total,
}: {
  value: number;
  total: number;
}) {
  const width = value <= total ? (value / total) * 100 : 100;
  return (
    <nav className="flex flex-row justify-between w-full">
      <BackButton to="/app/materi/aksara-dasar" />
      <div className="bg-slate-300 w-2/3 rounded-full h-6">
        <div
          className={`bg-blue-700 h-full rounded-full`}
          style={{ width: width + "%" }}
        ></div>
      </div>
      <p>
        {value <= total ? value : total}/{total}
      </p>
    </nav>
  );
}
