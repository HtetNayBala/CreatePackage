export const myName = 'Htet Nay Bala';
export const showMyName = (newName = myName) => console.log(newName);;
export const showMyNameUi = (newName=myName,top=0,right=0) => {
    const div = document.createElement('div');
    div.style.color = 'white';
    div.style.backgroundColor = 'black';
    div.style.position = 'fixed';
    div.style.top = top;
    div.style.right = right;
    div.style.fontSize = 100+'px';
    div.innerHTML = `<h2>${newName}</h2>`;
}