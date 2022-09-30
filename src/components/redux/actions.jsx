const { createAction } = require('@reduxjs/toolkit');

const addContact = createAction('contacts/addContact');
const deleteContact = createAction('contacts/deleteContact');
const filterContact = createAction('contacts/filterContact');
