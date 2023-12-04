function NoticiasDAO(connection) {
    this._connection = connection;
};

NoticiasDAO.prototype.getNoticia = function (id_noticia, callback) {
    this._connection.query('SELECT autor, titulo, data_noticia, texto, img FROM MANCHETES WHERE id = ' + id_noticia.id_noticia, callback);
};
NoticiasDAO.prototype.getPrincipaisNoticias = function (callback) {
    this._connection.query('SELECT id, autor, titulo, data_noticia, resumo FROM MANCHETES ORDER BY data_noticia DESC', callback);
};
NoticiasDAO.prototype.getUltimasNoticias = function (callback) {
    this._connection.query('SELECT id, autor, titulo, data_noticia, resumo FROM MANCHETES ORDER BY data_noticia DESC LIMIT 5', callback);
}
NoticiasDAO.prototype.salvarNoticia = function (noticia, callback) {
    this._connection.query('INSERT INTO MANCHETES SET ?', noticia, callback);
};
NoticiasDAO.prototype.getLogin = function (camposDeUsuario, callback) {
    this._connection.query('SELECT id FROM usuarios WHERE usuario = "' + camposDeUsuario.usuario + '" AND senha = ' + camposDeUsuario.senha, callback);
};
NoticiasDAO.prototype.apagaNoticia = function (id_noticia, callback) {
    this._connection.query('DELETE FROM MANCHETES WHERE id = ' + id_noticia.id_noticia, callback);
};
NoticiasDAO.prototype.getNoticiaUpdate = function (id_noticia, callback) {
    this._connection.query('SELECT id, resumo, autor, titulo, data_noticia, texto, img FROM MANCHETES WHERE id = ' + id_noticia.id_noticia, callback);
};
NoticiasDAO.prototype.updateNoticia = function (noticia, callback) {
    console.log(noticia);
    this._connection.query('UPDATE MANCHETES SET titulo = ?, texto = ?, resumo = ?, autor = ?,  data_noticia = ?, img = ?  WHERE id = ?', [noticia.titulo, noticia.texto, noticia.resumo, noticia.autor, noticia.data_noticia, noticia.img, noticia.id], callback);
};
module.exports = function () {
    return NoticiasDAO;
}
