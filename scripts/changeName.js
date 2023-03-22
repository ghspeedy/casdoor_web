const fs = require('fs');
const path = require('path');

// 递归遍历文件夹并修改文件名
function renameFiles(dir) {
  // 读取文件夹下所有文件和文件夹
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);

    if (stats.isDirectory()) {
      // 如果是文件夹，则递归遍历
      renameFiles(filePath);
    } else {
      // 如果是文件，则修改文件名
      const extname = path.extname(filePath);
      const basename = path.basename(filePath, extname);

      if (extname === '.js' && /^[A-Z]/.test(basename)) {
        const newExtname = '.jsx';
        const newFilePath = path.join(dir, basename + newExtname);

        fs.renameSync(filePath, newFilePath);
        console.log(`${filePath} renamed to ${newFilePath}`);
      }
    }
  });
}

// 使用示例
renameFiles('./src');
