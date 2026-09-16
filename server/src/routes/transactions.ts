import { response, Router } from "express";
import { request } from "node:http";

export const transactionsRouter = Router()

const transactions = [
    {
        id: 1,
        description: 'Desenvolvimento de website',
        price: 2500,
        category: 'Desenvolvimento',
        type: 'income',
        createdAd: new Date().toISOString(),
    },

    {
        id: 2,
        description: 'Hospedagem',
        price: 150,
        category: 'Infraestrutura',
        type: 'outcome',
        createdAd: new Date().toISOString(),
    },
]

transactionsRouter.get('/', (request, response) => {
    return response.status(200).json({
        transactions,
    })
})