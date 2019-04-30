import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, CanvasMode } from '../reducers';

interface Props {
  canvasMode: CanvasMode;
}

class RootLayout extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }

  render() {
    return <div className="rootContainer" />;
  }
}

const mapStateToProps = ({ canvas: { mode } }: AppState) => ({
  canvasMode: mode,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RootLayout);
