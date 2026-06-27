import axios from "axios";

const URL = "https://fakestoreapi.com/users";

export const getClientes = async () => {
    const { data } = await axios.get(URL);

    const guardados = JSON.parse(localStorage.getItem("clientes"));

    if (guardados) {
        return guardados;
    }

    const clientes = data.map(c => ({
        ...c,
        visible: true
    }));

    localStorage.setItem("clientes", JSON.stringify(clientes));

    return clientes;
};

export const agregarCliente = async (cliente) => {

    const clientes = JSON.parse(localStorage.getItem("clientes")) || [];

    cliente.id = getSmallestAvailableId(clientes);

    cliente.visible = true;

    clientes.push(cliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    return cliente;
};

export const getSmallestAvailableId = (clientes) => {

    let id = 1;

    const ids = clientes
        .map(c => Number(c.id))
        .sort((a,b)=>a-b);

    for(const actual of ids){

        if(actual === id){
            id++;
        }else{
            break;
        }

    }

    return id;
};