const Generator = require('yeoman-generator')

module.exports = class extends Generator {
    prompting() {
        return this.prompt([{
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname
        }]).then(
            answers => {
                this.answers = answers
            }
        )
    }
    writing() {
        const template = [
            'public',
            'public/backup.html',
            'public/favicon.ico',
            'public/index.html',
            'src',
            'src/api',
            'src/api/modules',
            'src/api/modules/test.js',
            'src/api/modules/user.js',
            'src/api/index.js',
            'src/api/request.js',
            'src/assets',
            'src/assets/css',
            'src/assets/css/common.scss',
            'src/assets/css/font_html.css',
            'src/assets/css/margin.scss',
            'src/assets/css/reset.css',
            'src/assets/css/theme_var.less',
            'src/assets/images',
            'src/assets/images/logo.png',
            'src/assets/js',
            'src/assets/js/jssdk.d.ts',
            'src/assets/js/jssdk.js',
            'src/components',
            'src/components/BlockLoading.vue',
            'src/components/MidRouterView.vue',
            'src/components/MPanel.vue',
            'src/components/SvgIcon.vue',
            'src/directives',
            'src/directives/index.js',
            'src/icons',
            'src/icons/svg',
            'src/icons/svg/404.svg',
            'src/icons/index.js',
            'src/layout',
            'src/layout/footer',
            'src/layout/footer/FooterBar.vue',
            'src/layout/footer/index.vue',
            'src/layout/header',
            'src/router',
            'src/router/modules',
            'src/router/modules/article.js',
            'src/router/modules/test.js',
            'src/router/index.js',
            'src/router/permission.js',
            'src/router/routes.js',
            'src/store',
            'src/store/modules/user',
            'src/store/modules/user/index.js',
            'src/store/modules/user/mutations-types.js',
            'src/store/index.js',
            'src/utils',
            'src/utils/mixins',
            'src/utils/mixins/page.js',
            'src/utils/auth.js',
            'src/utils/bus.js',
            'src/utils/components.js',
            'src/utils/index.js',
            'src/utils/inobounce.js',
            'src/utils/jssdk.js',
            'src/utils/plugins.js',
            'src/utils/request.js',
            'src/utils/validate.js',
            'src/utils/WxJsSdk.js',
            'src/views',
            'src/views/article',
            'src/views/article/index.vue',
            'src/views/article/list.vue',
            'src/views/home',
            'src/views/home/index.vue',
            'src/views/test',
            'src/views/test/jssdk.vue',
            'src/views/404.vue',
            'src/App.vue',
            'src/main.js',
            '.browserslistrc',
            '.env.development',
            '.env.mock',
            '.env.production',
            '.eslintignore',
            '.eslintrc.js',
            '.postcssrc.js',
            'babel.config.js',
            'code_style.md',
            'jest.config.js',
            'LICENSE',
            'package-lock.json',
            'package.json',
            'README.md',
            'yarn.lock'
        ]
        template.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}