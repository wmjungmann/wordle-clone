"use client";

import {useRef} from "react";


const CharInput = () => {

    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    
    function handleAutoTab(i: number, e:React.KeyboardEvent<HTMLInputElement>) {
        const input = inputRefs.current[i];

        // Ensure inputs value is not null
        if (!input) return;

        // Handle backspace
        if(e.key === "Backspace") {
            // If there is a value, delete and do not move. If there is no value, move back a space.
            inputRefs.current[i - 1]?.focus();
        }
        if(e.key === "Delete") {
            inputRefs.current[i + 1]?.focus();
        }
        
        //
        if (e.key.length === 1 && i < 4) {
            inputRefs.current[i+1]?.focus();
        }
    

    };

    return (
        <div className="flex flex-col-5 ">
            {Array.from({length: 5}).map((_, i) => (
                <div className="p-2" key={i}>
                    <input  
                        type="text"
                        ref={(el) => {
                            inputRefs.current[i] = el;
                        }}
                        maxLength={1}
                        className="size-25 border rounded-md items-center justify-items-center text-4xl font-bold uppercase" 
                        onKeyDown={(e) => handleAutoTab(i, e)}
                    />
                </div>
            ))}
        </div>
    );
};

export default CharInput;