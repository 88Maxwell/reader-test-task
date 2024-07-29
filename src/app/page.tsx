import { TEXT } from "./stubData";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{TEXT.header}</h1>
      <div>
        {TEXT.texts.map((v) => (
          <p key={v}>{v}</p>
        ))}
      </div>
    </main>
  );
}
