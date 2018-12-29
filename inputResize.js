(()=>{
    let input = document.getElementsByTagName('input');
    input = Array.prototype.slice.call(input);
    input.map((element)=>{
            element.style.width = element.placeholder.length + 1 +'rem';
        })
})();
const resize = (element) =>{
    element.style.width = element.value.length + 1 +'rem';
}