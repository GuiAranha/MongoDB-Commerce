// retorna lanches com proteinas de percentual >= 30 e <= 40
db.produtos.find({ valoresNutricionais: { $elemMatch: { tipo: "proteínas", percentual: {$gte: 30, $lte: 40 } } },}
,{ _id: 0, nome: 1 });