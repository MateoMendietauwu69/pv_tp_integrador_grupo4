import axios from "axios";

const URL = "https://fakestoreapi.com/users";
const LS_KEY = "clientes";

const getLS = () => {
    const data = localStorage.getItem(LS_KEY);
    return data ? JSON.parse(data) : [];
};

const saveLS = (data) => {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
};

export const getClientes = async () => {
    const guardados = getLS();

    // si hay datos locales, usalos como cache
    if (guardados.length > 0) {
        return guardados.filter(c => c.visible !== false);
    }

    const { data } = await axios.get(URL);

    const clientes = data.map(c => ({
        ...c,
        visible: true
    }));

    saveLS(clientes);

    return clientes;
};

export const agregarCliente = async (cliente) => {
    const clientes = getLS();

    const nuevo = {
        ...cliente,
        id: getSmallestAvailableId(clientes),
        visible: true
    };

    clientes.push(nuevo);
    saveLS(clientes);

    return nuevo;
};

export const eliminarCliente = async (id) => {
    const clientes = getLS();

    const actualizados = clientes.map(c =>
        Number(c.id) === Number(id)
            ? { ...c, visible: false }
            : c
    );

    saveLS(actualizados);

    return true;
};

export const getClientePorId = async (id) => {
    const clientes = getLS();
    return clientes.find(c => Number(c.id) === Number(id));
};

export const getSmallestAvailableId = (clientes) => {
    const ids = clientes
        .map(c => Number(c.id))
        .filter(n => !isNaN(n))
        .sort((a, b) => a - b);

    let id = 1;

    for (const actual of ids) {
        if (actual === id) id++;
        else if (actual > id) break;
    }

    return id;
};