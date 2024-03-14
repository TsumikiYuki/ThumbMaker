// main.js
function gerarThumb() {
    // Obtenha os valores do formulário (título, imagens, cor)
    const videoTitle = document.getElementById('video_title').value;
    const mainColor = document.getElementById('main_color').value;

    // Lógica para criar a thumb (use o servidor Python para isso)
    // Por enquanto, vamos apenas atualizar a visualização

    const thumbnailPreview = document.getElementById('thumbnail-preview');
    thumbnailPreview.style.backgroundColor = mainColor;
    thumbnailPreview.innerText = videoTitle;
}
