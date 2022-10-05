const withImages = require('next-images')
const withPlugins = require('next-compose-plugins');

const nextJsConfig = {
    TrailingSlash: true,
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            //'/hb-home': { page: '/hb-home' },
            //'/index2': { page: '/index2' },
            //'/index3': { page: '/index3' },
            //'/index4': { page: '/index4' },
            //'/index5': { page: '/index5' },
            //'/index6': { page: '/index6' },
            //'/index7': { page: '/index7' },
            //'/index8': { page: '/index8' },
            '/about': { page: '/about' },
            //'/blog': { page: '/blog' },
            //'/blog2': { page: '/blog2' },
            //'/blog-details': { page: '/blog-details' },
            //'/coming-soon': { page: '/coming-soon' },
            '/contact': { page: '/contact' },
            '/error': { page: '/error' },
            '/faq': { page: '/faq' },
            '/pricing': { page: '/pricing' },
            '/privacy-policy': { page: '/privacy-policy' },
            //'/project-details': { page: '/project-details' },
            //'/projects': { page: '/projects' },
            '/projects2': { page: '/projects2' },
            '/service-details': { page: '/service-details' },
            '/services': { page: '/services' },
            '/services2': { page: '/services2' },
            //'/signin': { page: '/signin' },
            //'/signup': { page: '/signup' },
            '/team': { page: '/team' },
            '/terms-conditions': { page: '/terms-conditions' },
        }
    }
}

module.exports = withPlugins ([
    [
        withImages({
            webpack(config, options) {
                return config
            }
        })
    ],

    [
        nextJsConfig
    ]
])
