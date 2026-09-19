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