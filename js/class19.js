document.writeln("Class 19" + "<br>");
// let a = document.querySelector(".para");
// let a = document.querySelectorAll(".para");

// console.log(a);

// function koiBhiName() {
//   alert("Hello World!");
// }

function fun() {
  alert("Hello World!");
}

// let btn = document.getElementById("btn");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  alert("Hello World!");
});

let a = 90;
let b = 20;

// if (a >= b) {
//   document.writeln(a + "a");
// } else {
//   document.writeln(b + "b");
// }

// let c = a >= b ? a : b;
// document.writeln(c);



{/* <script>
        let inputValue = document.getElementById('myInput');
    

        inputValue.addEventListener("keypress",()=>{
            const textValue  = inputValue.value.toLowerCase();

            const  items = document.querySelectorAll('.card');

            items.forEach((items)=>{
                const text = items.textContent.toLowerCase();


                items.style.display = text.includes(textValue) ? 'inline' : 'none';
            });




        })


    </script> */}