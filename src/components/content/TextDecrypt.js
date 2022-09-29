import React, { useEffect } from "react";
import { useDencrypt } from "use-dencrypt-effect";

const decryptOptions = {
    chars: [
        "あ",
        "い",
        "う",
        "え",
        "お",
        "か",
        "が",
        "き",
        "ぎ",
        "く",
        "ぐ",
        "け",
        "げ",
        "こ",
        "ご",
        "さ",
        "ざ",
        "し",
        "じ",
        "す",
        "ず",
        "せ",
        "ぜ",
        "そ",
        "ぞ",
        "た",
        "だ",
        "ち",
        "ぢ",
        "つ",
        "づ",
        "て",
        "で",
        "と",
        "ど",
        "な",
        "に",
        "ぬ",
        "ね",
        "の",
        "は",
        "ば",
        "ぱ",
        "ひ",
        "び",
        "ぴ",
        "ふ",
        "ぶ",
        "ぷ",
        "へ",
        "べ",
        "ぺ",
        "ほ",
        "ぼ",
        "ぽ",
        "ま",
        "み",
        "む",
        "め",
        "も",
        "や",
        "ゆ",
        "よ",
        "ら",
        "り",
        "る",
        "れ",
        "ろ",
        "わ",
        "ゐ",
        "ゑ",
        "を",
        "ん",
        "ゔ",
    ],
    interval: 50,
};

export const TextDecrypt = (props) => {
    const { result, dencrypt } = useDencrypt(decryptOptions);

    useEffect(() => {
        const updateText = () => {
            dencrypt(props.text || "");
        };

        const action = setTimeout(updateText, 0);

        return () => clearTimeout(action);
    }, [dencrypt, props.text]);

    return (
        <p>
            {result}
            {" "}
        </p>
    );
};
