'use babel';

import {CompositeDisposable} from 'atom';

let subscriptions;

export function activate() {
  console.log('format activated');

  subscriptions = new CompositeDisposable();
  subscriptions.add(atom.commands.add('atom-workspace', 'format:run'));
}

export function deactivate() {
  console.log('format deactivated');

  subscriptions.dispose();
}

export function provideFormatter(formatter, apiVersion = '1.0.0') {
  console.log(formatter, apiVersion);
};

export const config = {

};
