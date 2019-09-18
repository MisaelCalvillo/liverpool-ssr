const render = (html) => {
  return (
    `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Todo SSR</title>
          <link rel="stylesheet" href="assets/app.css" type="text/css"></link>
        </head>
        <body>
          <div id="app">${html}</div>
        </body>
      </html>
    `
  )
}

export default render;