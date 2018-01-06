module.exports = function(app) {
    app.get('/', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);


        produtosDAO.lista(function(erros, resultados) {
           
            res.format({
                html: function() {
                    res.render('home/index', {livros:resultados});
                },
                json: function() {
                    res.json(resultados);
                }
            });
        });

        connection.end();
    });
}
