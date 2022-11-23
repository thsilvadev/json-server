            //CRUD para os veículos

            import api from '../services/api.js'
        
            //Get All
    
    async function getStudents () {
        return await api.get('alunos')
    }
    
    const test = await getStudents();
    
    console.log(test.data);
    
            //Get byID
    
        
    
    async function getStudent (id) {
        return await api.get(`alunos/${id}`)
    }
    
    const test2 = await getStudent(1)
    console.log(test2.data)
    
        

            //Post
    
        /*

    async function createStudent({nome, idade, pago}) {
        return await api.post('alunos', {
            nome,
            idade,
            pago
            
        })
    }
    
    const create = await createStudent({
        nome: "Pablo",
        idade: 20,
        pago: false
    })
    console.log(create.data)
    
        */
    
            //DELETE

        /*

    async function deleteStudent (id) {
        return await api.delete(`alunos/${id}`)
    }
    
    const deletar = await deleteStudent(5)
    console.log(deletar.data)

        */        
    
            //PUT

        
        
    async function updateStudent(id, {nome, idade, pago}) {
        return await api.put(`alunos/${id}`, {
            nome,
            idade,
            pago})
    }
    
    const update = await updateStudent(3, {
        nome: "Tayana",
        idade: 23,
        pago: true
    })

    console.log(update.data)
        
        
    