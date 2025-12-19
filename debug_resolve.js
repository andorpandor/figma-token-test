const StyleDictionary = require('style-dictionary').default;
const config = require('./config.json');

// Add the Untitled-1.json to the sources
const newConfig = {
    ...config,
    source: [...config.source, 'Untitled-1.json'],
    platforms: {
        json: {
            transformGroup: 'js',
            buildPath: 'build/json/',
            files: [{
                destination: 'resolved.json',
                format: 'json/nested'
            }]
        }
    }
};

const sd = new StyleDictionary(newConfig);
try {
    sd.buildAllPlatforms();
    console.log("Build successful!");
} catch (e) {
    console.error("Build failed:", e);
}
