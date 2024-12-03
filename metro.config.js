const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      'png', // Allow PNG files
      'jpg', // Allow JPG files
      'jpeg', // Allow JPEG files
      'svg', // Optional: Add SVG support if needed
      ...getDefaultConfig(__dirname).resolver.assetExts, // Include default extensions
    ],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
