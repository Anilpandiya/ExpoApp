// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

const defaults = getDefaultConfig(__dirname);

module.exports = { ...defaults, assetPlugins: ['expo-asset/tools/hashAssetFiles']};