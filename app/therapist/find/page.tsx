import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { faker } from "@faker-js/faker";
import Link from "next/link";

export default function TherapistFindPage() {
  const therapists = new Array(21).fill(0).map(() => ({
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    location: `${faker.address.city()}, ${faker.address.state()} ${faker.address.zipCode()} ${faker.address.country()}`,
    contact: faker.phone.number(),
  }));

  return (
    <div className="flex flex-1 flex-col gap-4 pb-4 font-fraunces">
      <h1 className="py-4 text-center scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Therapists
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {therapists.map((therapist, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 bg-[#D9D9D9] py-4 px-4 rounded-lg border"
          >
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src={therapist.avatar} />
              </Avatar>
              {therapist.name}
            </div>

            <div className="flex justify-between items-center px-2">
              <div className="text-sm text-opacity-30">{therapist.location}</div>
              <Link
                href={`tel:${therapist.contact}`}
                target="_blank"
                className="bg-[#CDC4BF] px-6 py-1 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
