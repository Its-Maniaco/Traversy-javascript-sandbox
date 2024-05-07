// querySelectorAll()

const listItems = document.querySelectorAll('.item'); // Returns a NodeList
// can use array methods unlike html document

// using array method on NodeList
listItems.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 1) {
      item.remove();
    }
    if (index === 0) {
        item.innerHTML = ` Oranges
        <button class="remove-item btn-link text-red">
          <i class="fa-solid fa-xmark"></i>
        </button>`;
      }
    });