// elementos usados no upload e na pré-visualização
const imageInput = document.getElementById('imageInput');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');
const dropZone = document.getElementById('dropZone');
const removeImage = document.getElementById('removeImage');


// valida o tipo do arquivo
function validarImagem(file) {
    if (!file.type.startsWith('image/')) {
        alert('Por favor, selecione apenas arquivos de imagem.');
        return false;
    }

    return true;
}


// seleção de imagem pelo botão
imageInput.addEventListener('change', function(event) {
    const file = event.target.files[0];

    if (file && validarImagem(file)) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else if (file) {
        imageInput.value = '';
    }
});


// permite arrastar arquivos sobre a área de upload
dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});


// destaque visual durante o arraste
dropZone.addEventListener('dragenter', function () {
    dropZone.classList.add('drag-active');
});

dropZone.addEventListener('dragleave', function () {
    dropZone.classList.remove('drag-active');
});


// recebe a imagem arrastada
dropZone.addEventListener('drop', function(event) {
    event.preventDefault();
    dropZone.classList.remove('drag-active');

    const file = event.dataTransfer.files[0];

    if (file && validarImagem(file)) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});


// remove a imagem selecionada
removeImage.addEventListener('click', function () {
    imageInput.value = '';
    imagePreview.src = '';
    previewContainer.style.display = 'none';
});