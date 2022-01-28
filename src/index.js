const express = require('express');
app.use(express);

port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("listening on port " + port);
});