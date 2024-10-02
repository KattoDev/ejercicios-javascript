/**
 * Clears all inputs given
 * @param in1 Input field #1
 * @param in2 Input field #2
 * @param in3 Input field #3
 * @param in4 Input field #4
 */
export function clearInput(
    in1?: HTMLInputElement,
    in2?: HTMLInputElement,
    in3?: HTMLInputElement,
    in4?: HTMLInputElement
): void {
    const inputs = [in1, in2, in3, in4];

    inputs.forEach((input) => {
        if (!(input === undefined)) {
            input.value = "";
        }
    });
}