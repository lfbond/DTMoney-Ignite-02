import { Router } from "express";

export const transactionsRouter = Router()

const transactions = [
    {
        id: 1,
        description: 'Desenvolvimento de website',
        price: 2500,
        category: 'Desenvolvimento',
        type: 'income',
        createdAt: new Date().toISOString(),
    },

    {
        id: 2,
        description: 'Hospedagem',
        price: 150,
        category: 'Infraestrutura',
        type: 'outcome',
        createdAt: new Date().toISOString(),
    },
]

transactionsRouter.get('/', (req, res) => {
    return res.status(200).json({
        transactions,
    })
})

transactionsRouter.get('/:id', (req, res) => {
    const { id } = req.params

    const transaction = transactions.find(
        (transaction) => transaction.id === Number(id),
    )

    if(!transaction) {
        return res.status(404).json({
            message: 'Transação não existe',
        })
    }

    return res.status(200).json({
        transaction,
    })
})

transactionsRouter.post('/', (req, res) => {
    const { description, price, category, type } = req.body
    
    const transaction = {
        id: transactions.length + 1,
        description,
        price,
        category,
        type,
        createdAt: new Date().toISOString(),
    }

    transactions.push(transaction)

    return res.status(201).json({
        transaction
    })
})