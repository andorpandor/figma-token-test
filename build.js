const StyleDictionary = require('style-dictionary').default;
const config = require('./config.json');

async function build() {
    // Update CSS platform to use the custom transform
    if (config.platforms.css) {
        delete config.platforms.css.transformGroup;
        config.platforms.css.transforms = [
            'attribute/cti',
            'name/kebab',
            'time/seconds',
            'html/icon',
            'size/object-custom',
            'color/css',
            'asset/url',
            'fontFamily/css',
            'cubicBezier/css',
            'strokeStyle/css/shorthand',
            'border/css/shorthand',
            'typography/css/shorthand',
            'transition/css/shorthand',
            'shadow/css/shorthand'
        ];
    }

    // Initialize Style Dictionary
    const sd = new StyleDictionary(config);

    // Register custom transform
    sd.registerTransform({
        name: 'size/object-custom',
        type: 'value',
        filter: function (token) {
            const val = token.$value || token.value;
            return token.$type === 'dimension' && val && typeof val === 'object' && val.value !== undefined && val.unit !== undefined;
        },
        transform: function (token) {
            const val = token.original.$value || token.original.value || token.$value || token.value;
            return `${val.value}${val.unit}`;
        }
    });

    // Build all platforms
    await sd.buildAllPlatforms();
}

build();
