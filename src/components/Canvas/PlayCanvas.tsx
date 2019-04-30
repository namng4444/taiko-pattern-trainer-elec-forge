import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState } from '../../reducers';

interface Props {
  savedPattern: string;
}

interface State {
  playPattern: string;
}

class PlayCanvas extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      playPattern: props.savedPattern,
    };
  }
}

const mapStateToProps = ({ canvas: { savedPattern } }: AppState) => ({
  savedPattern,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlayCanvas);
