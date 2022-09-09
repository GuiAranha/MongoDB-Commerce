// adiciona avaliacao em todos itens, seta todos bovinos com avaliacao 5 e ave com avaliacao 3, retorna todos
db.produtos.updateMany({},{ $set: { avaliacao: 0 } });
db.produtos.updateMany({ tags: { $elemMatch: { $eq: "bovino" }}}
  ,{ $inc: { avaliacao: 5 } });
db.produtos.updateMany({ tags: { $elemMatch: { $eq: "ave" }}}
,{ $inc: { avaliacao: 3 } });
db.produtos.find({},{ _id: 0, nome: 1, avaliacao: 1 });