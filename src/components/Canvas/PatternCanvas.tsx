import * as React from 'react';

interface Props {
  pattern: string;
  isStartAtJudgement: boolean;
}

class PatternCanvas extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);

    this.state = {};
  }
}

export default PatternCanvas;
