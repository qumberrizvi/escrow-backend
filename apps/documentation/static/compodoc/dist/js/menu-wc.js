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
                                            'data-bs-target="#controllers-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' :
                                            'id="xs-controllers-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' :
                                        'id="xs-injectables-links-module-AuthModule-c2ad92d64f3ad54094f1b7e4afaf58a24bb15329f1383edee5c20ab9000dd258ad3df4d41edcc672025bee7d591dc6fef98f92ea73015bd7786d1963eba68d17"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
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
                                            'data-bs-target="#controllers-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' : 'data-bs-target="#xs-controllers-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' :
                                            'id="xs-controllers-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' }>
                                            <li class="link">
                                                <a href="controllers/EscrowController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscrowController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' : 'data-bs-target="#xs-injectables-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' :
                                        'id="xs-injectables-links-module-EscrowModule-544e6a3866f43ba801127194fb8e4c453fbdcc86bd36dbcf65026be89b9ace83b58957c5c40631f94ae10ec2219ac8232b0f72ba756a9b4dc2e76699271bfc60"' }>
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
                                <a href="modules/JwtAuthGuardModule.html" data-type="entity-link" >JwtAuthGuardModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MediaModule.html" data-type="entity-link" >MediaModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' : 'data-bs-target="#xs-controllers-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' :
                                            'id="xs-controllers-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' }>
                                            <li class="link">
                                                <a href="controllers/MediaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' : 'data-bs-target="#xs-injectables-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' :
                                        'id="xs-injectables-links-module-MediaModule-6bbf08c5aaff8ec0c8d2ac9c291b9728a7d531a614a1dd9947c8688bdc855abf0163b15106ae5efef36cf06f50e2ab653f24222fd962aba8fd500236b63b3d75"' }>
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
                                            'data-bs-target="#controllers-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' :
                                            'id="xs-controllers-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' :
                                        'id="xs-injectables-links-module-NotificationModule-1f718af776d9334da9f0b95ae20d2675fd3a151129b693d5c418786f87e079bc049a88079dbe8e4c8e6958728d9531e97cc10b03953d876436b752047e01a7d8"' }>
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
                                            'data-bs-target="#controllers-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' : 'data-bs-target="#xs-controllers-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' :
                                            'id="xs-controllers-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' }>
                                            <li class="link">
                                                <a href="controllers/OrganizationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' : 'data-bs-target="#xs-injectables-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' :
                                        'id="xs-injectables-links-module-OrganizationModule-8018c1fb59829dca17aa75d66ad5dc95c3c55ac51840d8690df837d04ad50080aa012ffc116fa748a5399c755b80e90c843183c685849c6847e5574b0ad86cf7"' }>
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
                                            'data-bs-target="#controllers-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' : 'data-bs-target="#xs-controllers-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' :
                                            'id="xs-controllers-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' :
                                        'id="xs-injectables-links-module-PaymentModule-b490d0ff56a616c84b20ba31493a559be2a9986ddf73bd212bc29b4b7de6d9dab5f3e6c6f9fc44d61674d456ef244dad8bc0fb547d9e4dd5f51529b30e8b184a"' }>
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
                                            'data-bs-target="#controllers-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' : 'data-bs-target="#xs-controllers-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' :
                                            'id="xs-controllers-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' }>
                                            <li class="link">
                                                <a href="controllers/PropertyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' : 'data-bs-target="#xs-injectables-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' :
                                        'id="xs-injectables-links-module-PropertyModule-7adc83d893a79a9a4cd9ef41660975369b3c1c955a1710e83c46e0819c52298da77554a004ee2bb5915159297bb9353cc9871ec400dd845e6d5811dfbfcaefea"' }>
                                        <li class="link">
                                            <a href="injectables/PropertyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SeederModule.html" data-type="entity-link" >SeederModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' : 'data-bs-target="#xs-controllers-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' :
                                            'id="xs-controllers-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' : 'data-bs-target="#xs-injectables-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' :
                                        'id="xs-injectables-links-module-UserModule-55f0e13ff0afaafe4acfc077d9e0afd1e4d12f2de9cb898afa89d94ac66ed38131827d92a6ec15ac03663a6cd9fbadf6ecbfbea9ed8dcc4861f544350861ea06"' }>
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
                                    <a href="entities/Permission.html" data-type="entity-link" >Permission</a>
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
                                <a href="classes/CreatePermissionTables1741966377333.html" data-type="entity-link" >CreatePermissionTables1741966377333</a>
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
                                <a href="classes/DataSource.html" data-type="entity-link" >DataSource</a>
                            </li>
                            <li class="link">
                                <a href="classes/EscrowResolver.html" data-type="entity-link" >EscrowResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/JwtUtil.html" data-type="entity-link" >JwtUtil</a>
                            </li>
                            <li class="link">
                                <a href="classes/Login.html" data-type="entity-link" >Login</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginInput.html" data-type="entity-link" >LoginInput</a>
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
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/PropertyResolver.html" data-type="entity-link" >PropertyResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role-1.html" data-type="entity-link" >Role</a>
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
                                <a href="classes/User-2.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver.html" data-type="entity-link" >UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver-1.html" data-type="entity-link" >UserResolver</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserUniqueConstraints1741988202974.html" data-type="entity-link" >UserUniqueConstraints1741988202974</a>
                            </li>
                            <li class="link">
                                <a href="classes/ValidateUserInput.html" data-type="entity-link" >ValidateUserInput</a>
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
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SeederService.html" data-type="entity-link" >SeederService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/SeederService.html" data-type="entity-link" >SeederService</a>
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