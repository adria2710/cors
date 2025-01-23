const express = require('express')
const axios = require('axios')
const app = express()
const cors = require('cors');
app.use(cors());
app.get('/character/:ApiName',  async (req, res) => {
    const ApiName = req.params.ApiName
    const url = `https://rickandmortyapi.com/api/character/?name=${ApiName}`

    try {
        const response = await axios.get(url)

        if (response.data.results && response.data.results.length > 0) {
            const character = response.data.results[0] 
    
            const { name, status, species, gender, origin, image } = character
            res.json({ name, status, species, gender, origin: origin.name, image })

        } else {
            res.status(404).json({ error: 'Personaje no encontrado' })
        }
    } catch (error) {
        res.status(500).json({ error: 'Hubo un problema al procesar la solicitud' })
    }
})

app.listen(3000, () => {
    console.log('servidor https://localhost:3000')
})