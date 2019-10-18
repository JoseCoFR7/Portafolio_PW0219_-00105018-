let carnet_field =  document.querySelector("#carnet_field")
let schedule_dropdown =  document.querySelector("#schedule_field")
let late_switch =  document.querySelector("#late_switch")
let submit_btn =  document.querySelector("#submit_btn")

let table_body = document.querySelector("#table_body")
let carnet_regex= new RegExp('^[0-9]{8}$')

let student_list = [];
let serial =0;


/*
    Función para agregar un hijo a la tabla
*/

let printArray = () => {
    table_body.innerHTML =""

    student_list.forEach(elem =>{
        let new_row = document.createElement("tr")
        let datetime = new Date()
    
        let new_cell = document.createElement("td")
        let new_btn = document.createElement("bttun")
        //let new_text = document.createElement("text")

    
        new_row.classList.add("table-active")
        new_row.innerHTML = 
            `<th scope='row'>${elem.carnet}</th>
            <td>${elem.horario}</td>
            <td>${datetime.toLocaleString()}</td>
            <td>${elem.tarde}</td>`

        /*personalizacion del boton*/

        new_btn.className =" btn btn-danger"
        new_btn.innerText ="Drop"
        new_btn.value = elem.id

        //new_input.className = "form-control"
        //new_text.innerText ="carnet"
        //new_text.value = elem.id

        new_btn.addEventListener("click", event=>{
            let id_actual = event.target.value

            student_list.forEach((elemt, pos)=>{
                if (id_actual == elemt.id){
                    student_list.splice(pos, 1)
                    printArray()
                }
            })

        })
        
        new_cell.appendChild(new_btn)
        //new_text.appendChild(new_text)
        new_row.appendChild(new_cell)
        table_body.appendChild(new_row)

    })
}

let addStudent = (carnet, schedule, late)=>{

    student_list.push({
        "id":serial,
        "carnet": carnet,
        "horario": schedule,
        "tarde":late,
    })

    serial++
}

let parseLateSwitch= (value)=>{
    if(value){
        return "Tarde"
    }
    return "A tiempo"
}

submit_btn.addEventListener("click", ()=>{
    let carnet = carnet_field.value
    let schedule = schedule_dropdown.options[schedule_dropdown.selectedIndex].text
    let late = parseLateSwitch(late_switch.checked)

    if(carnet_regex.test(carnet)){
        addStudent(carnet, schedule, late)
        printArray()
    }else{
        alert("Formáto de carnet no válido")
    }
})

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})