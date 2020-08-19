const path = require('path');
const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles'), path.join(__dirname, 'components')],
    },
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config
    },
});
