import { useState } from "react";
import "../../css/FormularioCliente.css";

import {
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

const FormularioCliente = ({ onAddCliente }) => {

  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: ""
  });

  const [mensaje, setMensaje] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const name = form.name.trim();
    const lastname = form.lastname.trim();
    const email = form.email.trim();

    // 🔴 VALIDACIÓN VACÍOS
    if (!name || !lastname || !email) {
      setMensaje("Error: Todos los campos son obligatorios");
      setOpen(true);
      return;
    }

    // 🔴 VALIDACIÓN NOMBRE
    if (!soloLetras.test(name)) {
      setMensaje("Error: El nombre solo puede contener letras");
      setOpen(true);
      return;
    }

    // 🔴 VALIDACIÓN APELLIDO
    if (!soloLetras.test(lastname)) {
      setMensaje("Error: El apellido solo puede contener letras");
      setOpen(true);
      return;
    }

    // 🔴 VALIDACIÓN EMAIL
    if (!emailRegex.test(email)) {
      setMensaje("Error: Email inválido");
      setOpen(true);
      return;
    }

    try {

      const nuevoCliente = {
        name: {
          firstname: name,
          lastname: lastname
        },
        email: email
      };

      if (onAddCliente) {
        onAddCliente(nuevoCliente);
      }

      setMensaje("Cliente creado correctamente");
      setOpen(true);

      setForm({
        name: "",
        lastname: "",
        email: ""
      });

    } catch (error) {
      console.error(error);
      setMensaje("Error al crear cliente");
      setOpen(true);
    }
  };

  return (
    <>
      <Paper sx={{ p: 3, mb: 3 }}>

        <Typography variant="h5">
          Alta de Cliente
        </Typography>

        <form onSubmit={handleSubmit}>

          <TextField
            label="Nombre"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Apellido"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          <Button variant="contained" type="submit">
            Agregar Cliente
          </Button>

        </form>
      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
      >
        <Alert severity={mensaje.startsWith("Error") ? "error" : "success"}>
          {mensaje}
        </Alert>
      </Snackbar>
    </>
  );
};

export default FormularioCliente;