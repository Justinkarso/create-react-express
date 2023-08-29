import React from "react";

export default function Home() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="bg-gradient-to-bl from-black via-zinc-600 to-zinc-700 h-screen flex flex-col items-center justify-center text-white gap-4">
      <h1 className="font-bold text-4xl">React, Express & Tailwind</h1>
      <p className="font-medium">Counter: {counter}</p>
      <div className="flex flex-col md:flex-row gap-2">
        <button
          className="bg-zinc-500 hover:bg-zinc-700 border border-transparent hover:border-zinc-700 active:bg-zinc-900 active:border-bg-zinc-600 text-white font-bold py-2 px-4 rounded transition-all duration-150"
          onClick={() => setCounter(counter + 1)}
        >
          +
        </button>
        <button
          className="bg-zinc-500 hover:bg-zinc-700 border border-transparent hover:border-zinc-700 active:bg-zinc-900 active:border-bg-zinc-600 text-white font-bold py-2 px-4 rounded transition-all duration-150"
          onClick={() => setCounter(counter - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
}
