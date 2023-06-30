'use strict';

const withInstall = (main, extra) => {
  main.install = app => {
    // eslint-disable-next-line no-restricted-syntax
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp);
    }
  };
  if (extra) {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp;
    }
  }
  console.log('main: ', main);
  return main;
};

exports.withInstall = withInstall;
