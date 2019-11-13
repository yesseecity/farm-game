class SubFrameHarvest extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  close(e) {
    e.stopPropagation()
    this.props.clickHandler()
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        收成-子畫面-道具說明 
        </div>
        <div className="items">
          <div className="item">道具1</div>
          <div className="item">道具2</div>
          <div className="item">道具3</div>
          <div className="item">道具4</div>
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

