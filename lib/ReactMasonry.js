import React from 'react';
import PropTypes from 'prop-types';
const { getIndexOfLowestValue } = require('./utils.js');


const defaultColClass = 'my-masonry-grid_column';
const defaultGridClass = 'my-masonry-grid';


class Masonry extends React.Component {
	constructor(props) {
		super(props);

		this.reCalculateColumnCount = this.reCalculateColumnCount.bind(this);

		this.state = {
			columnCount: 2
		};
	}

	componentDidMount() {
		this.reCalculateColumnCount();
		window.addEventListener('resize', this.reCalculateColumnCount);
	}

	componentWillReceiveProps() {
		this.reCalculateColumnCount();
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.reCalculateColumnCount);
	}

	reCalculateColumnCount() {
		const { breakpointCols } = this.props;
		const defaultNumCols = 2; // TODO: maybe make this a prop?

		// take the first breakpoint that matches,
		// otherwise use default value
		let columns = defaultNumCols;
		for (const breakpoint of breakpointCols) {
			const [numCols, query] = breakpoint;
			if (window.matchMedia(query).matches) {
				columns = numCols;
				break;
			}
		}

		if (columns !== this.state.columnCount) {
			this.setState({
				columnCount: columns
			});
		}
	}

	itemsInColumns() {
		const { columnCount } = this.state;
		
		const itemsInColumns = new Array(columnCount);
		const items = this.props.children || [];

		// optional prop: list of item heights
		const { heights } = this.props;

		// keep track of current column height
		let currentColHeights = new Array(columnCount);
		currentColHeights.fill(0);

		for (let i = 0; i < items.length; i++) {
			let columnIndex = i % columnCount;
			if (heights) {
				columnIndex = getIndexOfLowestValue(currentColHeights);
				currentColHeights[columnIndex] += heights[i];
			}

			if (!itemsInColumns[columnIndex]) {
				itemsInColumns[columnIndex] = [];
			}
			itemsInColumns[columnIndex].push(items[i]);
		}

		return itemsInColumns;
	}

	renderColumns() {
		const { column, columnClassName } = this.props;
		const childrenInColumns = this.itemsInColumns();
		const w = `${100 / childrenInColumns.length}%`;

		return childrenInColumns.map((items, i) => {
			return <div
				key={i}
				className={columnClassName || defaultColClass}
				style={{ width: w }}
				{...column}
			>
				{items}
			</div>;
		});
	}

	render() {
		const { 
			breakpointCols, 
			columnClassName, 
			column, 
			heights, 
			...wrapperProps 
		} = this.props;

		return (
			<div
				className={defaultGridClass}
				{...wrapperProps}
			>
				{this.renderColumns()}
			</div>
		);
	}
}

Masonry.propTypes = {
	breakpointCols: PropTypes.array,
	columnClassName: PropTypes.string,
	heights: PropTypes.array,
};

Masonry.defaultProps = {
	breakpointCols: [],
	columnClassName: null,
	heights: null,
};

module.exports = Masonry;

