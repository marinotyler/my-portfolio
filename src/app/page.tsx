import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div >
        <Image
        src="/headshot.png"
        width="200"
        height="200"
        alt="headshot of website builder"
        />
        Welcome to my portfolio
      </div>
    </main>
  );
}
