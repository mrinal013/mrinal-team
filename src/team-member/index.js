/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import metadata from '../block.json';
import Edit from './edit';
import Save from './save';

const singleName = metadata.name.slice( 0, -1 );

registerBlockType( singleName, {
	title: __( 'Team Member', 'team-members' ),
	description: __( 'A team member item', 'team-members' ),
	icon: {
		src: (
			<svg
				class="w-6 h-6 text-gray-800 dark:text-white"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					fill-rule="evenodd"
					d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
					clip-rule="evenodd"
				/>
			</svg>
		),
	},
	parent: [ metadata.name ],
	supports: {
		html: false,
	},
	attributes: {},
	edit: Edit,
	save: Save,
} );
