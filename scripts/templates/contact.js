function contactTemplate(data) {
  const { name } = data;

  function createInputDiv(labelText, inputId, inputType, inputName) {
    const inputDiv = document.createElement('div');
    inputDiv.className = 'form_data';
    const label = document.createElement('label');
    label.setAttribute('for', inputId);
    label.textContent = labelText;
    const input = document.createElement('input');
    input.setAttribute('id', inputId);
    input.setAttribute('type', inputType);
    input.setAttribute('name', inputName);

    inputDiv.appendChild(label);
    inputDiv.appendChild(input);

    return inputDiv;
  }

  function getContactCardDOM() {
    const photographerContact = document.createElement('div');
    photographerContact.id = 'contact_modal';
    const photographerModal = document.createElement('div');
    photographerModal.className = 'modal';
    const modalHeader = document.createElement('header');
    const titleCloseModal = document.createElement('div');
    titleCloseModal.className = 'modal_title_close';
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal_title';
    const closeModalButton = document.createElement('button');
    closeModalButton.className = 'close_modal_button';
    closeModalButton.id = 'close_modal';
    const closeModalImage = document.createElement('img');
    const photographerName = document.createElement('p');
    photographerName.className = 'photographer_name';
    const photographerForm = document.createElement('form');
    photographerForm.id = 'photographer_form';
    const photographerFormData = document.createElement('div');
    photographerFormData.className = 'form_data';
    const messageForm = document.createElement('label');
    const messageInput = document.createElement('textarea');
    const sendButtonForm = document.createElement('button');
    sendButtonForm.className = 'button_submit';

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    });
    closeModalButton.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        closeModal();
      }
    });

    modalTitle.textContent = 'Contactez-moi';
    closeModalImage.setAttribute('src', 'assets/icons/close.svg');
    closeModalImage.setAttribute('alt', 'Fermer la fenêtre de la modale');
    closeModalImage.addEventListener('click', () => {
      closeModal();
    });

    photographerName.textContent = name;
    messageForm.setAttribute('for', 'message');
    messageForm.textContent = 'Votre message';
    messageInput.setAttribute('id', 'message');
    messageInput.setAttribute('type', 'message');
    messageInput.setAttribute('name', 'message');

    const firstNameDiv = createInputDiv('Prénom', 'first', 'text', 'first');
    const lastNameDiv = createInputDiv('Nom', 'last', 'text', 'last');
    const emailDiv = createInputDiv('Email', 'email', 'email', 'email');

    sendButtonForm.setAttribute('type', 'submit');
    sendButtonForm.addEventListener('click', () => {
      submitFormData();
    });
    sendButtonForm.textContent = 'Envoyer';

    photographerContact.appendChild(photographerModal);
    photographerModal.appendChild(modalHeader);
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(photographerName);
    modalHeader.appendChild(closeModalButton);
    closeModalButton.appendChild(closeModalImage);
    photographerModal.appendChild(photographerForm);
    photographerForm.appendChild(firstNameDiv);
    photographerForm.appendChild(lastNameDiv);
    photographerForm.appendChild(emailDiv);
    photographerForm.appendChild(photographerFormData);
    photographerFormData.appendChild(messageForm);
    photographerFormData.appendChild(messageInput);
    photographerForm.appendChild(sendButtonForm);

    return photographerContact;
  }

  return { getContactCardDOM };
}
