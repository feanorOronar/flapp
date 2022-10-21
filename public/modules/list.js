const addItem = (itemList) => {
  const container = buildDivContainer();
  const input = buildInputField();
  const button = buildRemoveButton(container);
  container.append(input, button);
  itemList.appendChild(container);
}

const buildDivContainer = () => {
  const div = document.createElement('div');
  return div;
}

const buildInputField = () => {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Item';
  input.classList.add('item');
  return input;
}

const buildRemoveButton = (container) => {
  const button = document.createElement('button');
  button.innerText = '-';
  button.addEventListener('click', () => removeItem(container));
  return button;
}

const removeItem = (container) => {
  container.remove();
}

export { addItem }