module.exports = {
    website: {
        assets: './_assets',
        js: [
            'jquery.js',
            'semantic.js',
            'hm.js'
        ],
        css: [
            'semantic.css',
            'hm.css'
        ]
    },
    blocks:{
    },
    filters:{
    },
    hooks:{
        "page": function(page) {
            page.content = page.content.replace(/<table>/g, "<table class='ui selectable inverted table center aligned'>");
            return page;
        }
    }
};