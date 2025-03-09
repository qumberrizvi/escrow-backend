export class DatabaseUtil {
  static generateUUIDv7(): string {
    const now = Date.now();
    const timestamp = now.toString(16).padStart(12, '0'); // 48-bit timestamp

    // Generate 10 random bytes
    const randomBytes = Array.from(crypto.getRandomValues(new Uint8Array(10)))
      .map((b) => b.toString(16).padStart(2, '0')) // Convert to hex and ensure 2 characters
      .join('');

    // Construct UUIDv7 (ensuring the correct format)
    return `${timestamp.substring(0, 8)}-${timestamp.substring(8, 12)}-7${randomBytes.substring(1, 3)}-${randomBytes.substring(3, 7)}-${randomBytes.substring(7, 19)}`;
  }
}
