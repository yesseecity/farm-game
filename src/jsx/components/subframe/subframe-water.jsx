class SubFrameWater extends React.Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        name: "water",
        ct_name: "澆水器",
        desc: "說明欄"
      },
      {
        name: "water",
        ct_name: "水管",
        desc: "說明欄"
      },
      {
        name: "water",
        ct_name: "微型噴頭",
        desc: "說明欄"
      },
      {
        name: "water",
        ct_name: "滴灌管子",
        desc: "說明欄"
      }
    ];
  }
  componentDidMount() {
    $('.sub-frame').draggable();
  }
  select(itemName) {
    console.log('select: ', itemName);
    this.props.changeMouseState(itemName);
    this.close();
  }
  close(e) {
    if (e) e.stopPropagation();
    this.props.clickHandler();
  }
  renderItem() {
    var itemsDom = []
      for (let item of this.items) {
        itemsDom.push(<div 
          className={'item '+item.name}
          onClick={()=>{this.select(item.name)}}
          >{item.ct_name}</div>)
      }

    return itemsDom
  }
  render() {
    return (
      <div className="sub-frame" id="sub-frame">
        <div className="description">
        澆水-子畫面-道具說明 
        </div>
        <div className="items">
          {this.renderItem()}
        </div>
        <i className="fas fa-times" onClick={()=>{this.props.clickHandler()}}></i>
      </div>
    );
  }
}

