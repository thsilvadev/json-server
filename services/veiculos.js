            //CRUD para os veículos

            import api from '../services/api.js'
        
            //Get All
    
    async function getVehicles () {
        return await api.get('veiculos')
    }
    
    const test = await getVehicles();
    
    console.log(test.data);
    
            //Get byID
    
        /*
    
    async function getVehicle (id) {
        return await api.get(`veiculos/${id}`)
    }
    
    const test2 = await getVehicle(1)
    console.log(test2.data)
    
        */

            //Post
    
        /*
    
    async function createVehicle({modelo, marca, ano, quilometragem, categoria, foto}) {
        return await api.post('veiculos', {
            modelo,
            marca,
            ano,
            quilometragem,
            categoria,
            foto
        })
    }
    
    const create = await createVehicle({
        modelo: "Palio",
        marca: "Fiat",
        ano: "2016",
        quilometragem: 48089,
        categoria: "B",
        foto: ""
    })
    console.log(create.data)
    
        */
    
            //DELETE

        /*

    async function deleteVehicle (id) {
        return await api.delete(`veiculos/${id}`)
    }
    
    const deletar = await deleteVehicle(7)
    console.log(deletar.data)

        */
    
            //PUT

        /*
    
    async function updateVehicle(id, {modelo, marca, ano, quilometragem, categoria, foto}) {
        return await api.put(`veiculos/${id}`, {
            modelo,
            marca,
            ano,
            quilometragem,
            categoria,
            foto})
    }
    
    const update = await updateVehicle(3, {
        modelo: "Accelo",
        marca: "Mereces-Benz",
        ano: 2018,
        quilometragem: 22411,
        categoria: "C",
        id: 3,
        foto: ""
        } )
    console.log(update.data)
        
        */
    