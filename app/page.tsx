import Image from "next/image";
import Map from "./components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-full flex-col items-center justify-between pr-16 bg-[#1f3540]">
      <Map />
    </main>
  );
}
