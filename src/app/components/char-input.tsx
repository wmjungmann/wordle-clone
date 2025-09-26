"use client";

import { forwardRef, KeyboardEvent} from "react";

interface CharInputProps {
    disabled: boolean;
    onKeyNav: (e: KeyboardEvent<HTMLInputElement>) => void;
}


const CharInput = forwardRef<HTMLInputElement, CharInputProps>(
    ({disabled, onKeyNav}, ref) => {

    return (
        <input  
            type="text"
            disabled={disabled}
            ref={ref}
            maxLength={1}
            className="size-25 border rounded-smitems-center justify-items-center text-4xl font-bold uppercase caret-transparent disabled:bg-gray-200" 
            onKeyUp ={onKeyNav}
        />
    );
}
);

CharInput.displayName = "CharInput";
export default CharInput;