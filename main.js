var noticias = [];

function atualizarLista(noticia) {
    var lista = document.getElementById('noticias-recentes-list');
    var li = document.createElement('li');
    var dataNoticia = Date.parse(noticia.data);
    var dataAtual = new Date().getTime();

    li.setAttribute('id', 'noticia-' + noticia.id);
    li.setAttribute('class', 'noticia');

    if (dataNoticia<dataAtual){
        console.log(noticias)
        for (i=0; i<noticias.length; i++){
            console.log(noticia.data);
            console.log(noticias[i].data);
            
            if (noticias[i].data<noticia.data){
                
                li.innerHTML = '<p class="titulo" onclick="mostrarNoticia(' + noticia.id + ')">'
                + noticia.titulo
                + ', Autor: '
                + noticia.nomeAutor
                + ', Publicada em '
                + noticia.data
                + '</p>'
                + '<p class="conteudo">'
                + noticia.conteudo
                + '<br>'
                + noticia.email
                + '<br>'
                + '<span>------------------</span>'
                + '<br>'
                + '<button onclick="ocultarNoticia(' + noticia.id + ')">Fechar</button>';
                + '</p>';
                lista.appendChild(li);
            }
        }
    }
}

function salvar(form) {
    var titulo = document.getElementById('frm-titulo').value;
    var conteudo = document.getElementById('frm-conteudo').value;
    var nomeAutor = document.getElementById('frm-nomeAutor').value;
    var email = document.getElementById('frm-email').value;
    var data = document.getElementById('frm-data').value;
    var noticia = {
        id: noticias.length,
        titulo: titulo,
        conteudo: conteudo,
        nomeAutor: nomeAutor,
        email: email,
        data: data
    };
    noticias.push(noticia);
    atualizarLista(noticia);
    form.reset();
}

function mostrarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:inline');
        }
    }
}

function ocultarNoticia(id) {
    var li = document.getElementById('noticia-' + id);
    for (var i = 0; i < li.childNodes.length; i++) {
        var node = li.childNodes[i];
        if (node.getAttribute('class') == 'conteudo') {
            node.setAttribute('style', 'display:none');
        }
    }
}