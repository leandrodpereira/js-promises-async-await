const uploadBtn = document.getElementById('upload-btn');
const inputUpload = document.getElementById('image-upload');

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
});


function arquivoValido(arquivo) {
    if (!arquivo.type.match('image.*')) {
        alert('Por favor, selecione uma imagem PNG ou JPEG.');
        return false;
    }

    if (arquivo.size > 2 * 1024 * 1024) { // 2MB
        alert('O arquivo é muito grande. Por favor, selecione uma imagem menor que 2MB.');
        return false;
    }

    return true;
}


const imagemPrincial = document.querySelector(".main-imagem");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onload = () => {
            resolve({url: leitor.result, nome: arquivo.name});
        };

        leitor.onerror = () => {
            reject(`Erro ao ler o arquivo ${arquivo.name}`);
        };
        
        leitor.readAsDataURL(arquivo);
    });
}

inputUpload.addEventListener('change', async (event) => {
    const arquivo = event.target.files[0];
    if (arquivoValido(arquivo)) {
        try {
            const { url, nome } = await lerConteudoDoArquivo(arquivo);
            imagemPrincial.src = url;
            nomeDaImagem.textContent = nome;
        } catch (error) {
            console.log("Erro ao ler o arquivo");
        }
    }   
    
});