const path = require('path');

module.exports = {
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
};
