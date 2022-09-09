// retorna lanches com vendas entre 50 e 100
db.produtos.find({ vendidos: { $gt: 50, $lt: 100 } },
  { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });