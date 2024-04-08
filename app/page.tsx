import Image from "next/image";
import Map from "./components/Map";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-full items-center justify-center bg-[#1f3540] p-1">
      <div className="w-full min-h-[calc(100dvh-4rem)] flex items-center justify-center pb-5 pr-16 border-1 border-white">
        <Map />
      </div>
    </main>
  );
}
