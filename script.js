// Lógica para mostrar a imagem selecionada na tela (Protótipo do Front)
const imageInput = document.getElementById('imageInput');
const previewContainer = document.getElementById('previewContainer');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', function(event) {
  const file = event.target.files[0];
  
  if (file) {
    const reader = new FileReader();
    
    reader.onload = function(e) {
      imagePreview.src = e.target.result;
      previewContainer.style.display = 'block';
    }
    
    reader.readAsDataURL(file);
  }
});
// permite arrastar e soltar uma imagem na área de upload
const dropZone = document.getElementById('dropZone');

dropZone.addEventListener('dragover', function(event) {
    event.preventDefault();
});
// quando o usuário solta a imagem, o arquivo é lido e exibido na pré-visualização
dropZone.addEventListener('drop', function(event) {
    event.preventDefault();

dropZone.classList.remove('drag-active');    

    const file = event.dataTransfer.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            previewContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
});
// remove a imagem selecionada e limpa a área de pré-visualização
const removeImage = document.getElementById('removeImage');

removeImage.addEventListener('click', function () {
    imageInput.value = '';
    imagePreview.src = '';
    previewContainer.style.display = 'none';
});

// destaca a área enquanto o usuário arrasta uma imagem sobre ela
dropZone.addEventListener('dragenter', function () {
    dropZone.classList.add('drag-active');
});

dropZone.addEventListener('dragleave', function () {
    dropZone.classList.remove('drag-active');
});
