            //CRUD para os instrutores

import api from '../services/api.js'

        //Get All

async function getInstructors () {
    return await api.get('instrutores')
}

const test = await getInstructors();

console.log(test.data);

        //Get byID

/*

async function getInstructor (id) {
    return await api.get(`instrutores/${id}`)
}

const test2 = await getInstructor(1)
console.log(test2.data)

*/



        //Post

/*

async function createInstructor({nome, turno, categoria}) {
    return await api.post('instrutores', {
        nome,
        turno,
        categoria,
    })
}


const create = await createInstructor({
    nome: "Toreto",
    turno: "noite",
    categoria: "A"
})
console.log(create.data)

*/

        //DELETE

/*

async function deleteInstructor (id) {
    return await api.delete(`instrutores/${id}`)
}

const deletar = await deleteInstructor(7)
console.log(deletar.data)

*/

        //PUT

/*

async function updateInstructor(id, {nome, turno, categoria}) {
    return await api.put(`instrutores/${id}`, {
        nome,
        turno,
        categoria
    })
}

const update = await updateInstructor(3, {
    nome: 'Abreu',
    turno: 'manha',
    categoria: 'B e C'
} )
console.log(update.data)

*/