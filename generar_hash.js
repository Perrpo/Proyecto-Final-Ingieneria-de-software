const bcrypt = require('bcryptjs');

async function generarHash(password) {
  const hash = await bcrypt.hash(password, 10);
  console.log('Hash generado:', hash);
}

generarHash('admin123'); 