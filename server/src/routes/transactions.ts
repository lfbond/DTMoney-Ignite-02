//IMPORTS
import { Router } from "express";
import { z } from "zod";
import { prisma } from "../lib/prisma.js";

//ROUTER
export const transactionsRouter = Router()

//SCHEMAS
const createTransactionSchema = z.object({
    description: z.string().min(1),
    price: z.number().positive(),
    category: z.string().min(1),
    type: z.enum(['income', 'outcome']),
})

const updateTransactionSchema = createTransactionSchema.partial()

const transactionParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
})

//READ ALL
transactionsRouter.get('/', async (req, res) => {
    try {
        const transactions = await prisma.transaction.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        })

        return res.status(200).json({
            transactions,
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Erro interno do servidor'
        })
    }
})

//READ ONE
transactionsRouter.get('/:id', async (req, res) => {
    const paramsResult = transactionParamsSchema.safeParse(req.params)

    if (!paramsResult.success) {
        return res.status(400).json({
            message: 'ID da transação invalido',
        })
    }

    const { id } = paramsResult.data

    try {
        const transaction = await prisma.transaction.findUnique({
            where: {
                id,
            },
        })

        if (!transaction) {
            return res.status(404).json({
                message: 'Transação não existe',
            })
        }

        return res.status(200).json({
            transaction,
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Erro interno do Servidor',
        })
    }
})

//CREATE
transactionsRouter.post('/', async (req, res) => {
    const result = createTransactionSchema.safeParse(req.body)

    if(!result.success) {
        return res.status(400).json({
            message: 'Dados de transação inválidos',
            errors: result.error.flatten().fieldErrors,
        })
    }

    const { description, price, category, type } = result.data

    try {
        const transaction = await prisma.transaction.create({
            data: {
                description,
                price,
                category,
                type,
            },
        })

        return res.status(201).json({
            transaction,
        })
    }catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Erro interno do Servidor',
        })
    }

})

//UPDATE
transactionsRouter.patch('/:id', async (req, res) => {
    const paramsResult = transactionParamsSchema.safeParse(req.params)

    if (!paramsResult.success) {
        return res.status(400).json({
            menssage: 'ID da transação inválida',
        })
    }

    const { id } = paramsResult.data

    const result = updateTransactionSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            message: 'Dados da transação inválidos',
            errors: result.error.flatten().fieldErrors,
        })
    }

    try {
        const existingTransaction = await prisma.transaction.findUnique({
            where: {
                id,
            },
        })

        if (!existingTransaction) {
            return res.status(404).json({
                menssage: 'Transação não existe',
            })
        }

        const transaction = await prisma.transaction.update({
            where: {
                id,
            },
            data: result.data,
        })

        return res.status(200).json({
            transaction,
        })
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Erro interno do servidor'
        })
    }
})

//DELETE
transactionsRouter.delete('/:id', async (req, res) => {
    const paramsResult = transactionParamsSchema.safeParse(req.params)
    
    if (!paramsResult.success) {
        return res.status(400).json({
            message: 'ID da transação inválido',
        })
    }

    const { id } = paramsResult.data

    try {
        const existingTransaction = await prisma.transaction.findUnique({
            where: {
                id,
            },
        })

        if (!existingTransaction) {
            return res.status(404).json({
                message: 'Transação não existe',
            })
        }

        await prisma.transaction.delete({
            where: {
                id,
            },
        })

        return res.status(204).send()
    } catch (error) {
        console.error(error)

        return res.status(500).json({
            message: 'Erro interno do servidor'
        })
    }
})