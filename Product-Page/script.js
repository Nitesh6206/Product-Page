  let selectedColor = null;

  function changeImage(src) {
    document.getElementById('mainImage').src = src;
  }

  function selectColor(color) {
    selectedColor = color;
  }

  function addToCart() {
    const quantity = document.getElementById('quantity').value;
    const sizeElement = document.querySelector('input[name="size"]:checked');
    const cartMessage = document.getElementById('cartMessage');

    if (!selectedColor) {
      alert("Please select a color.");
      return;
    }

    if (!sizeElement) {
      alert("Please select a size.");
      return;
    }

    const size = sizeElement.value;
    cartMessage.textContent = `Embrace Sideboard with Color ${selectedColor} and Size ${size} added to cart`;
    // alert("Order successfully placed");
  }

  function increment() {
    const quantityElement = document.getElementById('quantity');
    let currentValue = parseInt(quantityElement.value);
    currentValue += 1;
    quantityElement.value = currentValue;
  }

  function decrement() {
    const quantityElement = document.getElementById('quantity');
    let currentValue = parseInt(quantityElement.value);
    if (currentValue > 1) {
      currentValue -= 1;
      quantityElement.value = currentValue;
    }
  }

  document.querySelectorAll('.color-option').forEach(colorOption => {
    colorOption.addEventListener('click', (e) => {
      selectColor(e.target.style.backgroundColor);
    });
  });

  document.querySelector('.add-to-cart').addEventListener('click', addToCart);
  document.querySelector('.increment').addEventListener('click', increment);
  document.querySelector('.decrement').addEventListener('click', decrement);

  window.changeImage = changeImage;
