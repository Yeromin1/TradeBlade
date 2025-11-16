document.addEventListener('DOMContentLoaded', () => {
  const initTariffSelection = (buttonId, listId) => {
    const selectedButton = document.querySelector(buttonId);
    const selectedText = selectedButton.querySelector(
      '.tariffs__container-selected-text'
    );
    const selectedList = document.querySelector(listId);
    const items = selectedList.querySelectorAll(
      '.tariffs__container-selected-item'
    );
    const icon = selectedButton.querySelector(
      '.tariffs__selected-icon-arr-down'
    );

    const toggleListVisibility = () => {
      const isVisible = selectedList.style.display === 'block';
      selectedList.style.display = isVisible ? 'none' : 'block';
      selectedButton.classList.toggle('active', !isVisible);
    };

    selectedButton.addEventListener('click', event => {
      event.stopPropagation();
      toggleListVisibility();
    });

    // Обрабатываем выбор месяца
    items.forEach(item => {
      item.addEventListener('click', event => {
        selectedText.textContent = item.textContent;
        selectedList.style.display = 'none';
        selectedButton.classList.remove('active');
      });
    });

    // Закрытие списка при клике вне кнопки и списка
    document.addEventListener('click', event => {
      if (
        !selectedButton.contains(event.target) &&
        !selectedList.contains(event.target)
      ) {
        selectedList.style.display = 'none';
        selectedButton.classList.remove('active');
      }
    });
  };

  // "STANDART"
  initTariffSelection(
    '#tariffs__selected-id-standart',
    '#tariffs__container-selected-list-id-standart'
  );

  // "VIP"
  initTariffSelection(
    '#tariffs__selected-id-vip',
    '#tariffs__container-selected-list-id-vip'
  );
});

const futuresBtn = document.querySelector('.tariffs__btn-futures');
const spotBtn = document.querySelector('.tariffs__btn-spot');

// При наведении на .tariffs__btn-futures изменяем стиль .tariffs__btn-spot
futuresBtn.addEventListener('mouseenter', () => {
  spotBtn.style.backgroundColor = 'rgba(106, 84, 255, 0.4)';
  spotBtn.style.color = 'var(--q)';
});

// При уходе с .tariffs__btn-futures восстанавливаем стиль .tariffs__btn-spot
futuresBtn.addEventListener('mouseleave', () => {
  spotBtn.style.backgroundColor = 'var(--q)';
  spotBtn.style.color = '#000';
});
