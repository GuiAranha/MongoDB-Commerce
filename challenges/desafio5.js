// retorna lanches que tiveram curtidas = 36 ou vendas = 85
db.produtos.find({ $or: [{ curtidas: 36 }, { vendidos: 85 }] },
  { _id: 0, nome: 1, curtidas: 1, vendidos: 1 });