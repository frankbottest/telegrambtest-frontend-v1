const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

app.use(express.json())

app.post('/auth', async (req, res) => {
	const { hash } = req.body
	const user = await prisma.user.findUnique({ where: { hash } })

	if (user) {
		res.json({ success: true })
	} else {
		res.json({ success: false })
	}
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})
