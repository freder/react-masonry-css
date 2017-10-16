'use strict'

const React = require('react')
const ReactDom = require('react-dom')
const Masonry = require('../lib/ReactMasonry')
//import {Masonry} from '../lib-es5/ReactMasonry'

class App extends React.Component {
	constructor (props) {
		super(props);

		this.state = {};
	}

	render () {
		var breakpointCols = [
			[1, '(max-width: 500px)'],
			[2, '(max-width: 700px)'],
			[3, '(max-width: 1100px)'],
			[4, '(min-width: 1101px)'],
		];

		var heights = [100, 500, 300, 100, 200, 500, 300, 200, 100, 100];

		return (
			<div>
				<Masonry
					breakpointCols={breakpointCols}
					heights={heights}
					className="my-masonry-grid"
					columnClassName="my-masonry-grid_column"
				>
					{heights
						.map((h, i) => {
							return <div 
								style={{ height: h }}
								key={`${i}-${h}`}
							>
								{i}. {h}
							</div>
						})
					}
				</Masonry>
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('app'))
