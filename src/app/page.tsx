"use client";

import { useState } from "react";
import Row from "./components/row";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  
  const [activeRow, setActiveRow] = useState<number>(0);

  const GuessWord = () => {
    console.log("Word guessed");
    handleRowUpdate(1);
  };

  const handleRowUpdate = (rowIndex: number) => {
    setActiveRow(rowIndex);
  };

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
            {
              Array.from({ length: 6 }).map((_, i) => (
                <Row key = {i} disabled={i !== activeRow} />
              ))
            }
          </div>
          <div className="h-15 w-30">
            <button 
              type="button" 
              className="h-full w-full border rounded-sm bg-stone-300 font-bold hover:cursor-pointer" 
              onClick={GuessWord}
            >
              Submit
            </button>
          </div>
        </form>

      </main>

      {/* Footer */}
      <Footer /> 
    </div>
  );
}
