// retorna os 3 primeiros valoresNutricionais de lanches que contenham picles
db.produtos.find({ ingredientes: "picles" },{ _id: 0, nome: 1, ingredientes:1, valoresNutricionais: { $slice: 3 } });