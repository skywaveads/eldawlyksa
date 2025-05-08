const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const glob = require('glob');

const PUBLIC_DIR = path.join(process.cwd(), 'public');
const IMAGE_EXTENSIONS = ['.png', '.jpg', '.jpeg'];

// Función para convertir una imagen a WebP y AVIF
async function convertImage(imagePath) {
  try {
    const fileDir = path.dirname(imagePath);
    const fileName = path.basename(imagePath, path.extname(imagePath));
    
    console.log(`Converting ${imagePath} to WebP and AVIF...`);
    
    // Convertir a WebP
    await sharp(imagePath)
      .webp({ quality: 80 })
      .toFile(path.join(fileDir, `${fileName}.webp`));
    
    // Convertir a AVIF
    await sharp(imagePath)
      .avif({ quality: 65 })
      .toFile(path.join(fileDir, `${fileName}.avif`));
    
    console.log(`Successfully converted ${imagePath}`);
  } catch (error) {
    console.error(`Error converting ${imagePath}:`, error);
  }
}

// Función principal
async function main() {
  console.log('Starting image conversion...');
  
  // Encontrar todas las imágenes en public/
  let imagePaths = [];
  
  for (const ext of IMAGE_EXTENSIONS) {
    const matches = glob.sync(`${PUBLIC_DIR}/**/*${ext}`, { nocase: true });
    imagePaths = [...imagePaths, ...matches];
  }
  
  console.log(`Found ${imagePaths.length} images to convert`);
  
  // Convertir todas las imágenes
  for (const imagePath of imagePaths) {
    await convertImage(imagePath);
  }
  
  console.log('Image conversion complete!');
}

main().catch(console.error); 