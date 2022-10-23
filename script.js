const elems = ["C", "D", "E", "F", "G", "A", "B", "Cs"];

for (let i = 0; i < elems.length; i++) {
    {
        const element = document.getElementById(elems[i]);
        element.addEventListener("click", clicked);
    }
}

const key_codes = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];

document.addEventListener("keydown", (event) => {

    const code = event.key;
    let index = key_codes.indexOf(code);
    if (index == -1) {
        return;
    }
    let id = elems[index];
    const butt = document.getElementById(id);
    butt.click();
});


function clicked(event) {
    let element = event.target;
    let id = element.id;

    let path = 'sounds/' + id + '.mp3';

    const sound = new Audio(path);
    sound.play();
}