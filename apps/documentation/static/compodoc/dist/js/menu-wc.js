'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">qushah-backend documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter additional">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#additional-pages"'
                            : 'data-bs-target="#xs-additional-pages"' }>
                            <span class="icon ion-ios-book"></span>
                            <span>Additional documentation</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="additional-pages"' : 'id="xs-additional-pages"' }>
                                    <li class="chapter inner">
                                        <a data-type="chapter-link" href="additional-documentation/running-migrations-and-seeders.html" data-context-id="additional">
                                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#additional-page-1677ebf405718fc4e7f90e217ae1078a0c9fb00aa36524c0ab16c0e28bb76d5267325b9f60f134ee780d4f61559cbe8be8bf0e3859c022b066951cfa86b5e1a0"' : 'data-bs-target="#xs-additional-page-1677ebf405718fc4e7f90e217ae1078a0c9fb00aa36524c0ab16c0e28bb76d5267325b9f60f134ee780d4f61559cbe8be8bf0e3859c022b066951cfa86b5e1a0"' }>
                                                <span class="link-name">Running Migrations and Seeders</span>
                                                <span class="icon ion-ios-arrow-down"></span>
                                            </div>
                                        </a>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="additional-page-1677ebf405718fc4e7f90e217ae1078a0c9fb00aa36524c0ab16c0e28bb76d5267325b9f60f134ee780d4f61559cbe8be8bf0e3859c022b066951cfa86b5e1a0"' : 'id="xs-additional-page-1677ebf405718fc4e7f90e217ae1078a0c9fb00aa36524c0ab16c0e28bb76d5267325b9f60f134ee780d4f61559cbe8be8bf0e3859c022b066951cfa86b5e1a0"' }>
                                            <li class="link for-chapter2">
                                                <a href="additional-documentation/running-migrations-and-seeders/how-to-use-migration-tool.html" data-type="entity-link" data-context="sub-entity" data-context-id="additional">How to use migration tool</a>
                                            </li>
                                        </ul>
                                    </li>
                        </ul>
                    </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppConfigModule.html" data-type="entity-link" >AppConfigModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' :
                                            'id="xs-controllers-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' :
                                        'id="xs-injectables-links-module-AuthModule-4588f6d5ff8a2bbe35478558eca4899ec9726360845583e77fac77eba7830417c3dc08c080b71808e48d3dbd7daca8c025b116c12f40cf2ec4c0a88206495267"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CommonModule.html" data-type="entity-link" >CommonModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CommonModule-559fd6365a24429ca7e37fa3947e3aff325ab33b9fe3e4ae586886d269bf4e860359d389a04c14508e47bd01146909101ccb0c7425767b921bc42d17d905f03e"' : 'data-bs-target="#xs-injectables-links-module-CommonModule-559fd6365a24429ca7e37fa3947e3aff325ab33b9fe3e4ae586886d269bf4e860359d389a04c14508e47bd01146909101ccb0c7425767b921bc42d17d905f03e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CommonModule-559fd6365a24429ca7e37fa3947e3aff325ab33b9fe3e4ae586886d269bf4e860359d389a04c14508e47bd01146909101ccb0c7425767b921bc42d17d905f03e"' :
                                        'id="xs-injectables-links-module-CommonModule-559fd6365a24429ca7e37fa3947e3aff325ab33b9fe3e4ae586886d269bf4e860359d389a04c14508e47bd01146909101ccb0c7425767b921bc42d17d905f03e"' }>
                                        <li class="link">
                                            <a href="injectables/CommonService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CommonService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabaseModule.html" data-type="entity-link" >DatabaseModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DocumentationModule.html" data-type="entity-link" >DocumentationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' : 'data-bs-target="#xs-controllers-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' :
                                            'id="xs-controllers-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' }>
                                            <li class="link">
                                                <a href="controllers/DocumentationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' : 'data-bs-target="#xs-injectables-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' :
                                        'id="xs-injectables-links-module-DocumentationModule-320967d1e8b964ee266833e217810650332f270aeaca6879ac5f64ad9e5567464978e2db0db6eee2897beae1776359447626cf4fc7aa29bde4fbbffe9908c1ae"' }>
                                        <li class="link">
                                            <a href="injectables/DocumentationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DocumentationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EscrowModule.html" data-type="entity-link" >EscrowModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' : 'data-bs-target="#xs-controllers-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' :
                                            'id="xs-controllers-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' }>
                                            <li class="link">
                                                <a href="controllers/EscrowController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscrowController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' : 'data-bs-target="#xs-injectables-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' :
                                        'id="xs-injectables-links-module-EscrowModule-ec376dc94089c48518990be0da5b982720f96e0cb9f1c790ab0a793b97a08510f2cbce8850eac02496e886c4c83f60ef3f0dee74e385c74756522e5f9a185f6f"' }>
                                        <li class="link">
                                            <a href="injectables/EscrowService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscrowService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GatewayModule.html" data-type="entity-link" >GatewayModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-GatewayModule-d0d2a0f1eb9815139f3af6485e198b7e501ce89ebf5ca146b6d807d99f767910011631f84412bbb13565384acbe5273b79c92e609c406d68f42aa6c772d66cdb"' : 'data-bs-target="#xs-injectables-links-module-GatewayModule-d0d2a0f1eb9815139f3af6485e198b7e501ce89ebf5ca146b6d807d99f767910011631f84412bbb13565384acbe5273b79c92e609c406d68f42aa6c772d66cdb"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-d0d2a0f1eb9815139f3af6485e198b7e501ce89ebf5ca146b6d807d99f767910011631f84412bbb13565384acbe5273b79c92e609c406d68f42aa6c772d66cdb"' :
                                        'id="xs-injectables-links-module-GatewayModule-d0d2a0f1eb9815139f3af6485e198b7e501ce89ebf5ca146b6d807d99f767910011631f84412bbb13565384acbe5273b79c92e609c406d68f42aa6c772d66cdb"' }>
                                        <li class="link">
                                            <a href="injectables/GatewayService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GatewayService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLGatewayModule.html" data-type="entity-link" >GraphQLGatewayModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GraphQLMicroserviceModule.html" data-type="entity-link" >GraphQLMicroserviceModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MediaModule.html" data-type="entity-link" >MediaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' : 'data-bs-target="#xs-controllers-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' :
                                            'id="xs-controllers-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' }>
                                            <li class="link">
                                                <a href="controllers/MediaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' : 'data-bs-target="#xs-injectables-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' :
                                        'id="xs-injectables-links-module-MediaModule-dc393369459b48e59dfbbcd2273e07a34dda1ef304497de5a1e509d8a39cb9a2274a9a812af8997f694319df217d0e9e76b23bb590b388f0ecb24ef45b38b0d6"' }>
                                        <li class="link">
                                            <a href="injectables/MediaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/NotificationModule.html" data-type="entity-link" >NotificationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' :
                                            'id="xs-controllers-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' :
                                        'id="xs-injectables-links-module-NotificationModule-6f1b2de91835d7bea724dd9e372d1743b74d8073f778d96d37788548f5cf37f28d166dce532b6f28b42617fa021af6ce7af354092baf3a8a4c7d82c53b6b049d"' }>
                                        <li class="link">
                                            <a href="injectables/NotificationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrganizationModule.html" data-type="entity-link" >OrganizationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' : 'data-bs-target="#xs-controllers-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' :
                                            'id="xs-controllers-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' }>
                                            <li class="link">
                                                <a href="controllers/OrganizationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' : 'data-bs-target="#xs-injectables-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' :
                                        'id="xs-injectables-links-module-OrganizationModule-053127dce56c663468088198d17c093d8a28c8c9f4bcc1f7587799eaca89d3c88a0dff5bd9996104e5d40cf4f51ff72cd57f16cd8eea80611a2f29adb97096fd"' }>
                                        <li class="link">
                                            <a href="injectables/OrganizationService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaymentModule.html" data-type="entity-link" >PaymentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' : 'data-bs-target="#xs-controllers-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' :
                                            'id="xs-controllers-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' :
                                        'id="xs-injectables-links-module-PaymentModule-92a8dff4e91238127eb5c585cbe6dbfd8f3b3273820745b164de5c063df148591880d20bc7ff198b74c2a1ce98de77ad54d64d54ba233febe68465b50b4e7b56"' }>
                                        <li class="link">
                                            <a href="injectables/PaymentService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PropertyModule.html" data-type="entity-link" >PropertyModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' : 'data-bs-target="#xs-controllers-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' :
                                            'id="xs-controllers-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' }>
                                            <li class="link">
                                                <a href="controllers/PropertyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' : 'data-bs-target="#xs-injectables-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' :
                                        'id="xs-injectables-links-module-PropertyModule-906f36e57fa78e5fe69620855879c9dd6f1a7af021f245eb2deff0f7693d59a550dd4c93e087d3495546cca4eb4754f36c8bc58fc2f7a1187efe691c91897e06"' }>
                                        <li class="link">
                                            <a href="injectables/PropertyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeederModule.html" data-type="entity-link" >SeederModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SeederModule-fe76046e288296a7b7782f5221d30c5d9cdc7bddca3c9709c0ded649d5311156208a20d1df4e47f6a7eef46a2d4ddc804106fd011c96ee1217c72da392816070"' : 'data-bs-target="#xs-injectables-links-module-SeederModule-fe76046e288296a7b7782f5221d30c5d9cdc7bddca3c9709c0ded649d5311156208a20d1df4e47f6a7eef46a2d4ddc804106fd011c96ee1217c72da392816070"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SeederModule-fe76046e288296a7b7782f5221d30c5d9cdc7bddca3c9709c0ded649d5311156208a20d1df4e47f6a7eef46a2d4ddc804106fd011c96ee1217c72da392816070"' :
                                        'id="xs-injectables-links-module-SeederModule-fe76046e288296a7b7782f5221d30c5d9cdc7bddca3c9709c0ded649d5311156208a20d1df4e47f6a7eef46a2d4ddc804106fd011c96ee1217c72da392816070"' }>
                                        <li class="link">
                                            <a href="injectables/SeederService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SeederService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' : 'data-bs-target="#xs-controllers-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' :
                                            'id="xs-controllers-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' : 'data-bs-target="#xs-injectables-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' :
                                        'id="xs-injectables-links-module-UserModule-8fb9a861adb4350194a22ee728596c13337e4c8e1fab10ab4fbb9fb4179ccad69532fb445a41c0845c9733a2cf5cad21e5e1700ce5574dd3652573bd13bda262"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Organization.html" data-type="entity-link" >Organization</a>
                                </li>
                                <li class="link">
                                    <a href="entities/OrganizationMetadata.html" data-type="entity-link" >OrganizationMetadata</a>
                                </li>
                                <li class="link">
                                    <a href="entities/Role.html" data-type="entity-link" >Role</a>
                                </li>
                                <li class="link">
                                    <a href="entities/User.html" data-type="entity-link" >User</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AuthResolver.html" data-type="entity-link" >AuthResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/BaseEntity.html" data-type="entity-link" >BaseEntity</a>
                            </li>
                            <li class="link">
                                <a href="classes/Bootstrapper.html" data-type="entity-link" >Bootstrapper</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigHelper.html" data-type="entity-link" >ConfigHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateOrganizationAndMetaTable1741518145374.html" data-type="entity-link" >CreateOrganizationAndMetaTable1741518145374</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleTable1741519642145.html" data-type="entity-link" >CreateRoleTable1741519642145</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserInput.html" data-type="entity-link" >CreateUserInput</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserTable1741519705062.html" data-type="entity-link" >CreateUserTable1741519705062</a>
                            </li>
                            <li class="link">
                                <a href="classes/DatabaseUtil.html" data-type="entity-link" >DatabaseUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/DataSource.html" data-type="entity-link" >DataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/EscrowResolver.html" data-type="entity-link" >EscrowResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/MediaResolver.html" data-type="entity-link" >MediaResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/NotificationResolver.html" data-type="entity-link" >NotificationResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Organization.html" data-type="entity-link" >Organization</a>
                            </li>
                            <li class="link">
                                <a href="classes/Organization-1.html" data-type="entity-link" >Organization</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrganizationMetadata.html" data-type="entity-link" >OrganizationMetadata</a>
                            </li>
                            <li class="link">
                                <a href="classes/OrganizationResolver.html" data-type="entity-link" >OrganizationResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PaymentResolver.html" data-type="entity-link" >PaymentResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/PropertyResolver.html" data-type="entity-link" >PropertyResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/SubgraphsBuilder.html" data-type="entity-link" >SubgraphsBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver.html" data-type="entity-link" >UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver-1.html" data-type="entity-link" >UserResolver</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppConfigService.html" data-type="entity-link" >AppConfigService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});