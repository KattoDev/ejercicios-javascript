const exercises = [
    document.getElementById("ejercicio-2"),
    document.getElementById("ejercicio-3"),
    document.getElementById("ejercicio-4"),
    document.getElementById("ejercicio-5"),
    document.getElementById("ejercicio-6"),
    document.getElementById("ejercicio-7"),
    document.getElementById("ejercicio-8"),
    document.getElementById("ejercicio-9"),
    document.getElementById("ejercicio-10"),
];

function ToggleExcersise(exerciseNum) {
    exercises.forEach((element) => {
        element.classList.add("hidden");
    });
    exercises[exerciseNum - 1].classList.toggle("hidden");
}