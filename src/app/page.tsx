import clsx from "clsx";
import { TEXT } from "./stubData";

export default function Home() {
  return (
    <main
      className={clsx(
        "min-h-screen p-24",
        "bg-white text-light-label-light-main-text",
        "dark:bg-black dark:text-dark-label-primary",
      )}
    >
      <h1 className="text-3.5xl mb-3">{TEXT.header}</h1>
      <div>
        {TEXT.texts.map((v) => (
          <p key={v}>{v}</p>
        ))}
      </div>
    </main>
  );
}
