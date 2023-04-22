import { Phone } from "lucide-react";

export default function HotlinePage() {
  const hotlines = [
    {
      name: "NIMHANS",
      number: "+91 80461 10007",
    },
    {
      name: "KIRAN",
      number: "1800-599-0019",
    },
    {
      name: "Vandrevala",
      number: "+91 99996 66555",
    },
    {
      name: "Mpower",
      number: "1800-120-820050",
    },
    {
      name: "AASRA",
      number: "+91 98204 66726",
    },
    {
      name: "iCall",
      number: "022-25521111",
    },
  ];

  return (
    <div className="flex flex-1 flex-col justify-center gap-2 font-fraunces">
      <div className="flex justify-between items-center">
        <h1 className="py-4 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Hotlines
        </h1>

        <div>
          <button className="flex gap-2 bg-[#D9D9D9] py-2 px-4 rounded-md border">
            <Phone /> Add
          </button>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {hotlines.map((hotline, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-[#D9D9D9] py-4 px-4 rounded-lg border"
          >
            <div className="flex items-center gap-2">{hotline.name}</div>
            <div className="flex justify-between items-center px-2">
              <div className="text-sm text-opacity-30">{hotline.number}</div>
              <div>
                <a
                  href={`tel:${hotline.number}`}
                  target="_blank"
                  className="bg-[#CDC4BF] px-6 py-2 rounded"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
