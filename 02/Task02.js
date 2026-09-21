import React from 'react';
import Welcome from './../src/components/Welcome';
import withPopup from './../src/hoc/withPopup';

const ComponentWithPopup = withPopup(Welcome);

const Task02 = () => (
	<section>
		<h2>Task 02</h2>
		<ComponentWithPopup
			overlayStyle={{ background: 'rgba(255, 0, 0, 0.3)' }}
			popupStyle={{ background: 'yellow', opacity: 0.8 }}
		/>
	</section>
);

export default Task02;
