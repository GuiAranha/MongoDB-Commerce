// mostra nome e quantidade de lanches vendidos, ordenado pela quantidade de vendidos
db.produtos.find({}, { _id: 0, nome: 1, vendidos: 1 }).sort({ vendidos: 1 });