const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

// Rota para criar um novo pagamento
router.post('/criar', pagamentoController.criarPagamento);

// Rota para listar todos os pagamentos
router.get('/listar', pagamentoController.listarPagamentos);

// Rota para obter um pagamento por ID
router.get('/chave/:id', pagamentoController.obterPagamentoPorId);

// Rota para atualizar um pagamento
router.put('/editar/chave/:id', pagamentoController.atualizarPagamento);

// Rota para excluir um pagamento
router.delete('/deletar/chave/:id', pagamentoController.excluirPagamento);

module.exports = router;
