/**
 * External dependencies
 */
import React, { PropTypes } from 'react';

/**
 * Internal dependencies
 */
import SiteStream from '../../../../reader/site-stream';

const ReadingWidget = ( { className, site, title } ) => {
	return (
		<div className={ className } >
			{ title }
			<SiteStream site={ site } />
		</div>
	);
};

ReadingWidget.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
};

export default ReadingWidget;
