const euros = document.querySelector("#euros");
const dollars = document.querySelector("#dollars");
const reset = document.querySelector("#reset");
const output = document.querySelector(".output");
const original = output.innerHTML;
const sterling = document.querySelector("input");
const euroRate = 1.17;
const yankeeRate = 1.29;

euros.addEventListener("click", () => {
    const converted = (sterling.value * euroRate).toFixed(2);
    let outputText = `<b>£${sterling.value} in euros is ${converted}</b>`;
    output.innerHTML = outputText;
}
);

dollars.addEventListener("click", () => {
    const converted = (sterling.value * yankeeRate).toFixed(2);
    let outputText = `<b>£${sterling.value} in us dollars is ${converted}</b>`;
    output.innerHTML = outputText;
}
);

reset.addEventListener("click", () => {
    output.innerHTML = original;
    sterling.value = 0;
}
);