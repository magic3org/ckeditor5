/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/* bender-tags: browser-only */

'use strict';

import Plugin from '/ckeditor5/plugin.js';
import Editor from '/ckeditor5/editor.js';

let editor;

before( () => {
	editor = new Editor( document.body.appendChild( document.createElement( 'div' ) ) );
} );

describe( 'constructor', () => {
	it( 'should set the `editor` property', () => {
		let plugin = new Plugin( editor );

		expect( plugin ).to.have.property( 'editor' ).to.equal( editor );
	} );
} );
