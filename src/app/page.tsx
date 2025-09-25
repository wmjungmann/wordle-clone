import Image from "next/image";
import CharInput from "./components/char-input";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {

  return (
    <div className="font-sans flex flex-col min-h-screen">
      
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="flex-[8] flex flex-col w-full justify-center">

        <div className="flex h-10 items-center justify-center">
          <h1 className="text-4xl font-bold">Guess the word!</h1>
        </div>
        
        <form className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <CharInput />
            <CharInput />
            <CharInput />
            <CharInput />
            <CharInput />
            <CharInput />
          </div>
          <div className="h-15 w-30">
            <button type="submit" className="h-full w-full border rounded-sm bg-stone-300 font-bold hover:cursor-pointer">Submit</button>
          </div>
        </form>

      </main>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}
