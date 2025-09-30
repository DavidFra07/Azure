const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let items = [{ id: 1, name: 'Item 1' }];
let currentId = 1; // Para generar IDs automáticos

// GET - Obtener todos los items
app.get('/api/items', (req, res) => res.json(items));

// POST - Crear un nuevo item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: ++currentId,
        name: req.body.name || 'Nuevo Item'
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// PUT - Actualizar un item existente
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find(item => item.id === id);
    
    if (!item) {
        return res.status(404).json({ error: 'Item no encontrado' });
    }
    
    item.name = req.body.name || item.name;
    res.json(item);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));