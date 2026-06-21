import { useState } from "react";

import {
  TextField,
  Button,
  Paper,
  Typography,
  Snackbar,
  Alert
} from "@mui/material";

const FormularioCliente = () => {

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  const [mensaje, setMensaje] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await fetch(
        "https://fakestoreapi.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: nombre,
            email: email
          })
        }
      );

      const data = await response.json();

      setMensaje(
        `Cliente creado correctamente. ID: ${data.id}`
      );

      setOpen(true);

      setNombre("");
      setEmail("");

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
            value={nombre}
            onChange={(e) =>
              setNombre(e.target.value)
            }
            fullWidth
            margin="normal"
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            fullWidth
            margin="normal"
          />

          <Button
            variant="contained"
            type="submit"
          >
            Agregar Cliente
          </Button>

        </form>

      </Paper>

      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">
          {mensaje}
        </Alert>
      </Snackbar>
    </>
  );
}

export default FormularioCliente;