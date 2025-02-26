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
                                            'data-bs-target="#controllers-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' :
                                            'id="xs-controllers-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' :
                                        'id="xs-injectables-links-module-AuthModule-3636717ba158f07e3c46c606f899c0173880ca18ffc6eaa4db84d748b1f71e79ae65eef9dd102d6d02b0a2aa461667c9c123314c41a238b0c55ebccde8e3414c"' }>
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
                                            'data-bs-target="#controllers-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' : 'data-bs-target="#xs-controllers-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' :
                                            'id="xs-controllers-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' }>
                                            <li class="link">
                                                <a href="controllers/EscrowController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EscrowController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' : 'data-bs-target="#xs-injectables-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' :
                                        'id="xs-injectables-links-module-EscrowModule-48937166acb0a28b11bab9e713072836ec1f5ab93dd8102b5f7a74735295ca3f0a37446cff9518f18147c20325aea097496cbc52d2183bbdc8cab2e3f5f67aee"' }>
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
                                        'data-bs-target="#injectables-links-module-GatewayModule-8aee00835f991ba59f78df3aea52eebc31a36951a5ab499a4da8c9bb1a04163df94b3d3b10ef41d6e1c7fe440b5c4fa29ee7c8c0bb8daef4c3bd268d15c740c1"' : 'data-bs-target="#xs-injectables-links-module-GatewayModule-8aee00835f991ba59f78df3aea52eebc31a36951a5ab499a4da8c9bb1a04163df94b3d3b10ef41d6e1c7fe440b5c4fa29ee7c8c0bb8daef4c3bd268d15c740c1"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GatewayModule-8aee00835f991ba59f78df3aea52eebc31a36951a5ab499a4da8c9bb1a04163df94b3d3b10ef41d6e1c7fe440b5c4fa29ee7c8c0bb8daef4c3bd268d15c740c1"' :
                                        'id="xs-injectables-links-module-GatewayModule-8aee00835f991ba59f78df3aea52eebc31a36951a5ab499a4da8c9bb1a04163df94b3d3b10ef41d6e1c7fe440b5c4fa29ee7c8c0bb8daef4c3bd268d15c740c1"' }>
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
                                            'data-bs-target="#controllers-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' : 'data-bs-target="#xs-controllers-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' :
                                            'id="xs-controllers-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' }>
                                            <li class="link">
                                                <a href="controllers/MediaController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MediaController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' : 'data-bs-target="#xs-injectables-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' :
                                        'id="xs-injectables-links-module-MediaModule-d001045691c5acfd4343ee33220b717c12d517f21c823d0936850d901d111ba8e34938d5b3e7c8161b799bfeed4d68ffe8e06a1837f6b447a8b3f50f609f12e2"' }>
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
                                            'data-bs-target="#controllers-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' : 'data-bs-target="#xs-controllers-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' :
                                            'id="xs-controllers-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' }>
                                            <li class="link">
                                                <a href="controllers/NotificationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NotificationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' : 'data-bs-target="#xs-injectables-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' :
                                        'id="xs-injectables-links-module-NotificationModule-20f433d197adf92743931dc6498a59e7bcda63d6307894ab355bc7b9f43762144e5a21e119d7478747184795538c3121b79299c91bad0c42d5c67a904abfb683"' }>
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
                                            'data-bs-target="#controllers-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' : 'data-bs-target="#xs-controllers-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' :
                                            'id="xs-controllers-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' }>
                                            <li class="link">
                                                <a href="controllers/OrganizationController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OrganizationController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' : 'data-bs-target="#xs-injectables-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' :
                                        'id="xs-injectables-links-module-OrganizationModule-27244526266d79727d5aff81e70b0006ce2d8bffc58ea2e83e9d1d9c1cd3e0cf725a3ff20af3916a808fe91332aec2a140493875c1849f821843647917056ac8"' }>
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
                                            'data-bs-target="#controllers-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' : 'data-bs-target="#xs-controllers-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' :
                                            'id="xs-controllers-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' }>
                                            <li class="link">
                                                <a href="controllers/PaymentController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PaymentController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' : 'data-bs-target="#xs-injectables-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' :
                                        'id="xs-injectables-links-module-PaymentModule-a2fca3b7e760b2d276d00dcbd691a49097b525973f3f888450ad3287e6fb681bf5bc938f9456d742ceab47d41df0906c5122cc6838b49de26867144e6af78867"' }>
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
                                            'data-bs-target="#controllers-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' : 'data-bs-target="#xs-controllers-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' :
                                            'id="xs-controllers-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' }>
                                            <li class="link">
                                                <a href="controllers/PropertyController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' : 'data-bs-target="#xs-injectables-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' :
                                        'id="xs-injectables-links-module-PropertyModule-ead6d62ac15c391f83c46f92e0a54d603b1b3233c34a294dfbd78dded285bbe5faa210b6a0e0c64e5835a6028cee9e54424915d4a268b3cb9b265f5cc32092e7"' }>
                                        <li class="link">
                                            <a href="injectables/PropertyService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropertyService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' : 'data-bs-target="#xs-controllers-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' :
                                            'id="xs-controllers-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' : 'data-bs-target="#xs-injectables-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' :
                                        'id="xs-injectables-links-module-UserModule-9e05c4545abf4a007edce509ce2b572e649f614838eda8e0ac23eca374a1fcdb3f8a385292647f51e139f2422819fde88543fa92de0d4338652d5319cf64dfaf"' }>
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
                                <a href="classes/CreateOrganization1740356244243.html" data-type="entity-link" >CreateOrganization1740356244243</a>
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
                                <a href="classes/SubgraphsBuilder.html" data-type="entity-link" >SubgraphsBuilder</a>
                            </li>
                            <li class="link">
                                <a href="classes/UserResolver.html" data-type="entity-link" >UserResolver</a>
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