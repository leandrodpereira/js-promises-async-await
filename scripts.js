const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
});

inputUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file.type.match('image.*')) {
        alert('Por favor, selecione uma imagem PNG ou JPEG.');
        return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB
        alert('O arquivo é muito grande. Por favor, selecione uma imagem menor que 2MB.');
        return;
    }
});