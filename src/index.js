import './assets/app-styles.scss';
import './assets/editor-styles.scss';

import { Controller } from './emails-editor/controller';
import { Model } from './emails-editor/model';
import { View } from './emails-editor/view';

class EmailsEditor {
  constructor() {
    const controller = new Controller();
    const model = new Model();
    const view = new View();
  }
}

window.EmailsEditor = EmailsEditor;
export default EmailsEditor;
