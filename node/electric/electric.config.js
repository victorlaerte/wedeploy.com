'use strict';

var marble = require('marble');

module.exports = {
    frontMatterHook: function(siteData) {
        if (!siteData.index.url) {
            siteData.index.url = 'https://wedeploy.com/'
        }

        siteData.env = process.env.NODE_ENV;

        return siteData;
    },
    metalComponents: ['electric-marble-components', 'marble-topbar'],
    sassOptions: {
        includePaths: ['node_modules', marble.src],
        outputStyle: 'compressed'
    },
    codeMirrorLanguages: ['xml', 'css', 'javascript', 'clike', 'swift', 'groovy', 'shell'],
    deployOptions: { branch: 'ui' },
    vendorSrc: ['node_modules/marble/build/fonts/**']
};
