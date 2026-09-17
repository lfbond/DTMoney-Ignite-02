//IMPORTS
import { Router } from "express";
import { z } from "zod";

//ROUTER
export const transactionsRouter = Router()

//SCHEMAS
const createTransactionSchema = z.object({
    id: z.coerce.number().int().positive(),
    description: z.string().min(1),
    price: z.number().positive(),
    category: z.string().min(1),
    type: z.enum(['income', 'outcome']),
})
const updateTransactionSchema = createTransactionSchema.partial()
const transactionParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
})

//DADOS TEMPORÁRIOS
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

//READ ALL
transactionsRouter.get('/', (req, res) => {
    return res.status(200).json({
        transactions,
    })
})

//READ ONE
transactionsRouter.get('/:id', (req, res) => {
    const paramsResult = transactionParamsSchema.safeParse(req.params)

    if (!paramsResult.success) {
        return res.status(400).json({
        message: 'ID da transação inválido',
        })
    }

    const { id } = paramsResult.data

    const transaction = transactions.find(
        (transaction) => transaction.id === id,
    )

    if (!transaction) {
        return res.status(404).json({
        message: 'Transação não existe',
        })
    }

    return res.status(200).json({
        transaction,
    })
})

//CREATE
transactionsRouter.post('/', (req, res) => {
    const result = createTransactionSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
            message: 'Dados de transação inválidos',
            errors: result.error.flatten().fieldErrors,
        })
    }

    const { description, price, category, type } = result.data

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
        transaction,
    })
})

//UPDATE
transactionsRouter.patch('/:id', (req, res) => {
    transactionsRouter.patch('/:id', (req, res) => {
    // 1. Valida o parâmetro :id da URL
    const paramsResult = transactionParamsSchema.safeParse(req.params)

    if (!paramsResult.success) {
        return res.status(400).json({
        message: 'ID da transação inválido',
        })
    }

    const { id } = paramsResult.data

    // 2. Valida os dados enviados no body
    const result = updateTransactionSchema.safeParse(req.body)

    if (!result.success) {
        return res.status(400).json({
        message: 'Dados da transação inválidos',
        errors: result.error.flatten().fieldErrors,
        })
    }

    const { description, price, category, type } = result.data

    // 3. Procura a transação
    const transactionIndex = transactions.findIndex(
        (transaction) => transaction.id === id,
    )

    if (transactionIndex === -1) {
        return res.status(404).json({
        message: 'Transação não existe',
        })
    }

    // 4. Recupera os dados atuais
    const currentTransaction = transactions[transactionIndex]

    // 5. Monta a transação atualizada
    const updatedTransaction = {
        ...currentTransaction,
        description: description ?? currentTransaction.description,
        price: price ?? currentTransaction.price,
        category: category ?? currentTransaction.category,
        type: type ?? currentTransaction.type,
    }

    // 6. Substitui no array
    transactions[transactionIndex] = updatedTransaction

    // 7. Retorna a transação atualizada
    return res.status(200).json({
        transaction: updatedTransaction,
    })
    })
})

//DELETE
transactionsRouter.delete('/:id', (req, res) => {
    transactionsRouter.delete('/:id', (req, res) => {
    // 1. Valida o ID recebido pela URL
    const paramsResult = transactionParamsSchema.safeParse(req.params)

    if (!paramsResult.success) {
        return res.status(400).json({
        message: 'ID da transação inválido',
        })
    }

    const { id } = paramsResult.data

    // 2. Procura a posição da transação
    const transactionIndex = transactions.findIndex(
        (transaction) => transaction.id === id,
    )

    // 3. Se não encontrou
    if (transactionIndex === -1) {
        return res.status(404).json({
        message: 'Transação não existe',
        })
    }

    // 4. Remove a transação
    transactions.splice(transactionIndex, 1)

    // 5. Operação concluída sem conteúdo de resposta
    return res.status(204).send()
    })
})