export const withInstall = (
  main,
  extra,
) => {
  main.install = (app) => {
    console.log('app: ', app);
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      main[key] = comp
    }
  }

  console.log('main: ', main);

  return main 
}