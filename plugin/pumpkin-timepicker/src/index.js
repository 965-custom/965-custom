  
import loadBlocks from './blocks';
import loadComponents from './components';

export default (editor, opts = {}) => {
  const config = {
    labelName: 'TimePicker',
    inputType: 'pumpkin-timepicker',
    category: 'Forms',
    draggable: 'form, form *',
    labelPfx: 'timepicker',
    script: 'https://cdn.jsdelivr.net/npm/flatpickr',
    style: 'https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css',
    ...opts
  };
  loadComponents(editor, config);
  loadBlocks(editor, config);
};

