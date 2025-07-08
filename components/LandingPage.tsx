"use client";
import { SignIn } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Image from "next/image";

// Marks this file as a Client Component

export default function LandingPage() {
  return (
    <main className="flex items-center p-40 gap-24 animate-fade-in max-md:flex-col">
      <section className="flex flex-col items-center">
        <Image src="/assets/logo.svg" width={300} height={300} alt="Logo" />

        <h1 className="text-2xl font-black lg:text-3xl mt-20">
          Your time, perfectly planned
        </h1>

        <p className="font-extralight mt-5">
          Power your workflow with effortless time coordination that feels like
          magic
        </p>
      </section>

      <div className="mt-3">
        <SignIn
          routing="hash"
          appearance={{
            baseTheme: shadesOfPurple,
          }}
        />
      </div>
    </main>
  );
}
