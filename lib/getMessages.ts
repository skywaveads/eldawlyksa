import fs from 'fs';
import path from 'path';

/**
 * Load messages for a specific locale and namespace
 */
export async function getMessages(locale: string, namespaces: string[] = ['common']) {
  const messages: Record<string, any> = {};

  for (const namespace of namespaces) {
    try {
      const filePath = path.join(process.cwd(), 'messages', locale, `${namespace}.json`);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      messages[namespace] = data;
    } catch (error) {
      console.error(`Error loading messages for ${locale}/${namespace}`, error);
      // If file doesn't exist, continue with empty messages for this namespace
      messages[namespace] = {};
    }
  }

  return messages;
}

/**
 * Get supported locales from the messages directory
 */
export function getSupportedLocales(): string[] {
  try {
    const messagesDir = path.join(process.cwd(), 'messages');
    const dirs = fs.readdirSync(messagesDir, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);
    
    return dirs;
  } catch (error) {
    console.error('Error getting supported locales', error);
    return ['ar', 'en']; // Fallback to default locales
  }
} 