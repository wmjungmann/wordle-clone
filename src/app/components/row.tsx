"use client";
import { useRef, KeyboardEvent} from "react";
import CharInput from "./char-input";

interface RowProps {
    disabled: boolean;
}

const Row = ({disabled}: RowProps) => {
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleKey = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
        const input = inputRefs.current[i];

        if (!input) {
            return;
        }

        if (e.key === "Backspace") {
            inputRefs.current[i - 1]?.focus();
        } 
        else if (e.key === "Delete") {
            inputRefs.current[i + 1]?.focus();
        } 
        else if (e.key.length === 1 && i < 4) {
            input.value = e.key;
            inputRefs.current[i + 1]?.focus();
        }
    };


    return (
        <div className="flex p-2">
            {
                Array.from({ length: 5 }).map((_, i) => (
                    <CharInput
                        key = {i}
                        disabled = {disabled}
                        ref = {(el) => {
                            inputRefs.current[i] = el;
                        }}
                        onKeyNav = {(e) => handleKey(i, e)}
                    />
                ))
            }
        </div>
    )

};

export default Row;