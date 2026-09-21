import React from 'react';

const withPopup = WrappedComponent => {
	return class extends React.Component {
		state = {
			isOpen: true,
		};

		closePopup = () => {
			this.setState({ isOpen: false });
		};

		render() {
			const { isOpen } = this.state;

			const { 
                overlayStyle = {}, 
                popupStyle = {} 
            } = this.props;

			if (!isOpen) return <WrappedComponent {...this.props} />;

			return (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'fixed',
						top: 0,
						left: 0,
						width: '100vw',
						height: '100vh',
						background: 'rgba(0,0,0,0.5)',
                        ...overlayStyle,
					}}>
					<div
						style={{
							background: 'white',
							padding: '20px',
							borderRadius: '8px',
							position: 'relative',
                            ...popupStyle,
						}}>
                            
						<button
							style={{
								position: 'absolute',
								top: '10px',
								right: '10px',
							}}
							onClick={this.closePopup}>
							&times;
						</button>

						<WrappedComponent {...this.props} />
					</div>
				</div>
			);
		}
	};
};

export default withPopup;
